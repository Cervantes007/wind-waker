import { Context } from '../context';

export const $code =
  (statusCode: number) =>
  ({ res }: Context): void => {
    res.statusCode = statusCode;
  };
