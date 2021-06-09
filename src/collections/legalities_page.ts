import type { CmsCollection } from 'netlify-cms-core';
import { LegalitiesData } from '../data';

let legalities_page:CmsCollection= {
    "name": "legalities",
    "label": "Legalities",
    "editor": {
        "preview": false
    },
    "files": [
       LegalitiesData 
    ]
};
export { legalities_page };
