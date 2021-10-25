
import type { CmsFieldBase, CmsFieldObject } from 'netlify-cms-core'
import GapSizes from '../../options/GapSizes'

type Field= CmsFieldBase & CmsFieldObject;
const field:Field = {
  label: 'Hero App with Screenshot',
  name: 'hero_app_with_screenshot',
  widget: 'object',
  summary: 'Hero/App with Screenshot: {{fields.header}} {{fields.tag}}',
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
      widget: 'markdown',
      default: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.'
    },
    {
      label: 'Backgroud Upper Half',
      name: 'bgupper',
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
          value_field: 'colors.*.value',
          default: 'gray'
        },
        {
          label: 'Shade',
          name: 'shade',
          widget: 'relation',
          collection: 'colors',
          file: 'color_list',
          required: false,
          default: '50',
          hint: 'themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.',
          display_fields: ['shades.*.name'],
          search_fields: ['shades.*.name'],
          value_field: 'shades.*.value'
        }
      ]
    },
    {
      label: 'Backgroud Lower Half',
      name: 'bglower',
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
          value_field: 'colors.*.value',
          default: 'gray'
        },
        {
          label: 'Shade',
          name: 'shade',
          widget: 'relation',
          collection: 'colors',
          file: 'color_list',
          required: false,
          default: '800',
          hint: 'themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.',
          display_fields: ['shades.*.name'],
          search_fields: ['shades.*.name'],
          value_field: 'shades.*.value'
        }
      ]
    },
    {
      label: 'Featured',
      name: 'featured',
      widget: 'object',
      fields: [
        {
          label: 'Image',
          name: 'url',
          widget: 'image',
          default: 'https://images.unsplash.com/photo-1518527399940-f3f768f47dd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80'
        },
        {
          label: 'Image Alt',
          name: 'alt',
          widget: 'string',
          default: 'Screenshot'
        }
      ]
    },
    {
      label: 'Video',
      name: 'video',
      widget: 'object',
      required: false,
      hint: 'To Show Video On Image When Clicked Fill This Up.',
      fields: [
        {
          label: 'Youtube ID',
          name: 'id',
          widget: 'string',
          default: 'wf4F2-9UXUo',
          required: false
        }
      ]
    },
    {
      label: 'Template',
      name: 'template',
      widget: 'hidden',
      default: 'templates/hero/app-with-screenshot.html'
    },
    {
      label: 'Subheader',
      name: 'subheader',
      widget: 'string',
      required: false,
      default: 'MY AWESOME CLIENTS'
    },
    {
      label: 'Logos',
      name: 'logos',
      widget: 'object',
      required: false,
      fields: [
        {
          label: 'Enable',
          name: 'enable',
          widget: 'boolean',
          default: true
        },
        {
          label: 'Column Gaps',
          name: 'gaps',
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
          label: 'Images',
          name: 'images',
          widget: 'list',
          default: [],
          fields: [
            {
              label: 'Image',
              name: 'url',
              widget: 'image',
              default: 'images/statickit-logo.svg'
            },
            {
              label: 'Image ALT',
              name: 'alt',
              widget: 'string',
              default: 'logo item'
            },
            {
              label: 'Desktop Span',
              name: 'spanLG',
              widget: 'number',
              default: 1
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
  ]
}
export default field
