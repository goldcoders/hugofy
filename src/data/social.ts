import { CmsCollectionFile } from 'netlify-cms-core';

let config:CmsCollectionFile = {
    "file": "/data/social_links.yaml",
    "label": "Social Links",
    "name": "data_social_links",
    "fields": [
        {
            "label": "Social Networks",
            "name": "links",
            "widget": "list",
            "required": false,
            "collapsed": true,
            "label_singular": "Social Network",
            "types": [
                {
                    "label": "Facebook",
                    "name": "facebook",
                    "widget": "object",
                    "fields": [
                        {
                            "label": "Link",
                            "name": "link",
                            "widget": "string",
                            "pattern": [
                                "(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})",
                                "ONLY VALID URL ALLOWED!"
                            ]
                        },
                        {
                            "label": "Icon",
                            "name": "icon",
                            "widget": "image",
                            "required": false,
                            "default": "/images/facebook.svg"
                        }
                    ]
                },
                {
                    "label": "Instagram",
                    "name": "instagram",
                    "widget": "object",
                    "fields": [
                        {
                            "label": "Link",
                            "name": "link",
                            "widget": "string",
                            "pattern": [
                                "(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})",
                                "ONLY VALID URL ALLOWED!"
                            ]
                        },
                        {
                            "label": "Icon",
                            "name": "icon",
                            "widget": "image",
                            "required": false,
                            "default": "/images/instagram.svg"
                        }
                    ]
                },
                {
                    "label": "Twitter",
                    "name": "twitter",
                    "widget": "object",
                    "fields": [
                        {
                            "label": "Link",
                            "name": "link",
                            "widget": "string",
                            "pattern": [
                                "(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})",
                                "ONLY VALID URL ALLOWED!"
                            ]
                        },
                        {
                            "label": "Icon",
                            "name": "icon",
                            "widget": "image",
                            "required": false,
                            "default": "/images/twitter.svg"
                        }
                    ]
                },
                {
                    "label": "Github",
                    "name": "github",
                    "widget": "object",
                    "fields": [
                        {
                            "label": "Link",
                            "name": "link",
                            "widget": "string",
                            "pattern": [
                                "(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})",
                                "ONLY VALID URL ALLOWED!"
                            ]
                        },
                        {
                            "label": "Icon",
                            "name": "icon",
                            "widget": "image",
                            "required": false,
                            "default": "/images/github.svg"
                        }
                    ]
                },
                {
                    "label": "Youtube",
                    "name": "youtube",
                    "widget": "object",
                    "fields": [
                        {
                            "label": "Link",
                            "name": "link",
                            "widget": "string",
                            "pattern": [
                                "(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})",
                                "ONLY VALID URL ALLOWED!"
                            ]
                        },
                        {
                            "label": "Icon",
                            "name": "icon",
                            "widget": "image",
                            "required": false,
                            "default": "/images/youtube.svg"
                        }
                    ]
                },
                {
                    "label": "LinkedIn",
                    "name": "linkedin",
                    "widget": "object",
                    "fields": [
                        {
                            "label": "Link",
                            "name": "link",
                            "widget": "string",
                            "pattern": [
                                "(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})",
                                "ONLY VALID URL ALLOWED!"
                            ]
                        },
                        {
                            "label": "Icon",
                            "name": "icon",
                            "widget": "image",
                            "required": false,
                            "default": "/images/linkedin.svg"
                        }
                    ]
                }
            ]
        }
    ]
};
export default config;
