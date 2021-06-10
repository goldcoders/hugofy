import CMS from 'netlify-cms-app';
import type { CmsBackend, CmsBackendType, CmsConfig } from 'netlify-cms-core';
import collections from './collections/index';
import './events';
import './shortcodes';

const local_backend: boolean = !!import.meta.env.SNOWPACK_PUBLIC_BACKEND;
const backendType: CmsBackendType = import.meta.env.SNOWPACK_PUBLIC_BACKEND_TYPE || 'git-gateway';
const media_folder: string = `${import.meta.env.SNOWPACK_PUBLIC_MEDIA_FOLDER}` || 'static/images';
const repo: string = `${import.meta.env.SNOWPACK_PUBLIC_REPO}` || 'goldcoders/hugo-dusk';
const branch: string = `${import.meta.env.SNOWPACK_PUBLIC_BRANCH}` || 'main';
const public_folder: string = `${import.meta.env.SNOWPACK_PUBLIC_PUBLIC_FOLDER}` || '/images';
const site_url: string = `${import.meta.env.SNOWPACK_PUBLIC_SITE_URL}` || 'https://goldcoders.dev';
const site_domain: string = `${import.meta.env.SNOWPACK_PUBLIC_DOMAIN}` || 'goldcoders.dev';
const display_url: string = `${import.meta.env.SNOWPACK_PUBLIC_DISPLAY_URL}` || 'https://goldcoders.dev';
const show_preview_links: boolean = !!import.meta.env.SNOWPACK_PUBLIC_SHOW_PREVIEW_LINKS;

let backend: CmsBackend = {
    name: backendType,
    branch,
    base_url: site_url,
    repo,
    site_domain
}

let config:CmsConfig = {
    backend,
    local_backend,
    media_folder,
    public_folder,
    site_url,
    display_url,
    show_preview_links,
    collections
}
console.log(config);
CMS.init({config});
