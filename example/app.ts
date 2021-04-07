import { App } from '../src';
const app = new App({ pattern: 'example/**/*.@(actions).ts' });
console.log(app.actions);
export { app };
