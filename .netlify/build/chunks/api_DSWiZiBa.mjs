import { s as sanityClient } from './Layout_B-ghPKhS.mjs';

async function getLatestArticle() {
  const query = `*[_type == "article"] | order(_createdAt desc)[0] `;
  const firstArticle = await sanityClient.fetch(query);
  return firstArticle;
}

async function getAllArticles() {
  const query = `*[_type == "article"] | order(_createdAt desc)`;
  const articles = await sanityClient.fetch(query);
  return articles;
}

async function getAllListings() {
  const query = `*[_type == "listing"] | order(availability asc)`;
  const listings = await sanityClient.fetch(query);
  return listings;
}

export { getLatestArticle as a, getAllListings as b, getAllArticles as g };
