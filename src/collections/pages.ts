import type { CmsCollection } from 'netlify-cms-core'

const pages:CmsCollection = {
  name: 'pages',
  identifier_field: 'title',
  label: 'Pages',
  label_singular: 'Page',
  folder: '/content/pages',
  filter: {
    field: 'index',
    value: false
  },
  create: true,
  preview_path: '{{fields.slug}}',
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
      label: 'Draft',
      name: 'draft',
      widget: 'boolean',
      default: false
    },
    {
      label: 'Publish Date',
      name: 'date',
      widget: 'datetime'
    },
    {
      label: 'Show Cart',
      name: 'showcart',
      widget: 'boolean',
      default: true
    },
    {
      label: 'Show Search',
      name: 'showsearch',
      widget: 'boolean',
      default: true
    },
    {
      label: 'Custom Data',
      name: 'custom',
      widget: 'list',
      types: [
        {
          label: 'data',
          name: 'data',
          widget: 'object',
          fields: [
            { label: 'Key', name: 'key', widget: 'string', default: '', required: false },
            { label: 'Value', name: 'value', widget: 'string', default: '', required: false }
          ]
        }
      ]
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string'
    },
    {
      label: 'Slug',
      name: 'slug',
      widget: 'string',
      required: false,
      hint: 'Default Value Will Be The Title When Leave Blank',
      pattern: [
        '^[a-z0-9](-?[a-z0-9])*$',
        'Small Letters, Numbers and Dash(-) ONLY'
      ]
    },
    {
      label: 'Description',
      name: 'description',
      widget: 'text'
    },
    {
      label: 'Featured Image',
      name: 'featured_image',
      widget: 'image',
      hint: 'Note: When Page Title is Changed Remove Image and Choose Image Again.'
    },
    {
      label: 'Keywords',
      name: 'keywords',
      widget: 'list',
      required: false,
      summary: '{{fields.keyword}}',
      field: {
        label: 'Keyword',
        name: 'keyword',
        widget: 'string'
      }
    },
    {
      label: 'Images',
      name: 'images',
      widget: 'list',
      required: false,
      collapsed: true,
      label_singular: 'Image',
      field: {
        label: 'Image',
        name: 'image',
        widget: 'image'
      }
    },
    {
      label: 'Content',
      name: 'body',
      widget: 'markdown'
    }
  ]
}
export { pages }
