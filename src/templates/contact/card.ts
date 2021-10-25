import type { CmsFieldBase, CmsFieldObject } from 'netlify-cms-core'
import GapSizes from '../../options/GapSizes'

type Field= CmsFieldBase & CmsFieldObject;
const field:Field = {
  label: 'Contact Cards',
  name: 'contacts_cards',
  widget: 'object',
  summary: 'Contact/Cards: {{fields.title}}',
  fields: [
    {
      label: 'Template',
      name: 'template',
      widget: 'hidden',
      default: 'templates/contacts/cards.html'
    },
    {
      label: 'Team Name',
      name: 'title',
      widget: 'string',
      hint: 'Group name or Team Name',
      required: false
    },
    {
      label: 'Description',
      name: 'description',
      widget: 'text',
      hint: 'Give Brief Intro , Describing These Group',
      required: false
    },
    {
      label: 'Column Gaps',
      name: 'gap',
      widget: 'select',
      options: GapSizes,
      default: '8'
    },
    {
      label: 'Column on Desktop',
      name: 'colLG',
      widget: 'number',
      default: 6
    },
    {
      label: 'Column on Tablets',
      name: 'colMD',
      widget: 'number',
      default: 6
    },
    {
      label: 'Column on Mobile',
      name: 'col',
      widget: 'number',
      default: 2
    },
    {
      label: 'Contacts',
      name: 'contacts',
      widget: 'list',
      summary: '{{fields.name}}',
      hint: 'Default Settings is Perfect for 3 Contact, You can Customize Column and Span if You Have More or Less Contacts',
      fields: [
        {
          label: 'Avatar',
          name: 'image',
          widget: 'object',
          fields: [
            {
              label: 'Image',
              name: 'url',
              widget: 'image',
              default: '/images/avatar.svg'
            },
            {
              label: 'Image Alt',
              name: 'alt',
              widget: 'string',
              default: 'contact'
            }
          ]
        },
        {
          label: 'Name',
          name: 'name',
          widget: 'string',
          default: 'Juan Dela Cruz'
        },
        {
          label: 'Work',
          name: 'work',
          widget: 'string',
          default: 'Chief Technical Officer'
        },
        {
          label: 'Role',
          name: 'role',
          widget: 'string',
          default: 'admin'
        },
        {
          label: 'Email',
          name: 'email',
          widget: 'string',
          default: 'juandelacruz@gmail.com'
        },
        {
          label: 'Mobile No',
          name: 'mobile',
          widget: 'string',
          default: '+6391912345678'
        },
        {
          label: 'Desktop Span',
          name: 'spanLG',
          widget: 'number',
          default: 2
        },
        {
          label: 'Tablet Span',
          name: 'spanMD',
          widget: 'number',
          default: 2
        },
        {
          label: 'Mobile Span',
          name: 'span',
          widget: 'number',
          default: 1
        }
      ]
    }
  ]
}

export default field
