import { createServer, Server } from 'http';
import glob, { IOptions as GlobOptions } from 'glob';
import chalk from 'chalk';
import path from 'path';
import { requestListener } from './request-handler';
import { Pipe } from '../pipes';
import { EXTENSION } from '../utils/constants';
import { actions } from '../actions/actions';

export let __app: App;

interface AppOptions {
  pattern?: string;
}

export class App {
  private server: Server;
  private _pipes: Pipe[] = [];

  constructor(options: AppOptions = {}) {
    loadWindWakerFiles(options.pattern);
    this.server = createServer(requestListener);
    if (!__app) {
      __app = this;
    }
  }

  pipeline(...pipe: Pipe[]) {
    if (pipe) {
      this._pipes = this._pipes.concat(pipe);
    }
  }

  get pipes() {
    return this._pipes || [];
  }

  get actions() {
    return actions;
  }

  listen(port = 4000) {
    return new Promise((resolve) => {
      this.server.listen(port, () => {
        resolve(true);
      });
    });
  }

  close() {
    return new Promise((resolve, reject) => {
      this.server.close((err) => {
        if (err) {
          reject(err);
        } else {
          resolve(true);
        }
      });
    });
  }
}

const loadWindWakerFiles = (
  pattern = `src/**/*.@(${EXTENSION}).ts`,
  options: GlobOptions = { matchBase: true },
) => {
  process.env.NODE_ENV !== 'test' && console.log(chalk.bold.blue('Loading Wind-Waker Files:'));
  glob.sync(pattern, options).forEach(function (file) {
    process.env.NODE_ENV !== 'test' && console.log(chalk.green(`-> ${file}`));
    import(path.resolve(file));
  });
};
