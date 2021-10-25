import type { CmsCollection } from 'netlify-cms-core'

const blog_page:CmsCollection = {
  name: 'blog',
  identifier_field: 'title',
  label: 'Blog',
  label_singular: 'Post',
  folder: '/content/blog',
  filter: {
    field: 'index',
    value: false
  },
  path: '{{slug}}/index',
  create: true,
  media_folder: 'resources',
  public_folder: 'blog/{{slug}}/resources',
  preview_path: 'blog/{{fields.slug}}',
  editor: {
    preview: false
  },
  fields: [
    {
      label: 'Index',
      name: 'index',
      widget: 'hidden',
      default: false
    },
    {
      label: 'Publish Date',
      name: 'date',
      widget: 'datetime'
    },
    {
      label: 'Draft',
      name: 'draft',
      widget: 'boolean',
      default: false
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
      label: 'Title',
      name: 'title',
      widget: 'string'
    },
    {
      label: 'Slug',
      name: 'slug',
      widget: 'string',
      required: false,
      hint: 'Default Value Will Be The Title When Leave Blank',
      pattern: [
        '^[a-z0-9](-?[a-z0-9])*$',
        'Small Letters, Numbers and Dash(-) ONLY'
      ]
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
      hint: 'Note: When Page Title is Changed Remove Image and Choose Image Again.'
    },
    {
      label: 'tags',
      name: 'tags',
      widget: 'relation',
      required: false,
      collection: 'taxonomies',
      file: 'tag_list',
      multiple: true,
      display_fields: ['tags.*.name'],
      search_fields: ['tags.*.name'],
      value_field: 'tags.*.name'
    },
    {
      label: 'categories',
      name: 'categories',
      widget: 'relation',
      required: false,
      collection: 'taxonomies',
      file: 'category_list',
      display_fields: ['categories.*.name'],
      search_fields: ['categories.*.name'],
      value_field: 'categories.*.name'
    },
    {
      label: 'Resources',
      name: 'resources',
      collapsed: true,
      label_singular: 'Image',
      widget: 'list',
      required: false,
      hint: 'Note: When Page Title is Changed Remove Image and Choose Image Again.',
      fields: [
        {
          label: 'Image',
          name: 'src',
          widget: 'image'
        },
        {
          label: 'Name',
          name: 'name',
          widget: 'string',
          hint: 'Any Unique Key For This Blog Post Resources',
          pattern: [
            '^[a-z0-9]+(?:-[a-z0-9]+)*$',
            'Letters, Numbers and Dash Only'
          ]
        }
      ]
    },
    {
      label: 'Content',
      name: 'body',
      widget: 'markdown'
    }
  ]

}
export { blog_page }
