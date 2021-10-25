import type { CmsFieldBase, CmsFieldObject } from 'netlify-cms-core'

type Field= CmsFieldBase & CmsFieldObject;
const field:Field = {
  label: 'Pricing Three Tier',
  name: 'pricing_three_tier',
  widget: 'object',
  summary: 'Pricing/Three Tier: {{fields.title}}',
  fields: [
    {
      label: 'Template',
      name: 'template',
      widget: 'hidden',
      default: 'templates/pricing/three-tier.html'
    },
    {
      label: 'Brand Title',
      name: 'brand_title',
      widget: 'string',
      default: 'PRICING'
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      default: 'The right price for you, whoever you are'
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
          default: '900',
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
      label: 'Featured Color',
      name: 'featured',
      widget: 'object',
      hint: 'Featured Tier is Tier #2,It is At the Centered Highlighted',
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
          default: 'brand'
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
      label: 'Tiers',
      name: 'tiers',
      widget: 'list',
      hint: 'NOTE: Only the First 3 Tier Will Be Rendered, Tier #2 is The Featured Tier',
      fields: [
        {
          label: 'Name',
          name: 'name',
          widget: 'string'
        },
        {
          label: 'Currency',
          name: 'currency',
          widget: 'string',
          default: '‚Äö√á¬±'
        },
        {
          label: 'Amount',
          name: 'amount',
          widget: 'number',
          default: '349'
        },
        {
          label: 'Per',
          name: 'per_unit',
          widget: 'string',
          default: 'month'
        },
        {
          label: 'CTA Buttons',
          name: 'button',
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
              name: 'cta',
              widget: 'string',
              default: 'Start Your Trial'
            }
          ]
        },
        {
          label: 'Features',
          name: 'features',
          widget: 'list',
          field: {
            label: 'Feature',
            name: 'feature',
            widget: 'string'
          }
        }
      ]
    }
  ]
}

export default field
