import { IncomingMessage, ServerResponse } from 'http';

export const ctx: Record<string, any> = {};

export type Context = {
  req: IncomingMessage & Record<string, any>;
  res: ServerResponse & Record<string, any>;
  code?: number;
  input?: unknown;
} & Record<string, unknown>;
