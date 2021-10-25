import type { CmsFieldBase, CmsFieldObject } from 'netlify-cms-core'

type Field= CmsFieldBase & CmsFieldObject;
const field:Field = {
  label: 'Featured Sections Split Image',
  name: 'featured_split_image',
  widget: 'object',
  summary: 'Featured/Split Image: {{fields.header}}',
  fields: [
    {
      label: 'Template',
      name: 'template',
      widget: 'hidden',
      default: 'templates/features/split-image.html'
    },
    {
      label: 'Heading',
      name: 'heading',
      widget: 'string'
    },
    {
      label: 'Subheading',
      name: 'subheading',
      widget: 'string'
    },
    {
      label: 'Split Image',
      name: 'image',
      widget: 'object',
      fields: [
        {
          label: 'Position',
          name: 'position',
          widget: 'select',
          options: [
            'left',
            'right'
          ],
          default: 'left',
          required: false
        },
        {
          label: 'Split Image',
          name: 'url',
          widget: 'image'
        }
      ]
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string'
    },
    {
      label: 'Intro',
      name: 'intro',
      widget: 'text'
    },
    {
      label: 'Features',
      name: 'features',
      widget: 'list',
      fields: [
        {
          label: 'Feature',
          name: 'title',
          widget: 'string'
        },
        {
          label: 'Description',
          name: 'description',
          widget: 'text'
        },
        {
          label: 'Image',
          name: 'image',
          widget: 'image'
        }
      ]
    }
  ]

}
export default field
