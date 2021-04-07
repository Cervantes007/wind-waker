import { App } from '../src';

let app;
beforeAll(async () => {
  app = new App({ pattern: 'example/**/*.@(actions).ts' });
  await app.listen(4000);
});

afterAll(async () => {
  await app.close();
});
