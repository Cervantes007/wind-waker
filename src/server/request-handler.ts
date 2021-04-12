import { IncomingMessage, ServerResponse } from 'http';
import { BadRequestError, MethodNotAllowedError, NotFoundError } from '../exception/exceptions';
import { exceptionHandler } from '../exception/exception-handler';
import { actions } from '../actions/actions';
import { __app } from './server';
import { INPUT_KEY } from '../utils/constants';
import { Context } from '../context/context';

export const requestListener = async (
  req: IncomingMessage & Record<string, any>,
  res: ServerResponse & Record<string, any>,
) => {
  const { url, method } = req;

  let body = '';

  req.on('data', (buffer) => {
    body += buffer;
  });

  req.on('end', async () => {
    try {
      const ctx: Context = { req, res };
      for (const pipe of __app.pipes || []) {
        await pipe(ctx);
      }
      if (method === 'OPTIONS') {
        return res.end();
      }

      if (method !== 'POST') {
        throw new MethodNotAllowedError(
          `Method ${method} isn't supported. Please use POST method.`,
        );
      }
      if (url && actions.has(url)) {
        const endpoint = actions.get(url);
        const fn = typeof endpoint === 'function' ? endpoint : endpoint.fn;
        const endpointPipe = typeof endpoint === 'object' ? endpoint.pipe || [] : [];

        try {
          ctx[INPUT_KEY] = body ? JSON.parse(body) : {};
        } catch (e) {
          throw new BadRequestError(e);
        }

        const pipes = [...endpointPipe];
        for (const pipe of pipes) {
          await pipe(ctx);
        }

        const result = await fn(ctx);
        res.statusCode = ctx.code || 200;
        if (result) {
          res.write(typeof result === 'object' ? JSON.stringify(result) : result);
        }
        return res.end();
      } else {
        exceptionHandler(new NotFoundError(), req, res);
      }
    } catch (e) {
      exceptionHandler(e, req, res);
    }
  });
};
