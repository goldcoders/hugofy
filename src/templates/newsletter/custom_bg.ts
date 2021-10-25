import type { CmsFieldBase, CmsFieldObject } from 'netlify-cms-core'

type Field= CmsFieldBase & CmsFieldObject;
const field:Field = {
  label: 'Newsletter Custom Background',
  name: 'newsletter_custom_bg',
  widget: 'object',
  summary: 'Newsletter/Custom Background Color',
  fields: [
    {
      label: 'Background Color',
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
    },
    {
      label: 'Template',
      name: 'template',
      widget: 'hidden',
      default: 'templates/newsletter/custom-bg.html'
    },
    {
      label: 'Header',
      name: 'header',
      widget: 'string'
    },
    {
      label: 'Description',
      name: 'description',
      widget: 'text'
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
    },
    {
      label: 'Privacy Section',
      name: 'privacy',
      widget: 'object',
      fields: [
        {
          label: 'Explain Policy',
          name: 'explain',
          widget: 'string',
          default: 'We care about the protection of your data. Read our'
        },
        {
          label: 'Policy URL',
          name: 'url',
          widget: 'string',
          default: '/privacy'
        },
        {
          label: 'Policy Name',
          name: 'policy',
          widget: 'string',
          default: 'Privacy Policy'
        }
      ]
    }
  ]
}
export default field
