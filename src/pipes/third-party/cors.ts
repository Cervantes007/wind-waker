import _cors from 'cors';
import { WindWakerAbort } from '../../exception/exceptions';

export const $cors =
  (options: _cors.CorsOptions = {}) =>
  ({ req, res }) => {
    _cors(options)(req, res, () => true);
    if (req.method === 'OPTIONS') {
      throw new WindWakerAbort();
    }
  };
