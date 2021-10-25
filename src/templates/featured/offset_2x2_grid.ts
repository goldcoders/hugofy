import type { CmsFieldBase, CmsFieldObject } from 'netlify-cms-core'

type Field= CmsFieldBase & CmsFieldObject;
const field:Field = {
  label: 'Featured Sections Offset 2x2 Grid',
  name: 'featured_2x2_grid',
  widget: 'object',
  summary: 'Featured/Offset 2x2 Grid: {{fields.header}}',
  fields: [
    {
      label: 'Header',
      name: 'header',
      widget: 'string'
    },
    {
      label: 'Template',
      name: 'template',
      widget: 'hidden',
      default: 'templates/features/offset-2x2-grid.html'
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
