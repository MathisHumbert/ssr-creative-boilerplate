import {DocumentIcon, TiersIcon, EarthGlobeIcon} from '@sanity/icons'

export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: DocumentIcon,
  options: {
    singleton: true,
  },
  groups: [
    {
      name: 'content',
      title: 'Content',
      icon: TiersIcon,
    },
    {
      name: 'seo',
      title: 'SEO',
      icon: EarthGlobeIcon,
    },
  ],
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      group: 'content',
      options: {
        insertMenu: {
          views: [
            {
              name: 'grid',
              previewImageUrl: (schemaTypeName) => `/static/components/${schemaTypeName}.webp`,
            },
          ],
        },
      },
      of: [
        {
          type: 'paragraph',
        },
        {
          type: 'cta',
        },
      ],
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
