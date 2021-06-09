import type { CmsCollectionFile } from 'netlify-cms-core';

let config:CmsCollectionFile = {
    "file": "/content/legalities/_index.md",
    "label": "Legalities Page",
    "name": "section_legalities",
    "fields": [
        {
            "label": "Index",
            "name": "index",
            "widget": "hidden",
            "default": true
        },
        {
            "label": "Data",
            "name": "data",
            "widget": "hidden",
            "default": {}
        },
        {
            "label": "Unpubish Page",
            "name": "draft",
            "widget": "boolean",
            "default": false,
            "hint": "To Hide This Page, Set to True"
        },
        {
            "label": "Show Cart",
            "name": "showcart",
            "widget": "boolean",
            "default": true
        },
        {
            "label": "Show Search",
            "name": "showsearch",
            "widget": "boolean",
            "default": true
        },
        {
            "label": "Title",
            "name": "title",
            "widget": "string"
        },
        {
            "label": "Description",
            "name": "description",
            "widget": "text"
        },
        {
            "label": "Featured Image",
            "name": "featured_image",
            "widget": "image",
            "required": false
        },
        {
            "label": "Content",
            "name": "body",
            "widget": "markdown",
            "required": false
        },
    ]
};
export default config;
