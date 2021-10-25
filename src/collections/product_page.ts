import type { CmsCollection } from 'netlify-cms-core'

const product_page:CmsCollection = {
  name: 'products',
  identifier_field: 'title',
  label: 'Products',
  label_singular: 'Product',
  folder: '/content/products',
  filter: {
    field: 'index',
    value: false
  },
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
      label: 'Publish Date',
      name: 'date',
      widget: 'datetime'
    },
    {
      label: 'Draft',
      name: 'draft',
      widget: 'boolean',
      default: false
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
      label: 'Show Review',
      name: 'showreview',
      widget: 'boolean',
      default: false
    },
    {
      label: 'Product ID',
      name: 'product_id',
      widget: 'string',
      hint: 'Must Be Unique amount Products',
      pattern: [
        '^[A-Za-z0-9]+$',
        'No Spaces and Special Characters'
      ]
    },
    {
      label: 'Price Before',
      name: 'price_before',
      widget: 'string',
      required: false,
      hint: 'This is Optional',
      pattern: [
        '[0-9]*\\.[0-9][0-9]',
        'Numbers with at least 2 Decimal places'
      ]
    },
    {
      label: 'Base Price',
      name: 'price',
      widget: 'string',
      hint: 'Currency in PHP',
      pattern: [
        '[0-9]*\\.[0-9][0-9]',
        'Numbers with at least 2 Decimal places'
      ]
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
      label: 'Product Options',
      name: 'options',
      widget: 'list',
      label_singular: 'Option',
      types: [
        {
          label: 'Base Model Images',
          name: 'options_base',
          widget: 'object',
          summary: 'Size: {{fields.name}}',
          fields: [
            {
              label: 'Option Name',
              name: 'name',
              widget: 'hidden',
              default: 'base_model'
            },
            {
              label: 'Image',
              name: 'image',
              widget: 'image',
              required: false,
              hint: 'Note: Image Upload Here Will Be Shown In Carousel'
            }
          ]
        },
        {
          label: 'Color Options',
          name: 'options_color',
          widget: 'object',
          summary: 'Color: {{fields.name}}',
          fields: [
            {
              label: 'Option Name',
              name: 'name',
              widget: 'string',
              hint: 'Note: Will Be Used Instead of Product Title e.g.: White Lebron 17 Shoes'
            },
            {
              label: 'Default Option',
              name: 'default',
              widget: 'boolean',
              required: false,
              default: false,
              hint: 'This Will Be The Default Options For This Type'
            },
            {
              label: 'Pick A Color',
              name: 'color',
              widget: 'color'
            },
            {
              label: 'Change Based Price?',
              name: 'change',
              widget: 'select',
              default: 'no',
              required: false,
              options: [
                'add',
                'subtract',
                'no'
              ]
            },
            {
              label: 'Amount',
              name: 'amount',
              widget: 'string',
              required: false,
              hint: 'The Amount To Add or Subtract From Base Price',
              pattern: [
                '[0-9]*\\.[0-9][0-9]',
                'Numbers with at least 2 Decimal places'
              ]
            },
            {
              label: 'Image',
              name: 'image',
              widget: 'image',
              required: false,
              hint: 'Note: Image Upload Here Will Be Shown In Carousel'
            }
          ]
        },
        {
          label: 'Size Options',
          name: 'options_size',
          widget: 'object',
          summary: 'Size: {{fields.name}}',
          fields: [
            {
              label: 'Size Name',
              name: 'name',
              widget: 'string',
              hint: 'e.g.: Small , or 7 inch'
            },
            {
              label: 'Default Option',
              name: 'default',
              widget: 'boolean',
              required: false,
              default: false,
              hint: 'This Will Be The Default Options For This Type'
            },
            {
              label: 'Change Based Price',
              name: 'change',
              widget: 'select',
              default: 'no',
              required: false,
              options: [
                'add',
                'subtract',
                'no'
              ]
            },
            {
              label: 'Amount',
              name: 'amount',
              widget: 'string',
              required: false,
              hint: 'The Amount To Add or Subtract From Base Price',
              pattern: [
                '[0-9]*\\.[0-9][0-9]',
                'Numbers with at least 2 Decimal places'
              ]
            }
          ]
        }
      ]
    },
    {
      label: 'Content',
      name: 'body',
      widget: 'markdown'
    }
  ]
}
export { product_page }
