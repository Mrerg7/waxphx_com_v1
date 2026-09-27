interface Env {
  ASSETS: Fetcher;
}

const CANONICAL_HOST = 'waxphx.com';
const CANONICAL_ORIGIN = `https://${CANONICAL_HOST}`;

const HOME_REDIRECT_PATHS = new Set([
  '/index',
  '/index/',
  '/404',
  '/404/',
  '/404.html',
  '/404.html/',
  '/waxphx-com-premium-landing.html',
  '/waxphx-com-premium-landing.html/',
]);

function directoryIndexRedirect(pathname: string): string | null {
  if (!pathname.endsWith('/index.html')) return null;
  const stripped = pathname.slice(0, -'index.html'.length);
  if (stripped === '' || stripped === '/') return '/';
  return stripped.endsWith('/') ? stripped : `${stripped}/`;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const indexTarget = directoryIndexRedirect(url.pathname);
    const www = url.hostname === `www.${CANONICAL_HOST}`;
    const legacy = url.hostname === CANONICAL_HOST && HOME_REDIRECT_PATHS.has(url.pathname);

    if (www || legacy || indexTarget) {
      const targetPath = indexTarget ?? (HOME_REDIRECT_PATHS.has(url.pathname) ? '/' : url.pathname);
      const target = new URL(targetPath + url.search, CANONICAL_ORIGIN);
      return Response.redirect(target.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
