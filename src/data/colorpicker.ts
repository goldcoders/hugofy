import type { CmsCollectionFile } from 'netlify-cms-core'

const config:CmsCollectionFile = {
  file: '/data/colorpicker.yaml',
  label: 'Color & Shade',
  name: 'color_list',
  fields: [
    {
      label: 'Colors',
      name: 'colors',
      widget: 'list',
      fields: [
        {
          label: 'Name',
          name: 'name',
          widget: 'string',
          pattern: [
            '^[a-z0-9]+(?:-[a-z0-9]+)*$',
            'Letters, Numbers and Dash(-) ONLY'
          ]
        },
        {
          label: 'Value',
          name: 'value',
          widget: 'string',
          pattern: [
            '^[a-z0-9]+(?:-[a-z0-9]+)*$',
            'Letters, Numbers and Dash(-) ONLY'
          ]
        }
      ]
    },
    {
      label: 'Shades',
      name: 'shades',
      widget: 'list',
      default: [
        '50',
        '100',
        '200',
        '300',
        '400',
        '500',
        '600',
        '700',
        '800',
        '900'
      ]
    }
  ]
}
export default config
