import type { CmsFieldBase, CmsFieldObject } from 'netlify-cms-core'

type Field= CmsFieldBase & CmsFieldObject;
const field:Field = {
  label: 'Pricing Single',
  name: 'pricing_single',
  widget: 'object',
  summary: 'Pricing/Single: {{fields.title}}',
  fields: [
    {
      label: 'Template',
      name: 'template',
      widget: 'hidden',
      default: 'templates/pricing/single.html'
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      default: 'Simple no-tricks pricing'
    },
    {
      label: 'Subtitle',
      name: 'subtitle',
      widget: 'string',
      default: "If you're not satisfied, contact us within the first 14 days and we'll send you a full refund."
    },
    {
      label: 'Header',
      name: 'header',
      widget: 'string',
      default: 'Lifetime Membership'
    },
    {
      label: 'Description',
      name: 'description',
      widget: 'text',
      default: 'Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda.'
    },
    {
      label: 'Upper Background Color',
      name: 'upperbg',
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
      label: 'Lower Background Color',
      name: 'lowerbg',
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
    },
    {
      label: 'Inclusion Text',
      name: 'inclusion',
      widget: 'string',
      default: "WHAT'S INCLUDED"
    },
    {
      label: 'Inclusion List',
      name: 'list',
      widget: 'list',
      field: {
        label: 'Included',
        name: 'text',
        widget: 'string'
      },
      default: [
        'Private forum access',
        'Member resources',
        'Entry to annual conference',
        'Official member t-shirt'
      ]
    },
    {
      label: 'Pricing',
      name: 'price',
      widget: 'object',
      fields: [
        {
          label: 'Tag',
          name: 'tag',
          widget: 'string',
          required: false,
          default: 'Pay Once Use it Forever'
        },
        {
          label: 'Amount',
          name: 'amount',
          widget: 'number',
          default: '349'
        },
        {
          label: 'Currency Symbol',
          name: 'currency',
          widget: 'object',
          fields: [
            {
              label: 'Symbol',
              name: 'symbol',
              widget: 'string',
              default: '‚Äö√á¬±'
            },
            {
              label: 'Name',
              name: 'name',
              widget: 'string',
              default: 'PHP'
            }
          ]
        }
      ]
    },
    {
      label: 'CTA Buttons',
      name: 'cta',
      widget: 'object',
      fields: [
        {
          label: 'URL',
          name: 'url',
          widget: 'string',
          default: '#'
        },
        {
          label: 'Text',
          name: 'text',
          widget: 'string',
          default: 'Get Access'
        },
        {
          label: 'Button Color',
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
        }
      ]
    },
    {
      label: 'Policy',
      name: 'policy',
      widget: 'object',
      fields: [
        {
          label: 'Message',
          name: 'message',
          widget: 'string',
          required: false,
          default: 'Learn about our membership policy'
        },
        {
          label: 'URL',
          name: 'url',
          widget: 'string',
          default: '#'
        }
      ]
    },
    {
      label: 'Downloadables',
      name: 'file',
      widget: 'object',
      fields: [
        {
          label: 'Text',
          name: 'text',
          widget: 'string',
          required: false,
          default: 'Get a Free Sample'
        },
        {
          label: 'URL',
          name: 'url',
          widget: 'file',
          required: false,
          default: '#'
        },
        {
          label: 'Download Size',
          name: 'size',
          widget: 'string',
          required: false,
          default: '20 MB'
        }
      ]
    }
  ]
}

export default field
