import type { CmsCollectionFile } from 'netlify-cms-core'
import HTTPMETHODS from '../options/HTTPMETHODS'
import InputTags from '../options/InputTags'
/* eslint max-lines: 0 */
const config:CmsCollectionFile = {
  file: '/content/contact/_index.md',
  label: 'Contact Page',
  name: 'section_contact',
  fields: [
    {
      label: 'Index',
      name: 'index',
      widget: 'hidden',
      default: true
    },
    {
      label: 'Unpublish Page',
      name: 'draft',
      widget: 'boolean',
      default: false,
      hint: 'To Hide This Page, Set to True'
    },
    {
      label: 'Show Cart',
      name: 'showcart',
      widget: 'boolean',
      default: true
    },
    {
      label: 'Show Search',
      name: 'showsearch',
      widget: 'boolean',
      default: true
    },
    {
      label: 'Custom Data',
      name: 'custom',
      widget: 'list',
      types: [
        {
          label: 'data',
          name: 'data',
          widget: 'object',
          fields: [
            { label: 'Key', name: 'key', widget: 'string', default: '', required: false },
            { label: 'Value', name: 'value', widget: 'string', default: '', required: false }
          ]
        }
      ]
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string'
    },
    {
      label: 'Description',
      name: 'description',
      widget: 'text'
    },
    {
      label: 'Featured Image',
      name: 'featured_image',
      widget: 'image',
      required: false
    },
    {
      label: 'Cover Photo',
      name: 'cover_photo',
      widget: 'object',
      fields: [
        {
          label: 'Font',
          name: 'font',
          widget: 'relation',
          collection: 'fonts',
          file: 'font_list',
          display_fields: ['fonts.*.name'],
          search_fields: ['fonts.*.name'],
          value_field: 'fonts.*.name'
        },
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
      label: 'Form',
      name: 'form',
      widget: 'object',
      fields: [
        {
          label: 'Action',
          name: 'action',
          widget: 'string',
          hint: 'Form URL from Any Services Such as Mailchimp, Google Forms, Aweber Etc.',
          required: false,
          default: '#',
          pattern: [
            '((https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})|^#$)',
            'ONLY VALID URL ALLOWED!'
          ]
        },
        {
          label: 'Method',
          name: 'method',
          widget: 'select',
          options: HTTPMETHODS
        },
        {
          label: 'Form Submit',
          name: 'button',
          widget: 'object',
          fields: [
            {
              label: 'Button Text',
              name: 'text',
              widget: 'string',
              default: 'Submit'
            }
          ]
        },
        {
          label: 'Google Recaptcha V2',
          name: 'recaptcha',
          widget: 'object',
          fields: [
            {
              label: 'Enable',
              name: 'enable',
              widget: 'boolean',
              default: false
            },
            {
              label: 'Site Key ID',
              name: 'siteKey',
              widget: 'string',
              required: false
            }
          ]
        },
        {
          label: 'Agreement Section',
          name: 'agreement',
          widget: 'object',
          fields: [
            {
              label: 'Show Agreement',
              name: 'enable',
              widget: 'boolean'
            },
            {
              label: 'Agreement Text',
              name: 'text',
              widget: 'string',
              default: 'I have read and Agreed to'
            },
            {
              label: 'Policy Links',
              name: 'links',
              required: false,
              collapsed: true,
              label_singular: 'Policy Link',
              widget: 'list',
              allow_add: true,
              fields: [
                {
                  label: 'Policy Name',
                  name: 'name'
                },
                {
                  label: 'Link',
                  name: 'link'
                }
              ]
            }
          ]
        },
        {
          label: 'Form Fields',
          name: 'fields',
          widget: 'list',
          required: false,
          collapsed: true,
          label_singular: 'Form Field',
          summary: '{{fields.value}}',
          types: [
            {
              label: 'Text',
              name: 'text',
              widget: 'object',
              fields: [
                {
                  label: 'Label',
                  name: 'label',
                  widget: 'string'
                },
                {
                  label: 'Placeholder',
                  name: 'placeholder',
                  widget: 'string',
                  required: false
                },
                {
                  label: 'Value',
                  name: 'value',
                  hint: 'field name that will be used on the form',
                  widget: 'string'
                },
                {
                  label: 'Name',
                  name: 'name',
                  hint: 'Same with Value , Except when Using Google Form, it Uses entry.[1234] format',
                  widget: 'string'
                },
                {
                  label: 'HTML TAG',
                  name: 'tag',
                  widget: 'select',
                  options: InputTags,
                  default: 'input'
                },
                {
                  label: 'Validation',
                  name: 'validation',
                  widget: 'object',
                  fields: [
                    {
                      label: 'Required',
                      name: 'required',
                      widget: 'boolean',
                      default: true
                    },
                    {
                      label: 'Regex Pattern For Validation',
                      name: 'pattern',
                      widget: 'string',
                      required: false,
                      default: ''
                    },
                    {
                      label: 'Validation Error Message for Pattern',
                      name: 'title',
                      widget: 'string',
                      required: false,
                      default: ''
                    },
                    {
                      label: 'Min Length',
                      name: 'minLength',
                      hint: 'Useful if you wanna limit no of characters In a Field',
                      widget: 'number',
                      required: false
                    },
                    {
                      label: 'Max Length',
                      name: 'maxLength',
                      hint: 'Useful if you wanna limit no of characters In a Field',
                      widget: 'number',
                      required: false
                    }
                  ]
                }
              ]
            },
            {
              label: 'Email',
              name: 'email',
              widget: 'object',
              fields: [
                {
                  label: 'Label',
                  name: 'label',
                  widget: 'string'
                },
                {
                  label: 'Placeholder',
                  name: 'placeholder',
                  widget: 'string',
                  required: false
                },
                {
                  label: 'Value',
                  name: 'value',
                  hint: 'field name that will be used on the form',
                  widget: 'string'
                },
                {
                  label: 'Name',
                  name: 'name',
                  hint: 'Same with Value , Except when Using Google Form, it Uses entry.[1234] format',
                  widget: 'string'
                },
                {
                  label: 'HTML TAG',
                  name: 'tag',
                  widget: 'select',
                  options: InputTags,
                  default: 'input'
                },
                {
                  label: 'Validation',
                  name: 'validation',
                  widget: 'object',
                  fields: [
                    {
                      label: 'Required',
                      name: 'required',
                      widget: 'boolean',
                      default: true
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      label: 'Pick Up Locations Sections',
      name: 'pick_up_locations',
      widget: 'object',
      fields: [
        {
          label: 'Pick Up Location Section Title',
          name: 'title',
          widget: 'string',
          required: false
        },
        {
          label: 'Pick Up Location List',
          name: 'locations',
          required: false,
          collapsed: true,
          label_singular: 'Location',
          widget: 'list',
          fields: [
            {
              label: 'Title',
              name: 'title',
              widget: 'string',
              default: ''
            },
            {
              label: 'Address Line 1',
              name: 'address_1',
              widget: 'string'
            },
            {
              label: 'Address Line 2',
              name: 'address_2',
              required: false,
              default: ''
            },
            {
              label: 'City',
              name: 'city',
              widget: 'string'
            }
          ]
        }
      ]
    },
    {
      label: 'Mobile Phones Section',
      name: 'mobiles',
      widget: 'object',
      fields: [
        {
          label: 'Contact Numbers Section Title',
          name: 'title',
          widget: 'string',
          required: false,
          default: ''
        },
        {
          label: 'Contact No. List',
          name: 'mobiles',
          required: false,
          collapsed: true,
          label_singular: 'Contact No',
          widget: 'list',
          fields: [
            {
              label: 'Name',
              name: 'name',
              hint: 'Use Network Name or Type of Number ie. Home / Office / Contact',
              widget: 'string'
            },
            {
              label: 'Contact No',
              hint: 'Telephone Number or Mobile Number',
              name: 'mobile',
              widget: 'string'
            }
          ]
        }
      ]
    }
  ]
}
export default config
