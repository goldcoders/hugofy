import type { CmsFieldBase, CmsFieldObject } from 'netlify-cms-core'
import SizeOptions from '../../options/SizeOptions'

type Field= CmsFieldBase & CmsFieldObject;
const field:Field = {
  label: 'CTA Split with Image',
  name: 'cta_simple_split_with_image',
  widget: 'object',
  summary: 'CTA/Split With Image: {{fields.header.name}}',
  fields: [
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
    {
      label: 'Header',
      name: 'header',
      widget: 'object',
      fields: [
        {
          label: 'Title',
          name: 'name',
          widget: 'string'
        },
        {
          label: 'Text Color',
          name: 'color',
          widget: 'relation',
          collection: 'colors',
          file: 'color_list',
          display_fields: ['colors.*.name'],
          search_fields: ['colors.*.name'],
          value_field: 'colors.*.value'
        },
        {
          label: 'Text Shade',
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
      label: 'Tag',
      name: 'tag',
      widget: 'object',
      fields: [
        {
          label: 'Title',
          name: 'name',
          widget: 'string'
        },
        {
          label: 'Text Color',
          name: 'color',
          widget: 'relation',
          collection: 'colors',
          file: 'color_list',
          display_fields: ['colors.*.name'],
          search_fields: ['colors.*.name'],
          value_field: 'colors.*.value'
        },
        {
          label: 'Text Shade',
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
      label: 'Description',
      name: 'description',
      widget: 'text'
    },
    {
      label: 'Left Side Image',
      name: 'image',
      widget: 'object',
      fields: [
        {
          label: 'Image',
          name: 'url',
          widget: 'image'
        },
        {
          label: 'Image Alt',
          name: 'alt',
          widget: 'string'
        },
        {
          label: 'Height',
          name: 'height',
          widget: 'select',
          options: SizeOptions,
          default: '24'
        }
      ]
    },
    {
      label: 'Template',
      name: 'template',
      widget: 'hidden',
      default: 'templates/cta/split-with-image.html'
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
        },
        {
          label: 'Icon',
          name: 'icon',
          widget: 'object',
          fields: [
            {
              label: 'Image',
              name: 'image',
              widget: 'image',
              required: false,
              default: 'images/tuple-logo.svg'
            },
            {
              label: 'Image Alt',
              name: 'alt',
              default: 'Action Button',
              required: false,
              widget: 'string'
            },
            {
              label: 'Image Height',
              name: 'height',
              widget: 'select',
              options: SizeOptions,
              required: false,
              default: '12'
            }
          ]
        }
      ]
    }
  ]
}
export default field
