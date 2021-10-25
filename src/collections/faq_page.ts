import type { CmsCollection } from 'netlify-cms-core'

const faq_page:CmsCollection = {
  name: 'faqs',
  identifier_field: 'title',
  label: 'FAQS',
  label_singular: 'FAQ',
  folder: '/content/faq',
  filter: {
    field: 'index',
    value: false
  },
  sortable_fields: ['order'],
  summary: '{{fields.order}} {{fields.title}}',
  preview_path: '/faq',
  create: true,
  editor: {
    preview: false
  },
  fields: [
    {
      label: 'Index',
      name: 'index',
      widget: 'hidden',
      default: false
    },
    {
      label: 'Order',
      name: 'order',
      widget: 'number',
      default: 0,
      hint: 'Order Of FAQ is ascending highest priority is 0'
    },
    {
      label: 'Question',
      name: 'title',
      widget: 'string'
    },
    {
      label: 'Answer',
      name: 'body',
      widget: 'markdown'
    }
  ]
}
export { faq_page }
