import CMS from 'netlify-cms-app'
/* eslint require-unicode-regexp: 0 */
/* eslint no-magic-numbers: ["error", { "ignoreArrayIndexes": true }] */
/* eslint prefer-named-capture-group: 0 */

CMS.registerEditorComponent({
  id: 'vimeo',
  label: 'Vimeo',
  fields: [
    {
      name: 'shortcode',
      label: 'Vimeo shortcode',
      widget: 'string'
    }
  ],
  pattern: /{{< vimeo ([a-zA-Z0-9]+) >}}/,
  fromBlock (match) {
    return {
      shortcode: match[1]
    }
  },
  toBlock (obj) {
    return `{{< vimeo ${obj.shortcode} >}}`
  },
  toPreview (obj) {
    return `{{< vimeo ${obj.shortcode} >}}`
  }
})
