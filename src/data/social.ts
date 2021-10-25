import { fb_field, github_field, instagram_field, linkedin_field, twitter_field, youtube_field } from '../social'
import type { CmsCollectionFile } from 'netlify-cms-core'

const config:CmsCollectionFile = {
  file: '/data/social_links.yaml',
  label: 'Social Links',
  name: 'data_social_links',
  fields: [
    {
      label: 'Social Networks',
      name: 'links',
      widget: 'list',
      required: false,
      collapsed: true,
      label_singular: 'Social Network',
      types: [
        fb_field,
        instagram_field,
        twitter_field,
        youtube_field,
        github_field,
        linkedin_field
      ]
    }
  ]
}
export default config
