import CMS from 'netlify-cms-app'
/* eslint require-unicode-regexp: 0 */
/* eslint no-magic-numbers: ["error", { "ignoreArrayIndexes": true }] */
/* eslint prefer-named-capture-group: 0 */

CMS.registerEditorComponent({
  id: 'gist',
  label: 'Gist',
  fields: [
    {
      name: 'username',
      label: 'Github Username',
      widget: 'string'
    },
    {
      name: 'gid',
      label: 'Gist ID',
      widget: 'string'
    }
  ],
  pattern: /{{< gist ([a-zA-Z0-9]+) ([a-zA-Z0-9]+) >}}/,
  fromBlock (match) {
    return {
      username: match[1],
      gid: match[2]
    }
  },
  toBlock (obj) {
    return `{{< gist ${obj.username} ${obj.gid} >}}`
  },
  toPreview (obj) {
    return `{{< gist ${obj.username} ${obj.gid} >}}`
  }
})
