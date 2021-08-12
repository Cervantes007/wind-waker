import { Context } from '../context';
import { Action } from '../actions';
import { PIPES_METADATA } from '../utils/constants';

// eslint-disable-next-line no-unused-vars
export type ExpressMiddleware = (req, res, next?) => void;

// eslint-disable-next-line no-unused-vars
export type Pipe = (ctx: Context) => void | Promise<any> | any;

export const setPipes = (fn: Action, pipes: Pipe[] = []) => (fn[PIPES_METADATA] = pipes);

/**
 * Provides compatibility with express middlewares
 */
export const express =
  (pipe: ExpressMiddleware): Pipe =>
  ({ req, res }) => {
    pipe(req, res, () => true);
  };
