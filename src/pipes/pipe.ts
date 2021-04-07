import { Context } from '../context/context';

// eslint-disable-next-line no-unused-vars
export type ExpressMiddleware = (req, res, next?) => void;

// eslint-disable-next-line no-unused-vars
export type Pipe = (ctx: Context) => void | Promise<any>;

/**
 * Provides compatibility with express middlewares
 */
export const express = (pipe: ExpressMiddleware): Pipe => ({ req, res }) => {
  pipe(req, res, () => true);
};
