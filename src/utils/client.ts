import fs from 'fs';
import { action } from '../actions/actions';
import { App } from '../server/server';

export const generateClient = (app: App, asAction = false) => {
  if (asAction) {
    action('/wwActions', () => {
      const wwActions: any = [];
      for (const [name, config] of app.actions.entries()) {
        wwActions.push({ name, options: config.options });
      }
      return wwActions;
    });
    return;
  }
  setTimeout(() => {
    const stream = fs.createWriteStream('./client/api.ts');
    const requests = `import { axios } from './client';

const request = (action, config) => {
  config.url = \`\${action}\`;
  config.method = 'POST';
  return axios(config);
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
  return requests;
};
