export default {
  name: 'cta',
  title: 'Call to Action',
  type: 'object',
  fields: [
    {
      name: 'media',
      title: 'Media',
      type: 'responsiveImage',
      description: 'Image for the CTA section',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'CTA title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'linkText',
      title: 'Link Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      linkText: 'linkText',
    },
    prepare({linkText}) {
      return {
        title: 'Call to Action',
        subtitle: linkText || 'CTA',
      }
    },
  },
}
