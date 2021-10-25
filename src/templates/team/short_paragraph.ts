import type { CmsFieldBase, CmsFieldObject } from 'netlify-cms-core'

/* eslint max-lines: 0 */
type Field= CmsFieldBase & CmsFieldObject;
const field:Field = {
  label: 'Team Short Paragraph',
  name: 'team_short',
  widget: 'object',
  summary: 'Team Short: {{fields.title}}',
  fields: [
    {
      label: 'Template',
      name: 'template',
      widget: 'hidden',
      default: 'templates/teams/short.html'
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      default: 'Meet Our Team'
    },
    {
      label: 'Subtitle',
      name: 'subtitle',
      widget: 'string',
      default: 'Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet lectus sit pretium egestas vel mattis neque.'
    },
    {
      label: 'Name Text Color',
      name: 'name_text',
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
      label: 'Title Text Color',
      name: 'title_text',
      widget: 'object',
      fields: [
        {
          label: 'Text Color',
          name: 'color',
          widget: 'relation',
          collection: 'colors',
          file: 'color_list',
          display_fields: ['colors.*.name'],
          search_fields: ['colors.*.name'],
          value_field: 'colors.*.value'
        },
        {
          label: 'Text Shade',
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
      label: 'Role Text Color',
      name: 'role_text',
      widget: 'object',
      fields: [
        {
          label: 'Text Color',
          name: 'color',
          widget: 'relation',
          collection: 'colors',
          file: 'color_list',
          display_fields: ['colors.*.name'],
          search_fields: ['colors.*.name'],
          value_field: 'colors.*.value'
        },
        {
          label: 'Text Shade',
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
      label: 'Team Members',
      name: 'members',
      required: false,
      collapsed: true,
      label_singular: 'Member',
      widget: 'list',
      summary: '{{fields.name}}',
      fields: [
        {
          label: 'Full Name',
          name: 'name',
          widget: 'string',
          required: false,
          default: 'Juan Dela Cruz'
        },
        {
          label: 'Role',
          name: 'role',
          widget: 'object',
          fields: [
            {
              label: 'Name',
              name: 'name',
              widget: 'string'
            }
          ]
        },
        {
          label: 'Description',
          name: 'description',
          widget: 'markdown'
        },
        {
          label: 'Profile Picture',
          name: 'image',
          widget: 'object',
          fields: [
            {
              label: 'Image',
              name: 'url',
              widget: 'image'
            },
            {
              label: 'Alt',
              name: 'name',
              widget: 'string',
              required: false,
              default: 'Team Member'
            }
          ]
        },
        {
          label: 'Social Networks',
          name: 'links',
          widget: 'list',
          required: false,
          collapsed: true,
          label_singular: 'Social Network',
          types: [
            {
              label: 'Facebook',
              name: 'facebook',
              widget: 'object',
              fields: [
                {
                  label: 'Link',
                  name: 'link',
                  widget: 'string',
                  pattern: [
                    '(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})',
                    'ONLY VALID URL ALLOWED!'
                  ]
                },
                {
                  label: 'Icon',
                  name: 'icon',
                  widget: 'image',
                  required: false,
                  default: '/images/facebook.svg'
                }
              ]
            },
            {
              label: 'Instagram',
              name: 'instagram',
              widget: 'object',
              fields: [
                {
                  label: 'Link',
                  name: 'link',
                  widget: 'string',
                  pattern: [
                    '(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})',
                    'ONLY VALID URL ALLOWED!'
                  ]
                },
                {
                  label: 'Icon',
                  name: 'icon',
                  widget: 'image',
                  required: false,
                  default: '/images/instagram.svg'
                }
              ]
            },
            {
              label: 'Twitter',
              name: 'twitter',
              widget: 'object',
              fields: [
                {
                  label: 'Link',
                  name: 'link',
                  widget: 'string',
                  pattern: [
                    '(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})',
                    'ONLY VALID URL ALLOWED!'
                  ]
                },
                {
                  label: 'Icon',
                  name: 'icon',
                  widget: 'image',
                  required: false,
                  default: '/images/twitter.svg'
                }
              ]
            },
            {
              label: 'Github',
              name: 'github',
              widget: 'object',
              fields: [
                {
                  label: 'Link',
                  name: 'link',
                  widget: 'string',
                  pattern: [
                    '(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})',
                    'ONLY VALID URL ALLOWED!'
                  ]
                },
                {
                  label: 'Icon',
                  name: 'icon',
                  widget: 'image',
                  required: false,
                  default: '/images/github.svg'
                }
              ]
            },
            {
              label: 'Youtube',
              name: 'youtube',
              widget: 'object',
              fields: [
                {
                  label: 'Link',
                  name: 'link',
                  widget: 'string',
                  pattern: [
                    '(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})',
                    'ONLY VALID URL ALLOWED!'
                  ]
                },
                {
                  label: 'Icon',
                  name: 'icon',
                  widget: 'image',
                  required: false,
                  default: '/images/youtube.svg'
                }
              ]
            },
            {
              label: 'LinkedIn',
              name: 'linkedin',
              widget: 'object',
              fields: [
                {
                  label: 'Link',
                  name: 'link',
                  widget: 'string',
                  pattern: [
                    '(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})',
                    'ONLY VALID URL ALLOWED!'
                  ]
                },
                {
                  label: 'Icon',
                  name: 'icon',
                  widget: 'image',
                  required: false,
                  default: '/images/linkedin.svg'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
export default field
