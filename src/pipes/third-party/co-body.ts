import _parse from 'co-body';

export const parse = (options: _parse.Options = {}) => async (req) => {
  await _parse(req, options);
};
