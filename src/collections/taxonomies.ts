import { CategoryData, TagsData } from '../data'
import type { CmsCollection } from 'netlify-cms-core'

const taxonomies:CmsCollection = {
  name: 'taxonomies',
  label: 'Taxonomies',
  editor: {
    preview: false
  },
  files: [
    CategoryData,
    TagsData
  ]
}
export { taxonomies }
