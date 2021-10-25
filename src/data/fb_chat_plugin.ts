import type { CmsCollectionFile } from 'netlify-cms-core'

const config:CmsCollectionFile = {
  file: '/data/fb_chat_plugin.yaml',
  label: 'Fb Messenger Chat Plugin',
  name: 'data_fb_chat_plugin',
  fields: [
    {
      label: 'Enable FB Chat Plugin',
      name: 'enable',
      widget: 'boolean',
      hint: 'hide or show fb chat plugin',
      default: false
    },
    {
      label: 'Facebook Fan Page ID',
      name: 'page_id',
      widget: 'string',
      default: '',
      required: false
    }
  ]
}
export default config
