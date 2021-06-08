import { CmsCollection } from 'netlify-cms-core';

let taxonomies:CmsCollection= {
    "name": "taxonomies",
    "label": "Taxonomies",
    "editor": {
        "preview": false
    },
    "files": [
        {
            "file": "/data/tags.yaml",
            "label": "Tag List",
            "name": "tag_list",
            "fields": [
                {
                    "label": "Tag List",
                    "name": "tags",
                    "widget": "list",
                    "required": false,
                    "collapsed": true,
                    "label_singular": "Tag",
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
        },
        {
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
        }
    ]
};
export { taxonomies };
