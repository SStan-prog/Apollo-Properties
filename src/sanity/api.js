import { useSanityClient, groq } from "astro-sanity";

export async function getLatestArticle() {
  const query = groq`*[_type == "article"][0]`;
  const firstArticle = await useSanityClient().fetch(query);
  return firstArticle;
}

export async function getAllArticles() {
  const query = groq`*[_type == "article"] | order(_createdAt desc)`;
  const articles = await useSanityClient().fetch(query);
  return articles;
}

export async function getAllListings() {
  const query = groq`*[_type == "listing"] | order(_createdAt desc)`;
  const listings = await useSanityClient().fetch(query);
  return listings;
}
