import { INPUT_KEY, WK_PARAM } from '../utils/constants';
import { isPrimitive, transformAndValidate, TransformValidationOptions } from '../utils/valitation';
import { BadRequestError } from '../exception/exceptions';

// eslint-disable-next-line no-unused-vars
export const decorate = (pipe: any) => (target: any, key: string, index: number) => {
  const constructor = target.constructor;
  const field = `${WK_PARAM}-${key}`;
  if (!constructor[field]) {
    constructor[field] = [];
  }
  constructor[field].unshift(pipe);
};

export const Ctx = (path?: string) => decorate((ctx) => (path ? ctx[path] : ctx));

export interface InputOptions {
  key?: string;
  validate?: boolean | TransformValidationOptions;
}

export const Input = (arg: InputOptions['key'] | InputOptions = {}) => {
  let options: InputOptions = {};
  if (typeof arg === 'string') {
    options = { key: arg };
  } else {
    options = arg || {};
  }
  const { key } = options;
  const validate = options.validate === undefined ? true : options.validate;
  return (target: any, prop: string, index: number) => {
    const constructor = target.constructor;
    const field = `${WK_PARAM}-${prop}`;
    if (!constructor[field]) {
      constructor[field] = [];
    }
    const paramType = Reflect.getMetadata('design:paramtypes', target, prop)[index];
    constructor[field].unshift(async (ctx) => {
      let value = key && ctx[INPUT_KEY] ? ctx[INPUT_KEY][key] : ctx[INPUT_KEY];
      if (validate === false || isPrimitive(paramType)) {
        if (paramType.name === Number.name) {
          return +value;
        }
        return value;
      }
      try {
        const validateOptions = typeof validate === 'object' ? validate : {};
        value = await transformAndValidate(paramType, value, validateOptions);
        return value;
      } catch (e) {
        throw new BadRequestError(e);
      }
    });
  };
};
export const Req = (path?: string) => decorate((ctx) => (path ? ctx.req[path] : ctx.req));
export const Headers = (path?: string) =>
  decorate((ctx) => (path ? ctx.req.headers[path] : ctx.req.headers));
export const Res = (path?: string) => decorate((ctx) => (path ? ctx.res[path] : ctx.res));
