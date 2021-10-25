import type { CmsFieldBase, CmsFieldObject } from 'netlify-cms-core'
import GapSizes from '../../options/GapSizes'

type Field= CmsFieldBase & CmsFieldObject;
const field:Field = {
  label: 'Logos Simple',
  name: 'logos_simple',
  widget: 'object',
  summary: 'Logos/Simple',
  fields: [
    {
      label: 'Template',
      name: 'template',
      widget: 'hidden',
      default: 'templates/logos/simple.html'
    },
    {
      label: 'Backgroud Color',
      name: 'bg',
      widget: 'object',
      fields: [
        {
          label: 'Color',
          name: 'color',
          widget: 'relation',
          collection: 'colors',
          file: 'color_list',
          display_fields: ['colors.*.name'],
          search_fields: ['colors.*.name'],
          value_field: 'colors.*.value',
          default: 'gray'
        },
        {
          label: 'Shade',
          name: 'shade',
          widget: 'relation',
          collection: 'colors',
          file: 'color_list',
          required: false,
          default: '50',
          hint: 'themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.',
          display_fields: ['shades.*.name'],
          search_fields: ['shades.*.name'],
          value_field: 'shades.*.value'
        }
      ]
    },
    {
      label: 'Logos',
      name: 'logos',
      widget: 'object',
      required: false,
      fields: [
        {
          label: 'Column Gaps',
          name: 'gaps',
          widget: 'select',
          options: GapSizes,
          default: '8'
        },
        {
          label: 'Column on Desktop',
          name: 'colLG',
          widget: 'number',
          default: 6
        },
        {
          label: 'Column on Tablets',
          name: 'colMD',
          widget: 'number',
          default: 6
        },
        {
          label: 'Column on Mobile',
          name: 'col',
          widget: 'number',
          default: 2
        },
        {
          label: 'Image Height',
          name: 'height',
          widget: 'number',
          default: 12
        },
        {
          label: 'Images',
          name: 'images',
          widget: 'list',
          hint: 'Upload 6 Images If You Dont Want to Configure Span and Column',
          fields: [
            {
              label: 'Image',
              name: 'url',
              widget: 'image'
            },
            {
              label: 'Image ALT',
              name: 'alt',
              widget: 'string',
              default: 'logo item'
            },
            {
              label: 'Desktop Span',
              name: 'spanLG',
              widget: 'number',
              default: 2
            },
            {
              label: 'Tablet Span',
              name: 'spanMD',
              widget: 'number',
              default: 2
            },
            {
              label: 'Mobile Span',
              name: 'span',
              widget: 'number',
              default: 1
            }
          ]
        }
      ]
    }
  ]
}
export default field
