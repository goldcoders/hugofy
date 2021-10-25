import type { CmsFieldBase, CmsFieldObject } from 'netlify-cms-core'

type Field= CmsFieldBase & CmsFieldObject;
const field:Field = {
  label: 'Featured Sections Three Column',
  name: 'featured_3_col',
  widget: 'object',
  summary: 'Featured/Simple 3 Col',
  fields: [
    {
      label: 'Template',
      name: 'template',
      widget: 'hidden',
      default: 'templates/features/simple-3-column.html'
    },
    {
      label: 'Features',
      name: 'features',
      widget: 'list',
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string'
        },
        {
          label: 'Description',
          name: 'description',
          widget: 'markdown'
        },
        {
          label: 'Image',
          name: 'image',
          widget: 'image'
        }
      ]
    }
  ]

}
export default field
