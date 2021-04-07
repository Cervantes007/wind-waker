import { IncomingMessage, ServerResponse } from 'http';
import _parse from 'co-body';
import { MethodNotAllowedError, NotFoundError } from '../exception/exceptions';
import { exceptionHandler } from '../exception/exception-handler';
import { actions } from '../actions/actions';
import { __app } from './server';
import { INPUT_KEY } from '../utils/constants';

export const requestListener = async (req: IncomingMessage, res: ServerResponse) => {
  try {
    const { url, method } = req;
    if (method !== 'POST') {
      throw new MethodNotAllowedError(`Method ${method} isn't supported. Please use POST method.`);
    }
    if (url && actions.has(url)) {
      const endpoint = actions.get(url);
      const fn = typeof endpoint === 'function' ? endpoint : endpoint.fn;
      const endpointPipe = typeof endpoint === 'object' ? endpoint.pipe || [] : [];
      const ctx: Record<string, any> = { req, res };
      ctx[INPUT_KEY] = await _parse(req);
      const pipes = [...(__app.pipes || []), ...endpointPipe];
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
      throw new NotFoundError();
    }
  } catch (e) {
    exceptionHandler(e, req, res);
  }
};
