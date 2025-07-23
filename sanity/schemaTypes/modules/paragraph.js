export default {
  name: 'paragraph',
  title: 'Paragraph',
  type: 'object',
  fields: [
    {
      name: 'paragraph',
      title: 'Paragraph',
      description: 'Paragraph text content with optional links',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [],
          lists: [],
          marks: {
            decorators: [],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: (Rule) => Rule.required(),
                  },
                  {
                    name: 'blank',
                    type: 'boolean',
                    title: 'Open in new tab',
                    initialValue: true,
                  },
                ],
              },
            ],
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1).error('Text content is required'),
    },
  ],
  preview: {
    select: {
      paragraph: 'paragraph',
    },
    prepare({paragraph}) {
      const text = paragraph?.[0]?.children?.[0]?.text || 'No content'
      return {
        title: 'Paragraph',
        subtitle: text.length > 80 ? `${text.substring(0, 80)}...` : text,
      }
    },
  },
}
