import { action } from '../actions/actions';
import { Pipe } from '../pipes';
import { ActionsSymbol, InstanceSymbol } from '../utils/symbols';
import { WK_PARAM } from '../utils/constants';

// eslint-disable-next-line no-unused-vars
export const Action = (...pipes: Pipe[]) => (target, key, descriptor) => {
  const constructor = target.constructor;
  let paramsMetadata: any;

  if (!constructor[InstanceSymbol]) {
    constructor[InstanceSymbol] = new constructor();
  }
  const instance = constructor[InstanceSymbol];

  let handler: any = target[key].bind(instance);
  const field = `${WK_PARAM}-${key}`;
  if (constructor[field]) {
    paramsMetadata = constructor[field];
    handler = (ctx) => {
      const params = paramsMetadata.map((fnParam) => fnParam(ctx));
      return target[key].call(instance, ...params);
    };
  }
  const name = `/${key}`;
  action(name, handler, { pipe: pipes });
  if (!constructor[ActionsSymbol]) {
    constructor[ActionsSymbol] = [];
  }
  constructor[ActionsSymbol].push(name);
};
