import type { CmsCollection } from 'netlify-cms-core'
import { blog_page } from './blog_page'
import { colors } from './colors'
import { configs } from './configs'
import { faq_page } from './faq_page'
import { fonts } from './fonts'
import { home_contents } from './home_content'
import { home_page } from './home_page'
import { legalities_page } from './legalities_page'
import { pages } from './pages'
import { product_page } from './product_page'
import { sections } from './sections'
import { taxonomies } from './taxonomies'

const collections:CmsCollection[] = [
  configs,
  sections,
  fonts,
  colors,
  taxonomies,
  home_contents,
  home_page,
  blog_page,
  product_page,
  faq_page,
  legalities_page,
  pages
]

export default collections
