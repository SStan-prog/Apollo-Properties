import { sanityClient } from 'sanity:client';

export async function getLatestArticle() {
  const query = `*[_type == "article"] | order(_createdAt desc)[0] `;
  const firstArticle = await sanityClient.fetch(query);
  return firstArticle;
}

export async function getAllArticles() {
  const query = `*[_type == "article"] | order(_createdAt desc)`;
  const articles = await sanityClient.fetch(query);
  return articles;
}

export async function getAllListings() {
  const query = `*[_type == "listing"] | order(availability asc)`;
  const listings = await sanityClient.fetch(query);
  return listings;
}
