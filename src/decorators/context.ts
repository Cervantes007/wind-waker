import { INPUT_KEY, WK_PARAM } from '../utils/constants';

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
  validate?: boolean;
  transform?: boolean;
}

export const Input = (arg: InputOptions['key'] | InputOptions = {}) => {
  let options: InputOptions = {};
  if (typeof arg === 'string') {
    options = { key: arg };
  } else {
    options = arg || {};
  }
  const { key } = options;
  return decorate((ctx) => (key && ctx[INPUT_KEY] ? ctx[INPUT_KEY][key] : ctx[INPUT_KEY]));
};
export const Req = (path?: string) => decorate((ctx) => (path ? ctx.req[path] : ctx.req));
export const Headers = (path?: string) =>
  decorate((ctx) => (path ? ctx.req.headers[path] : ctx.req.headers));
export const Res = (path?: string) => decorate((ctx) => (path ? ctx.res[path] : ctx.res));
