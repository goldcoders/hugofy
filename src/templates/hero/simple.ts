import type { CmsFieldBase, CmsFieldObject } from 'netlify-cms-core'

type Field= CmsFieldBase & CmsFieldObject;
const field:Field = {
  label: 'Hero Simple Centered',
  name: 'hero_simple_centered',
  widget: 'object',
  summary: 'Hero/Simple Centered: {{fields.header}} {{fields.tag}}',
  fields: [
    {
      label: 'Header',
      name: 'header',
      widget: 'string',
      default: 'Best Product'
    },
    {
      label: 'Tag',
      name: 'tag',
      widget: 'string',
      default: 'of the year'
    },
    {
      label: 'Description',
      name: 'description',
      widget: 'text',
      default: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.'
    },
    {
      label: 'Template',
      name: 'template',
      widget: 'hidden',
      default: 'templates/hero/simple-centered.html'
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
