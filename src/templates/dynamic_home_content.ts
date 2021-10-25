import type { CmsFieldBase, CmsFieldObject } from 'netlify-cms-core'

type Field= CmsFieldBase & CmsFieldObject;
const field:Field = {
  label: 'Dynamic Home Content',
  name: 'content_centered',
  widget: 'object',
  summary: 'Dynamic Content / Centered: {{fields.title}}',
  fields: [
    {
      label: 'Template',
      name: 'template',
      widget: 'hidden',
      default: 'templates/content/centered.html'
    },
    {
      label: 'Intro',
      name: 'intro',
      widget: 'string'
    },
    {
      label: 'Summary',
      name: 'summary',
      widget: 'string'
    },
    {
      label: 'Home Content Section',
      name: 'filename',
      widget: 'relation',
      hint: 'Content Used Here Is From Home Contents. Be Sure to Create Content There So You Can Use it Here!',
      collection: 'home_contents',
      display_fields: ['title'],
      search_fields: ['title'],
      value_field: 'home/contents/{{slug}}'
    }
  ]

}
export default field
