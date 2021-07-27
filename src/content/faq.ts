import type { CmsCollectionFile } from 'netlify-cms-core';

let config:CmsCollectionFile = {
    "file": "/content/faq/_index.md",
    "label": "FAQ Listing Page",
    "name": "section_faqs",
    "preview_path": "/faq",
    "fields": [
        {
            "label": "Index",
            "name": "index",
            "widget": "hidden",
            "default": true
        },
        {
            "label": "Publish This  Page",
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
            "label": "Slug",
            "name": "slug",
            "widget": "string",
            "required": false,
            "hint": "Default Value Will Be The Title When Leave Blank",
            "pattern": [
                "^[a-z0-9](-?[a-z0-9])*$",
                "Small Letters, Numbers and Dash(-) ONLY"
            ]
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
            "widget": "markdown"
        }
    ]
};
export default config;
