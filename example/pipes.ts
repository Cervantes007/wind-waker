import { Pipe, Context } from '../src';

export const a: Pipe = (ctx: Context) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`A ${ctx.req.url}`);
      ctx.body = 'body A';
      resolve(`A ${ctx.req.url}`);
    }, 200);
  });
};

export const b: Pipe = (ctx: Context) => {
  ctx.b = 'PipeB';
};
