import { CmsCollection } from 'netlify-cms-core';
import { BlogContent, ContactContent, FaqContent, LegalitiesContent, ProductContent } from '../content';

let sections:CmsCollection= {
    "name": "sections",
    "label": "Site Sections",
    "editor": {
        "preview": false
    },
    "files": [
       BlogContent, 
       ProductContent,
       FaqContent,
       ContactContent,
       LegalitiesContent,
    ]
};
export { sections };

