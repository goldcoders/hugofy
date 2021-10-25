
import { AppConfig, MenuConfig, ParamConfig, PrivacyConfig } from '../config'
import { CartData, FbChatPlugin, SocialData } from '../data'
import type { CmsCollection } from 'netlify-cms-core'

const configs:CmsCollection = {
  name: 'configs',
  label: 'Configurations',
  editor: {
    preview: false
  },
  files: [
    AppConfig,
    PrivacyConfig,
    MenuConfig,
    ParamConfig,
    FbChatPlugin,
    CartData,
    SocialData
  ]
}
export { configs }
