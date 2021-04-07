import { IncomingMessage, ServerResponse } from 'http';

export const ctx: Record<string, any> = {};

export type Context = {
  req: IncomingMessage & Record<string, unknown>;
  res: ServerResponse & Record<string, unknown>;
} & Record<string, unknown>;
