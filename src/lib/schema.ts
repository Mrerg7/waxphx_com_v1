import { FAQS, OG_IMAGE, SITE } from '../config/site';

const origin = SITE.url;

export function pageSchema(opts: {
  path: string;
  title: string;
  description: string;
  crumbs?: { name: string; path: string }[];
  includeProduct?: boolean;
  includeFaq?: boolean;
}) {
  const url = `${origin}${opts.path}`;
  const graph: Record<string, unknown>[] = [
    {
      '@type': 'Organization',
      '@id': `${origin}/#organization`,
      name: SITE.name,
      url: `${origin}/`,
      email: SITE.email,
      logo: OG_IMAGE,
      description: 'Owner of the waxphx.com domain name, offered for sale.',
      contactPoint: {
        '@type': 'ContactPoint',
        email: SITE.email,
        contactType: 'sales',
        areaServed: 'US',
        availableLanguage: ['English'],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${origin}/#website`,
      url: `${origin}/`,
      name: SITE.name,
      description: SITE.description,
      inLanguage: 'en-US',
      publisher: { '@id': `${origin}/#organization` },
    },
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: opts.title,
      description: opts.description,
      isPartOf: { '@id': `${origin}/#website` },
      about: { '@id': `${origin}/#product` },
      datePublished: SITE.published,
      dateModified: SITE.modified,
      inLanguage: 'en-US',
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: OG_IMAGE,
        width: 1200,
        height: 630,
      },
    },
  ];

  if (opts.includeProduct) {
    graph.push({
      '@type': 'Product',
      '@id': `${origin}/#product`,
      name: 'waxphx.com domain name',
      description:
        'Premium .com domain name for Phoenix waxing and hair removal. Registration offered for sale. Not a salon or operating business.',
      url: `${origin}/acquire/`,
      image: OG_IMAGE,
      category: 'Internet domain name',
      brand: { '@type': 'Brand', name: 'waxphx.com' },
      offers: {
        '@type': 'Offer',
        url: `${origin}/acquire/`,
        price: String(SITE.askingPrice),
        priceCurrency: 'USD',
        priceValidUntil: SITE.priceValidUntil,
        availability: 'https://schema.org/InStock',
        seller: { '@id': `${origin}/#organization` },
      },
    });
  }

  if (opts.crumbs && opts.crumbs.length > 0) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: opts.crumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: `${origin}${crumb.path}`,
      })),
    });
  }

  if (opts.includeFaq) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: FAQS.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}
