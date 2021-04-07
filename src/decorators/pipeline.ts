import { Pipe } from '../pipes';
import { actions } from '../actions/actions';
import { ActionsSymbol } from '../utils/symbols';

export const Pipeline = (...pipes: Pipe[]) => (target) => {
  const _actions = target[ActionsSymbol] || [];
  for (const actionName of _actions) {
    const _action = actions.get(actionName);
    _action.pipe = [...pipes, ...(_action.pipe || [])];
  }
};
