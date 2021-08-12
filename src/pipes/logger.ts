import pinoHttp from 'pino-http';
import { DestinationStream } from 'pino';
import { Context } from '../context';

export const $logger =
  (options: pinoHttp.Options = {}, stream?: DestinationStream) =>
  (ctx: Context): void => {
    const logger = pinoHttp(options, stream);
    logger(ctx.req, ctx.res);
    ctx.log = ctx.req.log;
  };
