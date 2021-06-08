
import { CmsCollectionFile } from 'netlify-cms-core';

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
            "label": "Show Pagination",
            "name": "showpagination",
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
        }
    ]
};
export default config;
