import CMS from 'netlify-cms-app';
import { CmsBackend, CmsConfig } from 'netlify-cms-core';
import collections from './collections/index';
import './events';
import './shortcodes';
import './widgets';


let backend: CmsBackend = {
    name: "git-gateway",
    branch: "main"
}

let config: CmsConfig = {
    backend,
    local_backend: false,
    load_config_file: false,
    media_folder: 'static/images',
    logo_url: 'images/logo.svg',
    public_folder: '/images',
    site_url: process.env.HUGO_BASEURL,
    display_url: process.env.HUGO_BASEURL,
    show_preview_links: false,
    collections
}
CMS.init({config});

