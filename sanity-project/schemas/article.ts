export default {
  name: 'article',
  type: 'document',
  title: 'Articles',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The URL that visitor will visit to see the blog.',
      validation: (Rule: any) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'excerpt',
      type: 'string',
      title: 'Excerpt',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'featuredImage',
      title: 'Featured image',
      description:
        'Upload your featured image for the blog, it does not need to be bigger than 1000px wide. Use https://squoosh.app/ to scale down images.',
      type: 'image',
      validation: (Rule: any) => Rule.required(),
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Describe the image for extra SEO (search enginge optimization benefits)',
        },
      ],
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      description: 'Write your blog here.',
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
