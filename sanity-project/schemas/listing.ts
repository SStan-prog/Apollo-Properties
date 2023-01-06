export default {
  name: 'listing',
  type: 'document',
  title: 'Listings',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address',
      validation: (Rule: any) => Rule.required(),
    },
    {name: 'price', type: 'string', title: 'Price', validation: (Rule: any) => Rule.required()},

    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        },
      ],
    },
  ],
}
