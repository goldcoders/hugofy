
import type { CmsCollectionFile } from 'netlify-cms-core';

let config:CmsCollectionFile = {
    "file": "/content/products/_index.md",
    "label": "Product Listing Page",
    "name": "section_products",
    "fields": [
        {
            "label": "Index",
            "name": "index",
            "widget": "hidden",
            "default": true
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
            "label": "Show Pagination",
            "name": "showpagination",
            "widget": "boolean",
            "default": true
        },
        {
            "label": "Custom Data",
            "name": "custom",
            "widget": "list",
            "types": [
                {
                    label:"data",
                    name: "data",
                    widget: "object",
                    fields: [
                        {label: "Key", name: "key", widget: "string", default: "", required: false},
                        {label: "Value", name: "value", widget: "string", default: "", required: false},
                    ]
                },
            ]
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
        }
    ]
};
export default config;
