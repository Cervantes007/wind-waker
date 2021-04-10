import { App, cors } from '../src';
const app = new App({ pattern: 'example/**/*.@(actions).ts' });

app.pipeline(cors());

export { app };
