import type { CmsFieldBase, CmsFieldObject } from 'netlify-cms-core'

type Field= CmsFieldBase & CmsFieldObject;
const field:Field = {
  label: 'Hero Angled Image on Right',
  name: 'hero_angled_image_on_right',
  widget: 'object',
  summary: 'Hero/Angled Image on Right: {{fields.header}} {{fields.tag}}',
  fields: [
    {
      label: 'Header',
      name: 'header',
      widget: 'string',
      default: 'The Best Product'
    },
    {
      label: 'Tag',
      name: 'tag',
      widget: 'string',
      default: 'of the year 2020'
    },
    {
      label: 'Description',
      name: 'description',
      widget: 'text',
      default: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.'
    },
    {
      label: 'Image',
      name: 'image',
      widget: 'image',
      default: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
    },
    {
      label: 'Template',
      name: 'template',
      widget: 'hidden',
      default: 'templates/hero/angled-image-on-right.html'
    },
    {
      label: 'Left Button',
      name: 'left',
      widget: 'object',
      fields: [
        {
          label: 'Show',
          name: 'show',
          widget: 'boolean',
          default: true
        },
        {
          label: 'Text',
          name: 'text',
          widget: 'string',
          required: false,
          default: 'Buy Now'
        },
        {
          label: 'URL',
          name: 'url',
          widget: 'string',
          default: '#'
        }
      ]
    },
    {
      label: 'Right Button',
      name: 'right',
      widget: 'object',
      fields: [
        {
          label: 'Show',
          name: 'show',
          widget: 'boolean',
          default: true
        },
        {
          label: 'Text',
          name: 'text',
          widget: 'string',
          required: false,
          default: 'Learn More'
        },
        {
          label: 'URL',
          name: 'url',
          widget: 'string',
          default: '#'
        }
      ]
    }
  ]
}
export default field
