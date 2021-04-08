import { validate, validateOrReject, ValidatorOptions } from 'class-validator';
import { plainToClass, ClassTransformOptions } from 'class-transformer';

// eslint-disable-next-line no-unused-vars
export type ClassType<T> = new (...args: any[]) => T;

export type PlainObject = Record<string, unknown>;

export interface TransformValidationOptions {
  validator?: ValidatorOptions;
  transformer?: ClassTransformOptions;
}

export const isPrimitive = (type) =>
  [String.name, Boolean.name, Number.name].indexOf(type.name) !== -1;

export function transformAndValidate<T extends PlainObject>(
  classType: ClassType<T>,
  somethingToTransform: string | PlainObject | PlainObject[],
  options?: TransformValidationOptions,
): Promise<T> {
  return new Promise((resolve, reject) => {
    let object: PlainObject | PlainObject[];
    if (typeof somethingToTransform === 'string') {
      object = JSON.parse(somethingToTransform);
    } else if (somethingToTransform != null && typeof somethingToTransform === 'object') {
      object = somethingToTransform;
    } else {
      return reject(
        new Error(
          'Incorrect object param type! Only string, plain object and array of plain objects are valid.',
        ),
      );
    }

    const classObject = plainToClass(classType, object, options ? options.transformer : void 0);
    if (Array.isArray(classObject)) {
      Promise.all(
        classObject.map((objectElement) =>
          validate(objectElement, options ? options.validator : void 0),
        ),
      ).then((errors) =>
        errors.every((error) => error.length === 0) ? resolve(classObject) : reject(errors),
      );
    } else {
      validateOrReject(classObject, options ? options.validator : void 0)
        .then(() => resolve(classObject))
        .catch(reject);
    }
  });
}
