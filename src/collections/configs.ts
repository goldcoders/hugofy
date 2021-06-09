import type { CmsCollection } from 'netlify-cms-core';
import { AppConfig, MenuConfig, ParamConfig } from "../config";
import { CartData, SocialData } from "../data";

let configs:CmsCollection= {
    "name": "configs",
    "label": "Configurations",
    "editor": {
        "preview": false
    },
    "files": [
        AppConfig,
        MenuConfig,
        ParamConfig,
        CartData,
        SocialData,
    ]
};
export { configs };
