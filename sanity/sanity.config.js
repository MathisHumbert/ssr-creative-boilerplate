import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {media} from 'sanity-plugin-media'

import {structure} from './structure'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Boilerplate',

  projectId: 'mvx0t8y9',
  dataset: 'production',

  plugins: [
    structureTool({
      structure,
    }),
    media(),
  ],

  schema: {
    types: schemaTypes,
  },
})
