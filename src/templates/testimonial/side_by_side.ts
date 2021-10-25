import type { CmsFieldBase, CmsFieldObject } from 'netlify-cms-core'

type Field= CmsFieldBase & CmsFieldObject;
const field:Field = {
  label: 'Testimonials Side by  Side',
  name: 'testimonials_side_by_side',
  widget: 'object',
  summary: 'Testimonial/Side By Side',
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
      label: 'Template',
      name: 'template',
      widget: 'hidden',
      default: 'templates/testimonials/side-by-side.html'
    },
    {
      label: 'Left User Testimonial',
      name: 'left_testimonial',
      widget: 'string',
      default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis. Nemo expedita voluptas culpa sapiente alias molestiae.'
    },
    {
      label: 'Left Company Logo',
      name: 'left_image',
      widget: 'object',
      fields: [
        {
          label: 'Image',
          name: 'image',
          widget: 'image',
          default: 'images/tuple-logo.svg'
        },
        {
          label: 'Image Alt',
          name: 'alt',
          default: 'Company Logo',
          widget: 'string'
        }
      ]
    },
    {
      label: 'Left User Info',
      name: 'left_user',
      widget: 'object',
      fields: [
        {
          label: 'Name',
          name: 'name',
          widget: 'string',
          default: 'Juan Dela Cruz'
        },
        {
          label: 'Company/Work',
          name: 'company',
          widget: 'string',
          default: 'CEO/Founder'
        },
        {
          label: 'Profile Photo',
          name: 'image',
          widget: 'image',
          default: 'images/avatar.svg'
        }
      ]
    },
    {
      label: 'Right User Testimonial',
      name: 'right_testimonial',
      widget: 'string',
      default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis. Nemo expedita voluptas culpa sapiente alias molestiae.'
    },
    {
      label: 'Right Company Logo',
      name: 'right_image',
      widget: 'object',
      fields: [
        {
          label: 'Image',
          name: 'image',
          widget: 'image',
          default: 'images/mirage-logo.svg'
        },
        {
          label: 'Image Alt',
          name: 'alt',
          default: 'Company Logo',
          widget: 'string'
        }
      ]
    },
    {
      label: 'Right User Info',
      name: 'right_user',
      widget: 'object',
      fields: [
        {
          label: 'Name',
          name: 'name',
          widget: 'string',
          default: 'Juan Dela Cruz'
        },
        {
          label: 'Company/Work',
          name: 'company',
          default: 'CEO/Founder'
        },
        {
          label: 'Profile Photo',
          name: 'image',
          widget: 'image',
          default: 'images/avatar.svg'
        }
      ]
    }
  ]
}
export default field
