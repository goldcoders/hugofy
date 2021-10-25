import type { CmsCollectionFile } from 'netlify-cms-core'

const menu:CmsCollectionFile = {
  file: '/config/_default/menu.toml',
  label: 'Navigation Main & Footer Link',
  name: 'menu_toml',
  fields: [
    {
      label: 'Main Menu Links',
      name: 'main',
      widget: 'list',
      required: false,
      collapsed: true,
      label_singular: 'Menu Link',
      fields: [
        {
          label: 'Name',
          name: 'name',
          widget: 'string'
        },
        {
          label: 'URL',
          name: 'URL',
          widget: 'string',
          hint: 'example: /blog/',
          pattern: [
            '((^/?[a-z0-9]+(?:-[a-z0-9]+)*/$)|(^/?$))',
            'Must start and ends with / (forward slash), Only Letters, Numbers and Dash Allowed'
          ]
        },
        {
          label: 'Priority',
          name: 'weight',
          widget: 'number',
          default: 0,
          value_type: 'int',
          min: 0,
          max: 999,
          step: 1,
          hint: 'higher priority in order if number is smaller'
        }
      ]
    },
    {
      label: 'Footer Menu Links',
      name: 'footer',
      required: false,
      collapsed: true,
      label_singular: 'Footer Link',
      widget: 'list',
      fields: [
        {
          label: 'Name',
          name: 'name',
          widget: 'string'
        },
        {
          label: 'URL',
          name: 'URL',
          widget: 'string',
          hint: 'example: /blog/',
          pattern: [
            '((^/?[a-z0-9]+(?:-[a-z0-9]+)*/$)|(^/?$))',
            'Must start and ends with / (forward slash)'
          ]
        },
        {
          label: 'Priority',
          name: 'weight',
          widget: 'number',
          default: 0,
          value_type: 'int',
          min: 0,
          max: 999,
          step: 1,
          hint: 'higher priority in order if number is smaller'
        }
      ]
    }
  ]
}
export default menu
