interface Env {
  ASSETS: Fetcher;
}

const CANONICAL_HOST = 'waxphx.com';
const CANONICAL_ORIGIN = `https://${CANONICAL_HOST}`;

/** Paths that should permanently redirect to the homepage in one hop. */
const HOME_REDIRECT_PATHS = new Set([
  '/index',
  '/index/',
  '/index.html',
  '/index.html/',
  '/404',
  '/404/',
  '/404.html',
  '/404.html/',
  '/waxphx-com-premium-landing.html',
  '/waxphx-com-premium-landing.html/',
]);

function needsCanonicalRedirect(url: URL): boolean {
  if (url.hostname === `www.${CANONICAL_HOST}`) return true;
  if (url.hostname === CANONICAL_HOST && HOME_REDIRECT_PATHS.has(url.pathname)) return true;
  return false;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // Collapse www + alias paths into a single 301 to the apex homepage.
    // Prevents multi-hop chains (http→https→www→apex→/index.html→/) that
    // Search Console reports as "Page with redirect".
    if (needsCanonicalRedirect(url)) {
      const targetPath = HOME_REDIRECT_PATHS.has(url.pathname) ? '/' : url.pathname;
      const target = new URL(targetPath + url.search + url.hash, CANONICAL_ORIGIN);
      return Response.redirect(target.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
