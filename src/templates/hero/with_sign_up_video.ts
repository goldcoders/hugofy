import type { CmsFieldBase, CmsFieldObject } from 'netlify-cms-core'

type Field= CmsFieldBase & CmsFieldObject;
const field:Field = {
  label: 'Hero With Sign Up and Video',
  name: 'hero_with_sign_up_and_video',
  widget: 'object',
  summary: 'Hero/With SignUp and Video: {{fields.header}} {{fields.tag}}',
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
      default: 'of the Year 2020'
    },
    {
      label: 'Description',
      name: 'description',
      widget: 'text',
      default: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua ad ad non deserunt sunt.'
    },
    {
      label: 'Template',
      name: 'template',
      widget: 'hidden',
      default: 'templates/hero/with-signup-and-video.html'
    },
    {
      label: 'Sign Up',
      name: 'mail',
      widget: 'object',
      required: true,
      fields: [
        {
          label: 'Enable',
          name: 'enable',
          widget: 'boolean',
          required: false,
          default: true
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
          label: 'Method',
          name: 'method',
          widget: 'string',
          default: 'POST'
        },
        {
          label: 'Placeholder',
          name: 'placeholder',
          widget: 'string',
          required: false,
          default: 'Enter Your Best Email.'
        },
        {
          label: 'Hint',
          name: 'hint',
          widget: 'string',
          required: false,
          default: 'Sign up to get notified when it‚Äö√Ñ√¥s ready.'
        },
        {
          label: 'Button Text',
          name: 'txt',
          widget: 'string',
          required: false,
          default: 'Notify Me'
        },
        {
          label: 'Privacy URL',
          name: 'privacy',
          widget: 'string',
          required: false,
          default: '/privacy'
        }
      ]
    },
    {
      label: 'Button',
      name: 'btn',
      widget: 'object',
      required: true,
      fields: [
        {
          label: 'Enable',
          name: 'enable',
          widget: 'boolean',
          required: false,
          default: true
        },
        {
          label: 'Image',
          name: 'img',
          widget: 'image',
          required: false,
          default: 'images/seo.svg'
        },
        {
          label: 'Link',
          name: 'link',
          widget: 'string',
          default: '#'
        },
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
          default: 'Learn More'
        }
      ]
    },
    {
      label: 'Video',
      name: 'video',
      widget: 'object',
      required: false,
      fields: [
        {
          label: 'Video Image',
          name: 'img',
          widget: 'image',
          default: 'https://images.unsplash.com/photo-1527632911563-ee5b6d53465b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
        },
        {
          label: 'Youtube ID',
          name: 'id',
          widget: 'string',
          default: 'wf4F2-9UXUo'
        }
      ]
    }
  ]

}
export default field
