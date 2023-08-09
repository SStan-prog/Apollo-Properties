import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '3ans7o2s',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03',
});

export default client;
