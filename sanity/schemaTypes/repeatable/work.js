import {DocumentsIcon, TiersIcon, EarthGlobeIcon} from '@sanity/icons'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export default {
  name: 'work',
  title: 'Work Individual',
  type: 'document',
  icon: DocumentsIcon,
  orderings: [orderRankOrdering],
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
    orderRankField({type: 'work'}),
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
              previewImageUrl: (schemaTypeName) =>
                `/static/components/${schemaTypeName === 'blocks' ? 'workBlocks' : schemaTypeName}.webp`,
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
      title: 'brand',
      subtitle: 'title',
    },
  },
}
