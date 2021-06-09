import type { CmsCollection } from 'netlify-cms-core';
import { CategoryData, TagsData } from '../data';

let taxonomies:CmsCollection= {
    "name": "taxonomies",
    "label": "Taxonomies",
    "editor": {
        "preview": false
    },
    "files": [
        CategoryData,
        TagsData,
    ]
};
export { taxonomies };
