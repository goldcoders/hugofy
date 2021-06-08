import { CmsCollection } from 'netlify-cms-core';
import { FontData } from '../data';

let fonts:CmsCollection= {
    "name": "fonts",
    "label": "Site Fonts",
    "hide": true,
    "files": [
        FontData,
    ]
};
export { fonts };
