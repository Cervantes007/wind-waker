import { Context } from '../context';

export const code =
  (statusCode: number) =>
  (ctx: Context): void => {
    ctx.code = statusCode;
  };
