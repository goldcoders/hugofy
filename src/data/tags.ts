import type { CmsCollectionFile } from 'netlify-cms-core'

const config:CmsCollectionFile = {
  file: '/data/tags.yaml',
  label: 'Tag List',
  name: 'tag_list',
  fields: [
    {
      label: 'Tag List',
      name: 'tags',
      widget: 'list',
      required: false,
      collapsed: true,
      label_singular: 'Tag',
      fields: [
        {
          label: 'Tag',
          name: 'name',
          widget: 'string',
          pattern: [
            '^[a-z0-9]+(?:-[a-z0-9]+)*$',
            'Letters, Numbers and Dash(-) ONLY'
          ]
        }
      ]
    }
  ]
}
export default config
