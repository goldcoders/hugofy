import type { CmsCollectionFile } from 'netlify-cms-core'

const config:CmsCollectionFile = {
  file: '/content/blog/_index.md',
  label: 'Blog Post Listing Page',
  name: 'section_blog',
  fields: [
    {
      label: 'Index',
      name: 'index',
      widget: 'hidden',
      default: true
    },
    {
      label: 'Data',
      name: 'data',
      widget: 'hidden',
      default: {}
    },
    {
      label: 'Unpublish Page',
      name: 'draft',
      widget: 'boolean',
      default: false,
      hint: 'To Hide This Page, Set to True'
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
      label: 'Show Pagination',
      name: 'showpagination',
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
      label: 'Description',
      name: 'description',
      widget: 'text'
    },
    {
      label: 'Featured Image',
      name: 'featured_image',
      widget: 'image',
      required: false
    },
    {
      label: 'Cover Photo',
      name: 'cover_photo',
      widget: 'object',
      fields: [
        {
          label: 'Font',
          name: 'font',
          widget: 'relation',
          collection: 'fonts',
          file: 'font_list',
          display_fields: ['fonts.*.name'],
          search_fields: ['fonts.*.name'],
          value_field: 'fonts.*.name'
        },
        {
          label: 'Color',
          name: 'color',
          widget: 'relation',
          collection: 'colors',
          file: 'color_list',
          display_fields: ['colors.*.name'],
          search_fields: ['colors.*.name'],
          value_field: 'colors.*.value'
        },
        {
          label: 'Shade',
          name: 'shade',
          widget: 'relation',
          collection: 'colors',
          file: 'color_list',
          required: false,
          default: '',
          hint: 'themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.',
          display_fields: ['shades.*.name'],
          search_fields: ['shades.*.name'],
          value_field: 'shades.*.value'
        }
      ]
    },
  ]
}
export default config
