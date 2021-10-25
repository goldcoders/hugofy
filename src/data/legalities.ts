import type { CmsCollectionFile } from 'netlify-cms-core'

const config:CmsCollectionFile = {
  file: '/data/legalities.yaml',
  label: 'Configure Legalities Content',
  name: 'legalities',
  fields: [
    {
      label: 'Business Name',
      name: 'business_name',
      widget: 'string'
    },
    {
      label: "Owner's Name",
      name: 'owner',
      widget: 'string'
    },
    {
      label: 'Business Line',
      name: 'business_line',
      widget: 'string'
    },
    {
      label: 'Busines Address',
      name: 'business_address',
      widget: 'string'
    },
    {
      label: 'Certificates',
      name: 'certificates',
      required: false,
      collapsed: true,
      label_singular: 'Certificate',
      widget: 'list',
      summary: '{{fields.name}}',
      types: [
        {
          label: 'External Link',
          name: 'link',
          widget: 'object',
          fields: [
            {
              label: 'Certificate Name',
              name: 'name',
              widget: 'string'
            },
            {
              label: 'External URL',
              name: 'url',
              widget: 'string'
            }
          ]
        },
        {
          label: 'Image Upload',
          name: 'image',
          widget: 'object',
          fields: [
            {
              label: 'Certificate Name',
              name: 'name',
              widget: 'string'
            },
            {
              label: 'Image',
              name: 'url',
              widget: 'image'
            }
          ]
        },
        {
          label: 'File Upload',
          name: 'file',
          widget: 'object',
          fields: [
            {
              label: 'Certificate Name',
              name: 'name',
              widget: 'string'
            },
            {
              label: 'File',
              name: 'url',
              widget: 'file'
            }
          ]
        }
      ]
    }
  ]

}
export default config
