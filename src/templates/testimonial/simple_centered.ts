import type { CmsFieldBase, CmsFieldObject } from 'netlify-cms-core'

type Field= CmsFieldBase & CmsFieldObject;
const field:Field = {
  label: 'Testimonials Simple Centered',
  name: 'testimonials_simple_centered',
  widget: 'object',
  summary: 'Testimonial/Simple Centered: {{fields.header}}',
  fields: [
    {
      label: 'Testimonial',
      name: 'testimonial',
      widget: 'string',
      default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis'
    },
    {
      label: 'User Company Logo',
      name: 'image',
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
      label: 'Template',
      name: 'template',
      widget: 'hidden',
      default: 'templates/testimonials/simple-centered.html'
    },
    {
      label: 'User',
      name: 'user',
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
          default: 'Chief Technical Officer'
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
