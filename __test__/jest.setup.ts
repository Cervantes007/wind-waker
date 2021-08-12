import { app } from '../example/src/app';
import { end } from '../src';

beforeAll(async () => {
  await app.start(4000);
});

afterAll(async () => {
  await end();
});
