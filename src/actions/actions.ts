import { Pipe } from '../pipes';
import { Action, ActionConfig } from './actions.types';

export type Actions = Map<string, ActionConfig>;
export const _actions: Actions = new Map();

export function action(name: string, fn: Action, pipes: Pipe[] = []): void {
  const config: ActionConfig = { fn, pipes: pipes || [] };
  _actions.set(`/${name}`, config);
}
