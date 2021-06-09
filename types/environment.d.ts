
import type { CmsBackendType } from 'netlify-cms-core';

declare global {
    
      interface ImportMeta {
        env: {
        SNOWPACK_PUBLIC_BACKEND_TYPE: CmsBackendType
        SNOWPACK_PUBLIC_BASEURL: string;
        SNOWPACK_PUBLIC_REPO: string;
        SNOWPACK_PUBLIC_BRANCH: string; 
        SNOWPACK_PUBLIC_BACKEND: boolean;
        SNOWPACK_PUBLIC_SHOW_PREVIEW_LINKS: boolean;
        SNOWPACK_PUBLIC_MEDIA_FOLDER: string;
        SNOWPACK_PUBLIC_SITE_URL: string;
        SNOWPACK_PUBLIC_DOMAIN: string;
        SNOWPACK_PUBLIC_DISPLAY_URL: string;
        SNOWPACK_PUBLIC_LOGO_URL: string;
        SNOWPACK_PUBLIC_PUBLIC_FOLDER: string;
        }
    }
    namespace NodeJS {
      interface ProcessEnv {
        SNOWPACK_PUBLIC_BACKEND_TYPE: CmsBackendType
        SNOWPACK_PUBLIC_BASEURL: string;
        SNOWPACK_PUBLIC_REPO: string;
        SNOWPACK_PUBLIC_BRANCH: string; 
        SNOWPACK_PUBLIC_BACKEND: boolean;
        SNOWPACK_PUBLIC_SHOW_PREVIEW_LINKS: boolean;
        SNOWPACK_PUBLIC_MEDIA_FOLDER: string;
        SNOWPACK_PUBLIC_SITE_URL: string;
        SNOWPACK_PUBLIC_DOMAIN: string;
        SNOWPACK_PUBLIC_DISPLAY_URL: string;
        SNOWPACK_PUBLIC_LOGO_URL: string;
        SNOWPACK_PUBLIC_PUBLIC_FOLDER: string;
      }
  }

  }
  
  // If this file has no import/export statements (i.e. is a script)
  // convert it into a module by adding an empty export statement.
  export { };
