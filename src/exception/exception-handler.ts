import { BadRequestError, WindWakerError } from './exceptions';
import { Context } from '../context/context';

export const exceptionHandler = (e, { res }: Context) => {
  if (e instanceof WindWakerError) {
    if (e instanceof BadRequestError) {
      res.statusCode = e.code;
      return res.end(JSON.stringify(e.validationErrors) || '');
    }
    res.statusCode = e.code;
    return res.end(JSON.stringify(e) || '');
  }
  res.statusCode = 500;
  return res.end(e.message || 'Internal Server Error');
};
