import { IncomingMessage, ServerResponse } from 'http';
import { URL } from 'url';

export type Context<T = any> = {
  req: IncomingMessage & Record<string, any>;
  res: ServerResponse & Record<string, any>;
  code?: number;
  rawBody: string;
  input?: T;
  url: URL;
} & Record<string, any>;
