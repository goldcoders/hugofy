import type { CmsCollection } from 'netlify-cms-core';

let home_contents:CmsCollection= {

    "name": "home_contents",
    "identifier_field": "title",
    "label": "Custom Home Contents",
    "label_singular": "Content Section",
    "folder": "/content/home/contents",
    "filter": {
        "field": "index",
        "value": false
    },
    "sortable_fields": [
        "title"
    ],
    "summary": "{{fields.title}}",
    "create": true,
    "editor": {
        "preview": false
    },
    "fields": [
        {
            "label": "Index",
            "name": "index",
            "widget": "hidden",
            "default": false
        },
        {
            "label": "Title",
            "name": "title",
            "widget": "string"
        },
        {
            "label": "Content",
            "name": "body",
            "widget": "markdown",
            "hint": "We Can Use this Content Inside Landing Page Builder."
        }
    ]
};
export { home_contents };
