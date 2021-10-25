
import type { CmsCollectionFile } from 'netlify-cms-core'

const config:CmsCollectionFile = {
  file: '/data/fonts.yaml',
  label: 'Font List',
  name: 'font_list',
  fields: [
    {
      label: 'Font List',
      name: 'fonts',
      widget: 'list',
      fields: [
        {
          label: 'Name',
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
