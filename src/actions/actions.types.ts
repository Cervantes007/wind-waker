import { Context } from '../context';
import { Pipe } from '../pipes';

// eslint-disable-next-line no-unused-vars
export type Action<T = any> = (input: T, ctx: Context<T>) => any | void;

export type ActionConfig = { fn: Action; pipes: Pipe[] };
