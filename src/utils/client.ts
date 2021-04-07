import fs from 'fs';
import { App } from '../server/server';

export const generateClient = (app: App) => {
  setTimeout(() => {
    const stream = fs.createWriteStream('./client/api.ts');
    const requests = `import { axios } from './client';

const request = (action, config) => {
  config.url = \`\${action}\`;
  return axios.post(config);
};

export const requests = {${generateRequests(app.actions)}
};
`;
    stream.once('open', () => {
      stream.write(requests);
      stream.end();
    });
  });
};

const generateRequests = (actions): string => {
  let requests = ``;
  actions.forEach((action, key) => {
    requests = `${requests}
  ${key.replace(
    '/',
    '',
  )}: <T>(data: T, options = {}) => request('${key}', { ...options, ...data }),`;
  });
  console.log(requests);
  return requests;
};
