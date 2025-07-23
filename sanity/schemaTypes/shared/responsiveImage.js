export default {
  name: 'responsiveImage',
  title: 'Responsive Image',
  type: 'object',
  fields: [
    {
      name: 'desktop',
      title: 'Desktop Image',
      type: 'image',
      description: 'Image for desktop devices (1920px width recommended)',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'tablet',
      title: 'Tablet Image (Optional)',
      type: 'image',
      description: 'Optional image for tablet devices (1440px width recommended)',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'mobile',
      title: 'Mobile Image (Optional)',
      type: 'image',
      description: 'Optional image for mobile devices (390px width recommended)',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      description: 'Alternative text for accessibility (shared across all device sizes)',
      validation: (Rule) => Rule.required(),
    },
  ],
}
