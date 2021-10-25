import type { CmsFieldBase, CmsFieldObject } from 'netlify-cms-core'

type Field= CmsFieldBase & CmsFieldObject;
const field:Field = {
  label: 'Testimonials With Large Avatar',
  name: 'testimonial_with_avatar',
  widget: 'object',
  summary: 'Testimonial/With Large Avatar',
  fields: [
    {
      label: 'Template',
      name: 'template',
      widget: 'hidden',
      default: 'templates/testimonials/with-large-avatar.html'
    },
    {
      label: 'Large Avatar Position',
      name: 'position',
      widget: 'select',
      options: [
        'left',
        'right'
      ],
      default: 'left'
    },
    {
      label: 'Testimonial',
      name: 'testimonial',
      widget: 'string',
      default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.'
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
          default: 'CEO - My Company'
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
