import { BadRequestError, WindWakerError } from './exceptions';

export const exceptionHandler = (e, req, res) => {
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
