import { IncomingMessage, ServerResponse } from 'http';
import stringify from 'fast-safe-stringify';
import { NotFoundError } from '../exception/exceptions';
import { exceptionHandler } from '../exception/exception-handler';
import { _actions } from '../actions/actions';
import { __app } from './server';
import { Context } from '../context';
import { URL } from 'url';

export const requestListener = async (
  req: IncomingMessage & Record<string, any>,
  res: ServerResponse & Record<string, any>,
): Promise<void> => {
  const _url = new URL(req.url!, `http://${req.headers.host}`);

  let body = '';

  req.on('data', (buffer) => {
    body += buffer;
  });

  req.on('end', async () => {
    const ctx: Context = { req, res, rawBody: body, url: _url };
    try {
      if (_actions.has(_url.pathname)) {
        const endpoint = _actions.get(_url.pathname);
        const fn = typeof endpoint === 'function' ? endpoint : endpoint!.fn;
        const endpointPipe = typeof endpoint === 'object' ? endpoint.pipes || [] : [];

        const pipes: any = [];
        pipes.push(...__app._pipes);
        pipes.push(...endpointPipe);

        for (const pipe of pipes) {
          await pipe(ctx);
        }

        const result = await fn(ctx.input, ctx);
        res.write(typeof result === 'object' ? stringify(result) : result);
        return res.end();
      } else {
        exceptionHandler(new NotFoundError(), ctx);
      }
    } catch (e) {
      exceptionHandler(e, ctx);
    }
  });
};
