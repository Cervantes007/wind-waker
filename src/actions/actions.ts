import { Pipe } from '../pipes';

export const actions = new Map();

export const action = (name, fn, options: any = {}) => {
  const config = { ...options, fn };
  if (!config.pipe) {
    config.pipe = [];
  }
  actions.set(name, config);
  return { pipe: (pipe) => config.pipe.push(pipe) };
};

export class _Pipeline {
  pipes;
  options = {};

  constructor(...pipes: Pipe[]) {
    this.pipes = pipes;
  }

  setOptions(options) {
    this.options = options;
    return this;
  }

  option(name: string, value: unknown) {
    this.options[name] = value;
    return this;
  }

  action(name: string, handler: any, options: any = {}) {
    options.pipe = this.pipes;
    action(name, handler, options);
    return this;
  }
}
