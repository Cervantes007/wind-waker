import { express } from '../pipe';
import _helmet from 'helmet';
import { ContentSecurityPolicyOptions } from 'helmet/dist/middlewares/content-security-policy';
import { XDnsPrefetchControlOptions } from 'helmet/dist/middlewares/x-dns-prefetch-control';
import { ExpectCtOptions } from 'helmet/dist/middlewares/expect-ct';
import { XFrameOptionsOptions } from 'helmet/dist/middlewares/x-frame-options';
import { StrictTransportSecurityOptions } from 'helmet/dist/middlewares/strict-transport-security';
import { XPermittedCrossDomainPoliciesOptions } from 'helmet/dist/middlewares/x-permitted-cross-domain-policies';
import { ReferrerPolicyOptions } from 'helmet/dist/middlewares/referrer-policy';

type MiddlewareOption<T> = false | T;

interface HelmetOptions {
  contentSecurityPolicy?: MiddlewareOption<ContentSecurityPolicyOptions>;
  dnsPrefetchControl?: MiddlewareOption<XDnsPrefetchControlOptions>;
  expectCt?: MiddlewareOption<ExpectCtOptions>;
  frameguard?: MiddlewareOption<XFrameOptionsOptions>;
  hidePoweredBy?: MiddlewareOption<never>;
  hsts?: MiddlewareOption<StrictTransportSecurityOptions>;
  ieNoOpen?: MiddlewareOption<never>;
  noSniff?: MiddlewareOption<never>;
  originAgentCluster?: boolean;
  permittedCrossDomainPolicies?: MiddlewareOption<XPermittedCrossDomainPoliciesOptions>;
  referrerPolicy?: MiddlewareOption<ReferrerPolicyOptions>;
  xssFilter?: MiddlewareOption<never>;
}

export const $helmet = (options: HelmetOptions = {}) => express(_helmet(options));
