import type { CmsCollectionFile } from 'netlify-cms-core'

const config:CmsCollectionFile = {
  file: '/config/_default/config.toml',
  label: 'Site Config',
  name: 'config_toml',
  fields: [
    {
      label: 'Site Title',
      name: 'title',
      widget: 'string',
      default: 'Thriftshop Site',
      hint: 'Used as *Default* Page Title'
    },
    {
      label: 'Domain URL',
      name: 'baseURL',
      widget: 'string',
      hint: 'type: https://yourdomain.com',
      pattern: [
        '(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})',
        'ONLY VALID URL ALLOWED!'
      ]
    },
    {
      label: 'Google Analytics',
      name: 'googleAnalytics',
      widget: 'string',
      required: false,
      hint: 'type: UA-{YOUR_ANALYTICS_ID}'
    },
    {
      label: 'Disqus',
      name: 'disqusShortname',
      widget: 'string',
      required: false,
      hint: 'type Disqus Shortname'
    },
    {
      label: 'Section Pages Pagination',
      name: 'paginate',
      widget: 'string'
    },
    {
      label: 'Language',
      name: 'languageCode',
      widget: 'hidden',
      default: 'en-us'
    },
    {
      label: 'Page Summary Length',
      name: 'summaryLength',
      widget: 'number',
      default: 10,
      value_type: 'int',
      min: 10,
      max: 120,
      step: 10
    },
    {
      label: 'Author',
      name: 'author',
      widget: 'object',
      fields: [
        {
          label: 'Name',
          name: 'name',
          widget: 'string',
          default: 'Goldcoders'
        },
        {
          label: 'Avatar',
          name: 'avatar',
          widget: 'image',
          default: 'https://bit.ly/2CYYueR'
        }
      ]
    },
  ]
}
export default config
