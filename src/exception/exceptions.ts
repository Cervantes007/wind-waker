export class WindWakerError extends Error {
  name = 'InternalServerError';
  code = 500;
}

export class WindWakerAbort extends Error {
  name = 'WindWakerExit';
  message = 'Aborted';
  code = 200;
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

export class BadRequestError extends WindWakerError {
  name = 'BadRequest';
  code = 400;
  validationErrors;

  constructor(validationErrors = []) {
    super();
    this.validationErrors = validationErrors;
  }
}
