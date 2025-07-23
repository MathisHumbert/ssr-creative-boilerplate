import {CogIcon, EarthGlobeIcon} from '@sanity/icons'

export default {
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  options: {
    singleton: true,
  },
  groups: [
    {
      name: 'seo',
      title: 'Fallback SEO',
      icon: EarthGlobeIcon,
    },
  ],
  fields: [
    // Fallback SEO
    {
      name: 'fallbackSEO',
      title: 'Fallback SEO',
      description: "Default SEO settings used when pages don't have their own SEO data",
      type: 'object',
      group: 'seo',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          description: 'Title for search engines and social sharing (50-60 characters recommended)',
          validation: (Rule) => Rule.max(60).warning('Keep under 60 characters for optimal SEO'),
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          description:
            'Description for search engines and social sharing (150-160 characters recommended)',
          validation: (Rule) => Rule.max(160).warning('Keep under 160 characters for optimal SEO'),
        },
        {
          name: 'keywords',
          title: 'Keywords',
          type: 'string',
          description:
            'SEO keywords separated by commas (e.g. "creative agency, production, advertising")',
          placeholder: 'creative agency, production, advertising, design',
        },
        {
          name: 'ogImage',
          title: 'Open Graph Image',
          type: 'image',
          description: 'Image for social sharing (1200x630px recommended)',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Settings',
      }
    },
  },
}
