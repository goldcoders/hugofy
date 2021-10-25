import type { CmsFieldBase, CmsFieldObject } from 'netlify-cms-core'

type Field= CmsFieldBase & CmsFieldObject;
const field:Field = {
  label: 'CTA Simple Stacked',
  name: 'cta_simple_stacked',
  widget: 'object',
  summary: 'CTA/Simple Stacked',
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
      label: 'Template',
      name: 'template',
      widget: 'hidden',
      default: 'templates/cta/simple-stacked.html'
    },
    {
      label: 'CTA Button',
      name: 'cta',
      widget: 'list',
      fields: [
        {
          label: 'Text',
          name: 'text',
          widget: 'string'
        },
        {
          label: 'URL',
          name: 'url',
          widget: 'string'
        }
      ]
    }
  ]
}
export default field
