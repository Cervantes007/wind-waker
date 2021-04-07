export class WindWakerError extends Error {
  name = 'InternalServerError';
  code = 500;
}

export class NotFoundError extends WindWakerError {
  name = 'NotFoundError';
  message = 'Not Found';
  code = 404;
}

export class InternalServerError extends WindWakerError {
  name = 'InternalServerError';
}

export class MethodNotAllowedError extends WindWakerError {
  name = 'MethodNotAllowed';
  code = 405;
}
