import CMS from 'netlify-cms-app'
/* eslint require-unicode-regexp: 0 */
/* eslint no-magic-numbers: ["error", { "ignoreArrayIndexes": true }] */
/* eslint prefer-named-capture-group: 0 */

CMS.registerEditorComponent({
  id: 'figure',
  label: 'Figure',
  fields: [
    {
      name: 'title',
      label: 'Figure Title',
      widget: 'string'
    },
    {
      name: 'src',
      label: 'Figure SRC',
      widget: 'image'
    }
  ],
  pattern: /{{< figure src="([\s\S]*)" title="([a-zA-Z0-9-_ ]+)" >}}/,
  fromBlock (match) {
    return {
      title: match[2],
      src: match[1]
    }
  },
  toBlock (obj) {
    return `{{< figure src="/${obj.src}" title="${obj.title}" >}}`
  },
  toPreview (obj) {
    return `<figure><img src="/${obj.src}" alt="${obj.title}"><figcaption>${obj.title}</figcaption></figure>`
  }
})
