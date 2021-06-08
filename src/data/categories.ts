import { CmsCollectionFile } from 'netlify-cms-core';

let config:CmsCollectionFile = {
    "file": "/data/categories.yaml",
    "label": "Category List",
    "name": "category_list",
    "fields": [
        {
            "label": "Category List",
            "name": "categories",
            "required": false,
            "collapsed": true,
            "label_singular": "Category",
            "widget": "list",
            "fields": [
                {
                    "label": "Name",
                    "name": "name",
                    "widget": "string",
                    "pattern": [
                        "^[a-z0-9]+(?:-[a-z0-9]+)*$",
                        "Letters, Numbers and Dash(-) ONLY"
                    ]
                }
            ]
        }
    ]
};

export default config;
