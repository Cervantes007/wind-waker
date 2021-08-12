import { createServer, globalAgent, Server } from 'http';
import glob, { IOptions as GlobOptions } from 'glob';
import chalk from 'chalk';
import path from 'path';
import { requestListener } from './request-handler';
import { Pipe } from '../pipes';
import { $input } from '../pipes/input';
import { EXTENSION, PIPES_METADATA } from '../utils/constants';
import { _actions, action } from '../actions/actions';
import { Actions, Action } from '../actions';

globalAgent.maxSockets = 50;

export let __app: App;

interface AppOptions {
  pattern?: string;
  noInput?: boolean;
}

export class App {
  private server: Server;
  public _pipes: Pipe[] = [];
  constructor(options: AppOptions = {}) {
    loadWindWakerFiles(options.pattern);
    this.server = createServer(requestListener);
    if (!__app) {
      __app = this;
    }
    if (!options.noInput) {
      this.pipeline($input);
    }
  }

  pipeline(...pipe: Pipe[]): App {
    if (pipe) {
      this._pipes.push(...pipe);
    }
    return this;
  }

  get pipes(): Pipe[] {
    return this._pipes || [];
  }

  action(name: string, fn: Action): App {
    action(name, fn, this.pipes);
    return this;
  }

  get actions(): Actions {
    return _actions;
  }

  start(port = 4000): Promise<App> {
    return new Promise((resolve) => {
      this.server.listen(port, () => {
        resolve(__app);
      });
    });
  }

  end(): Promise<App> {
    return new Promise((resolve, reject) => {
      this.server.close((err) => {
        if (err) {
          reject(err);
        } else {
          resolve(__app);
        }
      });
    });
  }
}

export const start = (port = 4000, options: AppOptions = {}): Promise<App> => {
  if (!__app) {
    __app = new App(options);
  }
  return __app.start(port);
};

export const end = (): Promise<App> => __app.end();

const loadWindWakerFiles = (
  pattern = `src/**/*.@(${EXTENSION}).ts`,
  options: GlobOptions = { matchBase: true },
) => {
  process.env.NODE_ENV !== 'test' && console.log(chalk.bold.blue('Loading Wind-Waker Files:'));
  glob.sync(pattern, options).forEach(async function (file) {
    process.env.NODE_ENV !== 'test' && console.log(chalk.green(`-> ${file}`));
    const actions = await import(path.resolve(file));
    for (const key in actions) {
      const _action = actions[key];
      if (typeof _action === 'function') {
        action(_action.name, _action, _action[PIPES_METADATA] || []);
      }
    }
  });
};
