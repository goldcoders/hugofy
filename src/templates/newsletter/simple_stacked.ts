import type { CmsFieldBase, CmsFieldObject } from 'netlify-cms-core'

type Field= CmsFieldBase & CmsFieldObject;
const field:Field = {
  label: 'Newsletter Simple Stacked',
  name: 'newsletter_simple_stacked',
  widget: 'object',
  summary: 'Newsletter/Simple Stacked',
  fields: [
    {
      label: 'Template',
      name: 'template',
      widget: 'hidden',
      default: 'templates/newsletter/simple-stacked.html'
    },
    {
      label: 'Header',
      name: 'header',
      widget: 'string'
    },
    {
      label: 'Subheader',
      name: 'subheader',
      widget: 'string'
    },
    {
      label: 'Newsletter Form',
      name: 'form',
      widget: 'object',
      fields: [
        {
          label: 'Method',
          name: 'method',
          widget: 'select',
          options: [
            'GET',
            'POST',
            'PUT',
            'DELETE'
          ],
          default: 'POST'
        },
        {
          label: 'Action',
          name: 'action',
          widget: 'string',
          required: false,
          default: '#',
          pattern: [
            '((https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})|^#$)',
            'ONLY VALID URL ALLOWED!'
          ]
        },
        {
          label: 'Placeholder',
          name: 'placeholder',
          widget: 'string',
          default: 'Enter Your Email'
        },
        {
          label: 'Submit Button Text',
          name: 'submit',
          widget: 'string',
          default: 'Notify Me'
        },
        {
          label: 'Button Color',
          name: 'bg',
          widget: 'object',
          fields: [
            {
              label: 'Color',
              name: 'color',
              widget: 'relation',
              collection: 'colors',
              file: 'color_list',
              display_fields: ['colors.*.name'],
              search_fields: ['colors.*.name'],
              value_field: 'colors.*.value'
            },
            {
              label: 'Shade',
              name: 'shade',
              widget: 'relation',
              collection: 'colors',
              file: 'color_list',
              required: false,
              default: '',
              hint: 'themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.',
              display_fields: ['shades.*.name'],
              search_fields: ['shades.*.name'],
              value_field: 'shades.*.value'
            }
          ]
        }
      ]
    }
  ]
}
export default field
