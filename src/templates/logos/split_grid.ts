import type { CmsFieldBase, CmsFieldObject } from 'netlify-cms-core'
import GapSizes from '../../options/GapSizes'
import SizeOptions from '../../options/SizeOptions'

type Field= CmsFieldBase & CmsFieldObject;
const field:Field = {
  label: 'Logos Split Grid',
  name: 'logos_split_grid',
  widget: 'object',
  summary: 'Logos/Split Grid: {{fields.position}}',
  fields: [
    {
      label: 'Template',
      name: 'template',
      widget: 'hidden',
      default: 'templates/logos/split-grid.html'
    },
    {
      label: 'Position',
      name: 'position',
      widget: 'select',
      options: [
        'right',
        'left'
      ],
      hint: 'Logos Position in Grid'
    },
    {
      label: 'Header',
      name: 'header',
      widget: 'string'
    },
    {
      label: 'Description',
      name: 'description',
      widget: 'text'
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
      label: 'Logo Background Color',
      name: 'logobg',
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
          default: 'blue'
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
      label: 'CTA Buttons',
      name: 'buttons',
      widget: 'list',
      fields: [
        {
          label: 'URL',
          name: 'url',
          widget: 'string'
        },
        {
          label: 'Text',
          name: 'cta',
          widget: 'string',
          default: 'Click Here'
        },
        {
          label: 'Background Color',
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
              default: 'primary-darker'
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
        {
          label: 'Text Color',
          name: 'text',
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
              default: 'white'
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
          default: '0.5'
        },
        {
          label: 'Column on Desktop',
          name: 'colLG',
          widget: 'number',
          default: 6,
          required: false
        },
        {
          label: 'Column on Tablets',
          name: 'colMD',
          widget: 'number',
          default: 6,
          required: false
        },
        {
          label: 'Column on Mobile',
          name: 'col',
          widget: 'number',
          default: 2,
          required: false
        },
        {
          label: 'Image Height',
          name: 'height',
          widget: 'select',
          options: SizeOptions,
          default: '24'
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
