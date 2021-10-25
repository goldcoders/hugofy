import type { CmsCollection } from 'netlify-cms-core'
import { FontData } from '../data'

const fonts:CmsCollection = {
  name: 'fonts',
  label: 'Site Fonts',
  hide: true,
  files: [FontData]
}
export { fonts }
