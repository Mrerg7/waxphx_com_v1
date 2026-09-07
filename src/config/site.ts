export const SITE = {
  name: 'waxphx.com',
  title: 'waxphx.com • Premium Domain for Sale | Phoenix Waxing & Hair Removal',
  description:
    'Own waxphx.com — the ultimate .com domain for professional body waxing, facial waxing, and expert hair removal in Phoenix. Short, memorable, high-trust .com with perfect local keywords.',
  url: 'https://waxphx.com',
  email: 'sales@desertrich.com',
  locale: 'en_US',
  location: 'Phoenix, Arizona',
  googleSiteVerification: '-EBXpsv55m8HSIZQp6dNYwZjQHGiJ707bsF8PEpIFpo',
} as const;

export const CF_IMAGES = {
  accountHash: '-sPAUAWeA405NiWJ0SNIQA',
  heroImageId: '2f99ac34-1204-4dfa-68be-825064298500',
} as const;

export function cfImageUrl(imageId: string, variant = 'public'): string {
  return `https://imagedelivery.net/${CF_IMAGES.accountHash}/${imageId}/${variant}`;
}

export const OG_IMAGE = cfImageUrl(CF_IMAGES.heroImageId);

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('waxphx.com Domain Acquisition Inquiry')}&body=${encodeURIComponent('Hello,\n\nI am interested in acquiring waxphx.com.\n\nIntended use:\nBudget range:\n\nThank you.')}`;
