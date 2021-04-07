import { WindWakerError } from './exceptions';

export const exceptionHandler = (e, req, res) => {
  if (e instanceof WindWakerError) {
    res.statusCode = e.code;
    return res.end(e.message || '');
  }
  res.statusCode = 500;
  return res.end(e.message || 'Internal Server Error');
};
