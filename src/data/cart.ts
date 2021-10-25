import type { CmsCollectionFile } from 'netlify-cms-core'

const config:CmsCollectionFile = {
  file: '/data/cart.yaml',
  label: 'Cart Settings',
  name: 'data_cart',
  fields: [
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      required: true,
      default: 'Shopping Cart'
    },
    {
      label: 'Tax',
      name: 'tax_rate',
      widget: 'number',
      min: 0,
      max: 1,
      required: true,
      value_type: 'float',
      step: 0.1,
      default: 0.1
    },
    {
      label: 'Shipping Fee',
      name: 'shipping_fee',
      widget: 'number',
      required: true,
      min: 0
    },
    {
      label: 'Empty Cart Image',
      name: 'empty_cart_img',
      widget: 'image',
      required: false
    },
    {
      label: 'Empty Cart Error Message',
      name: 'empty_cart_error_msg',
      widget: 'string',
      required: true,
      default: 'Whoops'
    },
    {
      label: 'Empty Cart Label',
      name: 'empty_cart_label',
      widget: 'string',
      required: true,
      default: 'Cart is Empty'
    }

  ]
}
export default config
