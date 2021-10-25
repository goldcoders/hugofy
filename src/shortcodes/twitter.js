import CMS from 'netlify-cms-app'
/* eslint require-unicode-regexp: 0 */
/* eslint no-magic-numbers: ["error", { "ignoreArrayIndexes": true }] */
/* eslint prefer-named-capture-group: 0 */

CMS.registerEditorComponent({
  id: 'twitter',
  label: 'Twitter',
  fields: [
    {
      name: 'tid',
      label: 'Tweet id',
      widget: 'string'
    }
  ],
  pattern: /{{< tweet ([a-zA-Z0-9]+) >}}/,
  fromBlock (match) {
    return {
      tid: match[1]
    }
  },
  toBlock (obj) {
    return `{{< tweet ${obj.tid} >}}`
  },
  toPreview (obj) {
    return `{{< tweet ${obj.tid} >}}`
  }
})
