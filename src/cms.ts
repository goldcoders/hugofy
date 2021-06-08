import CMS from 'netlify-cms-app';
import { CmsBackend, CmsConfig } from 'netlify-cms-core';
import collections from './collections/index';
import './events';
import './shortcodes';
import './widgets';


let backend: CmsBackend = {
    name: "git-gateway",
    branch: "netlify-cms"
}

let config:CmsConfig = {
    backend,
    local_backend: true,
    media_folder: process.env.MEDIA_FOLDER,
    public_folder: process.env.PUBLIC_FOLDER,
    site_url: process.env.SITE_URL,
    display_url: process.env.DISPLAY_URL,
    logo_url: process.env.LOGO_URL,
    show_preview_links: true,
    publish_mode: 'editorial_workflow',
    collections
}

CMS.init({config});


