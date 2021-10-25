import type { CmsFieldBase, CmsFieldObject } from 'netlify-cms-core'

type Field= CmsFieldBase & CmsFieldObject;
const field:Field = {
  label: 'Featured Sections Centered 2x2 Grid',
  name: 'featured_centered_2x2',
  widget: 'object',
  summary: 'Featured/Centered 2x2: {{fields.header}} {{fields.tag}}',
  fields: [
    {
      label: 'Header',
      name: 'header',
      widget: 'string'
    },
    {
      label: 'Tag',
      name: 'tag',
      widget: 'string'
    },
    {
      label: 'Description',
      name: 'description',
      widget: 'markdown'
    },
    {
      label: 'Template',
      name: 'template',
      widget: 'hidden',
      default: 'templates/features/centered-2x2.html'
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
          widget: 'text'
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
