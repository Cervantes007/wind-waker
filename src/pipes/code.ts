import { Context } from '../';

export const code = (statusCode: number) => (ctx: Context) => {
  ctx.code = statusCode;
};
