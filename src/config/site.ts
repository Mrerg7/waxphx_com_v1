export const SITE = {
  name: 'waxphx.com',
  title: 'waxphx.com for Sale — Phoenix Waxing Domain',
  description:
    'waxphx.com is for sale at $95,000. A six-letter .com for Phoenix waxing and hair removal. Escrow transfer. Serious offers welcome at sales@desertrich.com.',
  url: 'https://waxphx.com',
  email: 'sales@desertrich.com',
  locale: 'en_US',
  location: 'Phoenix, Arizona',
  googleSiteVerification: '-EBXpsv55m8HSIZQp6dNYwZjQHGiJ707bsF8PEpIFpo',
  askingPrice: 95000,
  askingPriceLabel: '$95,000',
  priceValidUntil: '2026-12-31',
  published: '2026-06-22',
  modified: '2026-09-27',
} as const;

export const OG_IMAGE = `${SITE.url}/og.jpg`;
export const BRAND_IMAGE = '/brand/mark.jpg';

export const NAV = [
  { href: '/#why', label: 'Why this name' },
  { href: '/phoenix-waxing-market/', label: 'Phoenix market' },
  { href: '/acquire/', label: 'How to buy' },
  { href: '/faq/', label: 'FAQ' },
] as const;

export const FAQS = [
  {
    q: 'Is waxphx.com a waxing salon?',
    a: 'No. This website offers the domain name for sale. It is not a studio, booking service, or franchise. If you need an appointment, this is not the right page.',
  },
  {
    q: 'What is the asking price?',
    a: 'The asking price is $95,000 USD. Qualified offers below that number are reviewed. The price is an asking price, not a third-party appraisal, and it can change.',
  },
  {
    q: 'What does the buyer receive?',
    a: 'The waxphx.com domain registration, transferred through escrow or a registrar push after payment clears. The sale does not include a trademark, a business, staff, a lease, customer lists, or search-ranking guarantees.',
  },
  {
    q: 'How does transfer work?',
    a: 'Send an offer with your intended use. If terms are accepted, the parties open escrow (Escrow.com or an equivalent). The domain is pushed or transferred at the registrar after funds clear. Most pushes complete within a few business days.',
  },
  {
    q: 'Will this domain rank by itself?',
    a: 'No. A relevant .com helps people remember, type, and link to a brand. It does not bypass Google. Rankings still depend on the site, reviews, citations, and a Google Business Profile the buyer builds after launch.',
  },
  {
    q: 'Can the name be used outside a single salon?',
    a: 'Yes. Buyers typically use it for a flagship studio, a mobile waxing brand, a Phoenix booking directory, a training academy, or a product line. The registration is not limited to one business model.',
  },
] as const;

export function acquisitionMailto(extra = ''): string {
  const body = `Hello,\n\nI am interested in acquiring waxphx.com.\n\nName:\nEmail:\nIntended use:\nOffer (USD):\n${extra}\nThank you.`;
  return `mailto:${SITE.email}?subject=${encodeURIComponent('waxphx.com Domain Acquisition Inquiry')}&body=${encodeURIComponent(body)}`;
}
