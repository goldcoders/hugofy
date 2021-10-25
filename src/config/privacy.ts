import type { CmsCollectionFile } from 'netlify-cms-core'

const config:CmsCollectionFile = {
  file: '/config/_default/privacy.toml',
  label: 'Privacy',
  name: 'privacy_toml',
  fields: [
    {
      label: 'Disqus',
      name: 'disqus',
      widget: 'object',
      fields: [
        {
          label: 'Disabled',
          name: 'disable',
          widget: 'boolean',
          default: false,
          required: false
        }
      ]
    },
    {
      label: 'Twitter',
      name: 'twitter',
      widget: 'object',
      fields: [
        {
          label: 'Disabled',
          name: 'disable',
          widget: 'boolean',
          default: false,
          required: false
        }
      ]
    },
    {
      label: 'Google Analytics',
      name: 'googleAnalytics',
      widget: 'object',
      fields: [
        {
          label: 'Disabled',
          name: 'disable',
          widget: 'boolean',
          default: false,
          required: false
        }
      ]
    },
    {
      label: 'Instagram',
      name: 'instagram',
      widget: 'object',
      fields: [
        {
          label: 'Disabled',
          name: 'disable',
          widget: 'boolean',
          default: false,
          required: false
        }
      ]
    },
    {
      label: 'Vimeo',
      name: 'vimeo',
      widget: 'object',
      fields: [
        {
          label: 'Disabled',
          name: 'disable',
          widget: 'boolean',
          default: false,
          required: false
        }
      ]
    },
    {
      label: 'Youtube',
      name: 'youtube',
      widget: 'object',
      fields: [
        {
          label: 'Disabled',
          name: 'disable',
          widget: 'boolean',
          default: false,
          required: false
        }
      ]
    }
  ]
}
export default config
