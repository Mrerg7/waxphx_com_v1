interface Env {
  ASSETS: Fetcher;
}

const CANONICAL_HOST = 'waxphx.com';

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.hostname === `www.${CANONICAL_HOST}`) {
      url.hostname = CANONICAL_HOST;
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
