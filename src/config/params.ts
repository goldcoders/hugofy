import type { CmsCollectionFile } from 'netlify-cms-core'
import SizeOptions from '../options/SizeOptions'

const config:CmsCollectionFile = {
  file: '/config/_default/params.toml',
  label: 'Site Branding',
  name: 'params_toml',
  fields: [
    {
      label: 'Navbar',
      name: 'navbar',
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
      label: 'Brand Logo',
      name: 'logo',
      widget: 'object',
      fields: [
        {
          label: 'Brand Logo',
          name: 'image',
          widget: 'image',
          default: '/images/logo.svg',
          required: false,
          hint: 'This Will Only Be Displayed at Mobile Devices'
        },
        {
          label: 'Image Height',
          name: 'height',
          widget: 'select',
          options: SizeOptions,
          default: '14'
        }
      ]
    },
    {
      label: 'Brand',
      name: 'brand',
      widget: 'object',
      fields: [
        {
          label: 'Enable',
          name: 'enable',
          widget: 'boolean',
          hint: 'Hide or Show Brand Name on Navbar'
        },
        {
          label: 'Brand Font',
          name: 'font',
          widget: 'relation',
          collection: 'fonts',
          file: 'font_list',
          display_fields: ['fonts.*.name'],
          search_fields: ['fonts.*.name'],
          value_field: 'fonts.*.name'
        },
        {
          label: 'Brand Name',
          name: 'name',
          widget: 'string',
          default: 'Thriftshop',
          required: false
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
      label: 'Brand Tag',
      name: 'tag',
      widget: 'object',
      fields: [
        {
          label: 'Tag Name',
          name: 'name',
          widget: 'string',
          default: 'SITE',
          required: false
        },
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
      label: 'Favicon',
      name: 'favicon',
      widget: 'image',
      hint: 'generate favicon here: https://favicon.io/',
      default: '/favicon.ico'
    },
    {
      label: 'Site Searchable Sections',
      name: 'mainSections',
      collapsed: true,
      label_singular: 'searchable',
      widget: 'select',
      hint: 'Pages From Section Listed Here is Searchable',
      multiple: true,
      options: [
        'blog',
        'products'
      ]
    },
    {
      label: 'Copyright',
      name: 'copyright',
      widget: 'string',
      hint: 'add your Copyright or Trademark text.'
    }
  ]
}
export default config
