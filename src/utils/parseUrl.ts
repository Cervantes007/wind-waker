import { parse } from 'querystring';

const _parseUrl = () => {
  const cache = new Map();
  return (search: string) => {
    const _search = search.substr(1);
    if (!cache.has(_search)) {
      cache.set(_search, parse(_search));
    }
    return cache.get(_search);
  };
};

export const parseUrl = _parseUrl();
