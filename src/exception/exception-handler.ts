import { BadRequestError, WindWakerAbort, WindWakerError } from './exceptions';
import stringify from 'fast-safe-stringify';
import { Context } from '../context';

export const exceptionHandler = (e, { res }: Context) => {
  if (e instanceof WindWakerError) {
    if (e instanceof BadRequestError) {
      res.statusCode = e.code;
      return res.end(stringify(e.validationErrors) || '');
    }
    res.statusCode = e.code;
    return res.end(stringify(e) || '');
  } else if (e instanceof WindWakerAbort) {
    res.statusCode = e.code;
    return res.end();
  }
  res.statusCode = 500;
  return res.end(e.message || 'Internal Server Error');
};
