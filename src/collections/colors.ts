import type { CmsCollection } from 'netlify-cms-core'
import { ColorPickerData } from '../data'

const colors:CmsCollection = {
  name: 'colors',
  label: 'Site Colors',
  hide: true,
  files: [ColorPickerData]
}
export { colors }
