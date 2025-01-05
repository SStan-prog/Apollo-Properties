import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: '3ans7o2s',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03',
});

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export { urlFor as u };
