import { Context } from '../';
import { INPUT_KEY } from '../utils/constants';
import { BadRequestError } from '../exception/exceptions';
import { parseUrl } from '../utils/parseUrl';

export const $input = (ctx: Context): void => {
  try {
    switch (ctx.req.method) {
      case 'GET':
      case 'DELETE':
        ctx[INPUT_KEY] = parseUrl(ctx.url.search);
        break;
      case 'POST':
      case 'PUT':
      case 'PATCH':
        ctx[INPUT_KEY] = ctx.rawBody ? JSON.parse(ctx.rawBody) : {};
        break;
    }
  } catch (e) {
    throw new BadRequestError(e);
  }
};
