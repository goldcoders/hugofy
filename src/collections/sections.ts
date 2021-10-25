import { BlogContent, ContactContent, FaqContent, LegalitiesContent, ProductContent } from '../content'
import type { CmsCollection } from 'netlify-cms-core'

const sections:CmsCollection = {
  name: 'sections',
  label: 'Site Sections',
  editor: {
    preview: false
  },
  files: [
    BlogContent,
    ProductContent,
    FaqContent,
    ContactContent,
    LegalitiesContent
  ]
}
export { sections }
