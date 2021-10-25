import CMS from 'netlify-cms-app'
/* eslint require-unicode-regexp: 0 */
/* eslint no-magic-numbers: ["error", { "ignoreArrayIndexes": true }] */
/* eslint prefer-named-capture-group: 0 */

CMS.registerEditorComponent({
  id: 'youtube',
  label: 'Youtube',
  fields: [
    {
      name: 'id',
      label: 'Youtube Video ID',
      widget: 'string'
    }
  ],
  pattern: /{{< youtube ([a-zA-Z0-9]+) >}}/,
  fromBlock (match) {
    return {
      id: match[1]
    }
  },
  toBlock (obj) {
    return `{{< youtube ${obj.id} >}}`
  },
  toPreview (obj) {
    return `<img src="http://img.youtube.com/vi/${obj.id}/maxresdefault.jpg" alt="Youtube Video"/>`
  }
})
