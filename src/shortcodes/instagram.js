import CMS from 'netlify-cms-app'
/* eslint require-unicode-regexp: 0 */
/* eslint no-magic-numbers: ["error", { "ignoreArrayIndexes": true }] */
/* eslint prefer-named-capture-group: 0 */

CMS.registerEditorComponent({
  id: 'instagram',
  label: 'Instagram',
  fields: [
    {
      name: 'pid',
      label: 'Post id',
      widget: 'string'
    }
  ],
  pattern: /{{< instagram ([a-zA-Z0-9]+) >}}/,
  fromBlock (match) {
    return {
      pid: match[1]
    }
  },
  toBlock (obj) {
    return `{{< instagram ${obj.pid} >}}`
  },
  toPreview (obj) {
    return `{{< instagram ${obj.pid} >}}`
  }
})
