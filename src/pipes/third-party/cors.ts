import { express } from '../pipe';
import _cors from 'cors';

export const cors = (options: _cors.CorsOptions = {}) => express(_cors(options));
