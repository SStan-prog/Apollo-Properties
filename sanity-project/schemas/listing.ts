export default {
  name: 'listing',
  type: 'document',
  title: 'Listings',
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The URL that visitor will visit to see the listing',
      validation: (Rule: any) => Rule.required(),
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'hideListing',
      type: 'boolean',
      title: 'Hide Listing',
    },
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
    {name: 'size', type: 'string', title: 'Size', validation: (Rule: any) => Rule.required()},
    // {
    //   name: 'availability',
    //   type: 'string',
    //   title: 'Available from',
    //   validation: (Rule: any) => Rule.required(),
    // },
    {
      name: 'availability',
      type: 'date',
      title: 'Available from',
      validation: (Rule: any) => Rule.required(),
      options: {
        dateFormat: 'MMMM Do YYYY',
      },
    },
    {name: 'description', type: 'blockContent', title: 'Description'},
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
