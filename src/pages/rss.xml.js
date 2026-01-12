import rss from '@astrojs/rss';
import { getAllArticles, getAllListings } from '../sanity/api.js';

export async function GET(context) {
  const [articles, allListings] = await Promise.all([
    getAllArticles(),
    getAllListings()
  ]);

  // Filter out hidden listings
  const listings = allListings.filter(listing => !listing.hideListing);

  // Transform articles to RSS items
  const articleItems = articles.map(article => ({
    title: article.title,
    pubDate: new Date(article._createdAt),
    description: article.excerpt,
    link: `/blog/${article.slug.current}/`,
  }));

  // Transform listings to RSS items
  const listingItems = listings.map(listing => ({
    title: listing.name,
    pubDate: new Date(listing._createdAt),
    description: `${listing.address} - ¥${listing.price}/month - ${listing.size}m²`,
    link: `/listings/${listing.slug.current}/`,
  }));

  // Combine and sort by date (newest first)
  const allItems = [...articleItems, ...listingItems].sort(
    (a, b) => b.pubDate.getTime() - a.pubDate.getTime()
  );

  return rss({
    title: 'Apollo Properties Osaka',
    description: 'Latest apartments and articles from Apollo Properties Osaka - Fully furnished apartments in Osaka, Japan',
    site: context.site,
    items: allItems,
    customData: `<language>en-us</language>`,
  });
}
