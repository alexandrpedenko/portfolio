import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: '4njco502',
  dataset: 'production',
  apiVersion: '2021-04-25',
  useCdn: true,
});
