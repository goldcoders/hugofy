import { CmsCollection } from 'netlify-cms-core';
import GapSizes from "../options/GapSizes";
import SizeOptions from "../options/SizeOptions";
import { DynamicHomeContent, HeroAngleImageOnRight, HeroAppWithScreenShot, HeroSimpleCentered, HeroSplitImage, HeroWithSignUpVideo } from '../templates';
import { CtaBranPanel, CtaSimpleCentered, CtaSimpleJustified, CtaSimpleStacked, CtaSplitWithImage } from '../templates/cta';
import { Featured3Col, FeaturedCenter2By2, FeaturedOffset2By2Grid } from '../templates/featured';

let home_page:CmsCollection= {
    "name": "home_page",
    "label": "Home Page Builder",
    "editor": {
        "preview": false
    },
    "files": [
        {
            "file": "/content/_index.md",
            "label": "Build Homepage Section By Section",
            "name": "home_index",
            "fields": [
                {
                    "label": "Title",
                    "name": "title",
                    "widget": "string"
                },
                {
                    "label": "Description",
                    "name": "description",
                    "widget": "string"
                },
                {
                    "label": "Feature Image",
                    "name": "featured_image",
                    "widget": "image"
                },
                {
                    "label": "Publish Date",
                    "name": "date",
                    "widget": "datetime"
                },
                {
                    "label": "Show Search",
                    "name": "showsearch",
                    "widget": "boolean",
                    "default": true
                },
                {
                    "label": "Show Cart",
                    "name": "showcart",
                    "widget": "boolean",
                    "default": true
                },
                {
                    "label": "Home Sections",
                    "name": "sections",
                    "widget": "list",
                    "label_singular": "Template",
                    "types": [
                       DynamicHomeContent, 
                       HeroSimpleCentered,
                       HeroSplitImage,
                       HeroAngleImageOnRight,
                       HeroAppWithScreenShot,
                       HeroWithSignUpVideo,
                       FeaturedCenter2By2,
                       FeaturedOffset2By2Grid,
                       Featured3Col,
                       CtaBranPanel,
                       CtaSimpleCentered,
                       CtaSimpleJustified,
                       CtaSimpleStacked,
                       CtaSplitWithImage, 
                        {
                            "label": "Testimonials Simple Centered",
                            "name": "testimonials_simple_centered",
                            "widget": "object",
                            "summary": "Testimonial/Simple Centered: {{fields.header}}",
                            "fields": [
                                {
                                    "label": "Testimonial",
                                    "name": "testimonial",
                                    "widget": "string",
                                    "default": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis"
                                },
                                {
                                    "label": "User Company Logo",
                                    "name": "image",
                                    "widget": "object",
                                    "fields": [
                                        {
                                            "label": "Image",
                                            "name": "image",
                                            "widget": "image",
                                            "default": "images/tuple-logo.svg"
                                        },
                                        {
                                            "label": "Image Alt",
                                            "name": "alt",
                                            "default": "Company Logo",
                                            "widget": "string"
                                        }
                                    ]
                                },
                                {
                                    "label": "Template",
                                    "name": "template",
                                    "widget": "hidden",
                                    "default": "templates/testimonials/simple-centered.html"
                                },
                                {
                                    "label": "User",
                                    "name": "user",
                                    "widget": "object",
                                    "fields": [
                                        {
                                            "label": "Name",
                                            "name": "name",
                                            "widget": "string",
                                            "default": "Juan Dela Cruz"
                                        },
                                        {
                                            "label": "Company/Work",
                                            "name": "company",
                                            "widget": "string",
                                            "default": "Chief Technical Officer"
                                        },
                                        {
                                            "label": "Profile Photo",
                                            "name": "image",
                                            "widget": "image",
                                            "default": "images/avatar.svg"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "label": "Testimonials Side by  Side",
                            "name": "testimonials_side_by_side",
                            "widget": "object",
                            "summary": "Testimonial/Side By Side",
                            "fields": [
                                {
                                    "label": "Background Color",
                                    "name": "bg",
                                    "widget": "object",
                                    "fields": [
                                        {
                                            "label": "Color",
                                            "name": "color",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "display_fields": [
                                                "colors.*.name"
                                            ],
                                            "search_fields": [
                                                "colors.*.name"
                                            ],
                                            "value_field": "colors.*.value",
                                            "default": "gray"
                                        },
                                        {
                                            "label": "Shade",
                                            "name": "shade",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "required": false,
                                            "default": "800",
                                            "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                            "display_fields": [
                                                "shades.*.name"
                                            ],
                                            "search_fields": [
                                                "shades.*.name"
                                            ],
                                            "value_field": "shades.*.value"
                                        }
                                    ]
                                },
                                {
                                    "label": "Template",
                                    "name": "template",
                                    "widget": "hidden",
                                    "default": "templates/testimonials/side-by-side.html"
                                },
                                {
                                    "label": "Left User Testimonial",
                                    "name": "left_testimonial",
                                    "widget": "string",
                                    "default": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis. Nemo expedita voluptas culpa sapiente alias molestiae."
                                },
                                {
                                    "label": "Left Company Logo",
                                    "name": "left_image",
                                    "widget": "object",
                                    "fields": [
                                        {
                                            "label": "Image",
                                            "name": "image",
                                            "widget": "image",
                                            "default": "images/tuple-logo.svg"
                                        },
                                        {
                                            "label": "Image Alt",
                                            "name": "alt",
                                            "default": "Company Logo",
                                            "widget": "string"
                                        }
                                    ]
                                },
                                {
                                    "label": "Left User Info",
                                    "name": "left_user",
                                    "widget": "object",
                                    "fields": [
                                        {
                                            "label": "Name",
                                            "name": "name",
                                            "widget": "string",
                                            "default": "Juan Dela Cruz"
                                        },
                                        {
                                            "label": "Company/Work",
                                            "name": "company",
                                            "widget": "string",
                                            "default": "CEO/Founder"
                                        },
                                        {
                                            "label": "Profile Photo",
                                            "name": "image",
                                            "widget": "image",
                                            "default": "images/avatar.svg"
                                        }
                                    ]
                                },
                                {
                                    "label": "Right User Testimonial",
                                    "name": "right_testimonial",
                                    "widget": "string",
                                    "default": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis. Nemo expedita voluptas culpa sapiente alias molestiae."
                                },
                                {
                                    "label": "Right Company Logo",
                                    "name": "right_image",
                                    "widget": "object",
                                    "fields": [
                                        {
                                            "label": "Image",
                                            "name": "image",
                                            "widget": "image",
                                            "default": "images/mirage-logo.svg"
                                        },
                                        {
                                            "label": "Image Alt",
                                            "name": "alt",
                                            "default": "Company Logo",
                                            "widget": "string"
                                        }
                                    ]
                                },
                                {
                                    "label": "Right User Info",
                                    "name": "right_user",
                                    "widget": "object",
                                    "fields": [
                                        {
                                            "label": "Name",
                                            "name": "name",
                                            "widget": "string",
                                            "default": "Juan Dela Cruz"
                                        },
                                        {
                                            "label": "Company/Work",
                                            "name": "company",
                                            "default": "CEO/Founder"
                                        },
                                        {
                                            "label": "Profile Photo",
                                            "name": "image",
                                            "widget": "image",
                                            "default": "images/avatar.svg"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "label": "Testimonials With Large Avatar",
                            "name": "testimonial_with_avatar",
                            "widget": "object",
                            "summary": "Testimonial/With Large Avatar",
                            "fields": [
                                {
                                    "label": "Template",
                                    "name": "template",
                                    "widget": "hidden",
                                    "default": "templates/testimonials/with-large-avatar.html"
                                },
                                {
                                    "label": "Large Avatar Position",
                                    "name": "position",
                                    "widget": "select",
                                    "options": [
                                        "left",
                                        "right"
                                    ],
                                    "default": "left"
                                },
                                {
                                    "label": "Testimonial",
                                    "name": "testimonial",
                                    "widget": "string",
                                    "default": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis."
                                },
                                {
                                    "label": "User",
                                    "name": "user",
                                    "widget": "object",
                                    "fields": [
                                        {
                                            "label": "Name",
                                            "name": "name",
                                            "widget": "string",
                                            "default": "Juan Dela Cruz"
                                        },
                                        {
                                            "label": "Company/Work",
                                            "name": "company",
                                            "widget": "string",
                                            "default": "CEO - My Company"
                                        },
                                        {
                                            "label": "Profile Photo",
                                            "name": "image",
                                            "widget": "image",
                                            "default": "images/avatar.svg"
                                        }
                                    ]
                                }
                            ]
                        },
{
                            "label": "Team Short Paragraph",
                            "name": "team_short",
                            "widget": "object",
                            "summary": "Team Short: {{fields.title}}",
                            "fields": [
                                {
                                    "label": "Template",
                                    "name": "template",
                                    "widget": "hidden",
                                    "default": "templates/teams/short.html"
                                },
                                {
                                    "label": "Title",
                                    "name": "title",
                                    "widget": "string",
                                    "default": "Meet Our Team"
                                },
                                {
                                    "label": "Subtitle",
                                    "name": "subtitle",
                                    "widget": "string",
                                    "default": "Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet lectus sit pretium egestas vel mattis neque."
                                },
                                {
                                    "label": "Name Text Color",
                                    "name": "name_text",
                                    "widget": "object",
                                    "fields": [
                                        {
                                            "label": "Color",
                                            "name": "color",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "display_fields": [
                                                "colors.*.name"
                                            ],
                                            "search_fields": [
                                                "colors.*.name"
                                            ],
                                            "value_field": "colors.*.value"
                                        },
                                        {
                                            "label": "Shade",
                                            "name": "shade",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "required": false,
                                            "default": "",
                                            "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                            "display_fields": [
                                                "shades.*.name"
                                            ],
                                            "search_fields": [
                                                "shades.*.name"
                                            ],
                                            "value_field": "shades.*.value"
                                        }
                                    ]
                                },
                                {
                                    "label": "Title Text Color",
                                    "name": "title_text",
                                    "widget": "object",
                                    "fields": [
                                        {
                                            "label": "Text Color",
                                            "name": "color",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "display_fields": [
                                                "colors.*.name"
                                            ],
                                            "search_fields": [
                                                "colors.*.name"
                                            ],
                                            "value_field": "colors.*.value"
                                        },
                                        {
                                            "label": "Text Shade",
                                            "name": "shade",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "required": false,
                                            "default": "",
                                            "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                            "display_fields": [
                                                "shades.*.name"
                                            ],
                                            "search_fields": [
                                                "shades.*.name"
                                            ],
                                            "value_field": "shades.*.value"
                                        }
                                    ]
                                },
                                {
                                    "label": "Role Text Color",
                                    "name": "role_text",
                                    "widget": "object",
                                    "fields": [
                                        {
                                            "label": "Text Color",
                                            "name": "color",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "display_fields": [
                                                "colors.*.name"
                                            ],
                                            "search_fields": [
                                                "colors.*.name"
                                            ],
                                            "value_field": "colors.*.value"
                                        },
                                        {
                                            "label": "Text Shade",
                                            "name": "shade",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "required": false,
                                            "default": "",
                                            "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                            "display_fields": [
                                                "shades.*.name"
                                            ],
                                            "search_fields": [
                                                "shades.*.name"
                                            ],
                                            "value_field": "shades.*.value"
                                        }
                                    ]
                                },
                                {
                                    "label": "Team Members",
                                    "name": "members",
                                    "required": false,
                                    "collapsed": true,
                                    "label_singular": "Member",
                                    "widget": "list",
                                    "summary": "{{fields.name}}",
                                    "fields": [
                                        {
                                            "label": "Full Name",
                                            "name": "name",
                                            "widget": "string",
                                            "required": false,
                                            "default": "Juan Dela Cruz"
                                        },
                                        {
                                            "label": "Role",
                                            "name": "role",
                                            "widget": "object",
                                            "fields": [
                                                {
                                                    "label": "Name",
                                                    "name": "name",
                                                    "widget": "string"
                                                }
                                            ]
                                        },
                                        {
                                            "label": "Description",
                                            "name": "description",
                                            "widget": "markdown",
                                        },
                                        {
                                            "label": "Profile Picture",
                                            "name": "image",
                                            "widget": "object",
                                            "fields": [
                                                {
                                                    "label": "Image",
                                                    "name": "url",
                                                    "widget": "image"
                                                },
                                                {
                                                    "label": "Alt",
                                                    "name": "name",
                                                    "widget": "string",
                                                    "required": false,
                                                    "default": "Team Member"
                                                },
                                            ]
                                        },
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
                                }
                            ]
                        },
                        {
                            "label": "Team Section",
                            "name": "team_dark",
                            "widget": "object",
                            "summary": "Team Section: {{fields.title}}",
                            "fields": [
                                {
                                    "label": "Template",
                                    "name": "template",
                                    "widget": "hidden",
                                    "default": "templates/teams/section.html"
                                },
                                {
                                    "label": "Title",
                                    "name": "title",
                                    "widget": "string",
                                    "default": "Meet Our Team"
                                },
                                {
                                    "label": "Subtitle",
                                    "name": "subtitle",
                                    "widget": "string",
                                    "default": "Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet lectus sit pretium egestas vel mattis neque."
                                },
                                {
                                    "label": "Background Color",
                                    "name": "bg",
                                    "widget": "object",
                                    "fields": [
                                        {
                                            "label": "Color",
                                            "name": "color",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "display_fields": [
                                                "colors.*.name"
                                            ],
                                            "search_fields": [
                                                "colors.*.name"
                                            ],
                                            "value_field": "colors.*.value"
                                        },
                                        {
                                            "label": "Shade",
                                            "name": "shade",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "required": false,
                                            "default": "",
                                            "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                            "display_fields": [
                                                "shades.*.name"
                                            ],
                                            "search_fields": [
                                                "shades.*.name"
                                            ],
                                            "value_field": "shades.*.value"
                                        }
                                    ]
                                },
                                {
                                    "label": "Card Background Color",
                                    "name": "card_bg",
                                    "widget": "object",
                                    "fields": [
                                        {
                                            "label": "Color",
                                            "name": "color",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "display_fields": [
                                                "colors.*.name"
                                            ],
                                            "search_fields": [
                                                "colors.*.name"
                                            ],
                                            "value_field": "colors.*.value"
                                        },
                                        {
                                            "label": "Shade",
                                            "name": "shade",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "required": false,
                                            "default": "",
                                            "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                            "display_fields": [
                                                "shades.*.name"
                                            ],
                                            "search_fields": [
                                                "shades.*.name"
                                            ],
                                            "value_field": "shades.*.value"
                                        }
                                    ]
                                },
                                {
                                    "label": "Name Text Color",
                                    "name": "name_text",
                                    "widget": "object",
                                    "fields": [
                                        {
                                            "label": "Color",
                                            "name": "color",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "display_fields": [
                                                "colors.*.name"
                                            ],
                                            "search_fields": [
                                                "colors.*.name"
                                            ],
                                            "value_field": "colors.*.value"
                                        },
                                        {
                                            "label": "Shade",
                                            "name": "shade",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "required": false,
                                            "default": "",
                                            "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                            "display_fields": [
                                                "shades.*.name"
                                            ],
                                            "search_fields": [
                                                "shades.*.name"
                                            ],
                                            "value_field": "shades.*.value"
                                        }
                                    ]
                                },
                                {
                                    "label": "Title Text Color",
                                    "name": "title_text",
                                    "widget": "object",
                                    "fields": [
                                        {
                                            "label": "Text Color",
                                            "name": "color",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "display_fields": [
                                                "colors.*.name"
                                            ],
                                            "search_fields": [
                                                "colors.*.name"
                                            ],
                                            "value_field": "colors.*.value"
                                        },
                                        {
                                            "label": "Text Shade",
                                            "name": "shade",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "required": false,
                                            "default": "",
                                            "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                            "display_fields": [
                                                "shades.*.name"
                                            ],
                                            "search_fields": [
                                                "shades.*.name"
                                            ],
                                            "value_field": "shades.*.value"
                                        }
                                    ]
                                },
                                {
                                    "label": "Role Text Color",
                                    "name": "role_text",
                                    "widget": "object",
                                    "fields": [
                                        {
                                            "label": "Text Color",
                                            "name": "color",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "display_fields": [
                                                "colors.*.name"
                                            ],
                                            "search_fields": [
                                                "colors.*.name"
                                            ],
                                            "value_field": "colors.*.value"
                                        },
                                        {
                                            "label": "Text Shade",
                                            "name": "shade",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "required": false,
                                            "default": "",
                                            "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                            "display_fields": [
                                                "shades.*.name"
                                            ],
                                            "search_fields": [
                                                "shades.*.name"
                                            ],
                                            "value_field": "shades.*.value"
                                        }
                                    ]
                                },
                                {
                                    "label": "Team Members",
                                    "name": "members",
                                    "required": false,
                                    "collapsed": true,
                                    "label_singular": "Member",
                                    "widget": "list",
                                    "summary": "{{fields.name}}",
                                    "fields": [
                                        {
                                            "label": "Full Name",
                                            "name": "name",
                                            "widget": "string",
                                            "required": false,
                                            "default": "Juan Dela Cruz"
                                        },
                                        {
                                            "label": "Role",
                                            "name": "role",
                                            "widget": "object",
                                            "fields": [
                                                {
                                                    "label": "Name",
                                                    "name": "name",
                                                    "widget": "string"
                                                }
                                            ]
                                        },
                                        {
                                            "label": "Profile Picture",
                                            "name": "image",
                                            "widget": "object",
                                            "fields": [
                                                {
                                                    "label": "Image",
                                                    "name": "url",
                                                    "widget": "image"
                                                },
                                                {
                                                    "label": "Alt",
                                                    "name": "name",
                                                    "widget": "string",
                                                    "required": false,
                                                    "default": "Team Member"
                                                },
                                            ]
                                        },
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
                                }
                            ]
                        },
                        {
                            "label": "Newsletter Simple Stacked",
                            "name": "newsletter_simple_stacked",
                            "widget": "object",
                            "summary": "Newsletter/Simple Stacked",
                            "fields": [
                                {
                                    "label": "Template",
                                    "name": "template",
                                    "widget": "hidden",
                                    "default": "templates/newsletter/simple-stacked.html"
                                },
                                {
                                    "label": "Header",
                                    "name": "header",
                                    "widget": "string"
                                },
                                {
                                    "label": "Subheader",
                                    "name": "subheader",
                                    "widget": "string"
                                },
                                {
                                    "label": "Newsletter Form",
                                    "name": "form",
                                    "widget": "object",
                                    "fields": [
                                        {
                                            "label": "Method",
                                            "name": "method",
                                            "widget": "select",
                                            "options": [
                                                "GET",
                                                "POST",
                                                "PUT",
                                                "DELETE"
                                            ],
                                            "default": "POST"
                                        },
                                        {
                                            "label": "Action",
                                            "name": "action",
                                            "widget": "string",
                                            "required": false,
                                            "default": "#",
                                            "pattern": [
                                                "((https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})|^#$)",
                                                "ONLY VALID URL ALLOWED!"
                                            ]
                                        },
                                        {
                                            "label": "Placeholder",
                                            "name": "placeholder",
                                            "widget": "string",
                                            "default": "Enter Your Email"
                                        },
                                        {
                                            "label": "Submit Button Text",
                                            "name": "submit",
                                            "widget": "string",
                                            "default": "Notify Me"
                                        },
                                        {
                                            "label": "Button Color",
                                            "name": "bg",
                                            "widget": "object",
                                            "fields": [
                                                {
                                                    "label": "Color",
                                                    "name": "color",
                                                    "widget": "relation",
                                                    "collection": "colors",
                                                    "file": "color_list",
                                                    "display_fields": [
                                                        "colors.*.name"
                                                    ],
                                                    "search_fields": [
                                                        "colors.*.name"
                                                    ],
                                                    "value_field": "colors.*.value"
                                                },
                                                {
                                                    "label": "Shade",
                                                    "name": "shade",
                                                    "widget": "relation",
                                                    "collection": "colors",
                                                    "file": "color_list",
                                                    "required": false,
                                                    "default": "",
                                                    "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                                    "display_fields": [
                                                        "shades.*.name"
                                                    ],
                                                    "search_fields": [
                                                        "shades.*.name"
                                                    ],
                                                    "value_field": "shades.*.value"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "label": "Newsletter On Card",
                            "name": "newsletter_on_card",
                            "widget": "object",
                            "summary": "Newsletter/On Card",
                            "fields": [
                                {
                                    "label": "Background Color",
                                    "name": "bg",
                                    "widget": "object",
                                    "fields": [
                                        {
                                            "label": "Color",
                                            "name": "color",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "display_fields": [
                                                "colors.*.name"
                                            ],
                                            "search_fields": [
                                                "colors.*.name"
                                            ],
                                            "value_field": "colors.*.value"
                                        },
                                        {
                                            "label": "Shade",
                                            "name": "shade",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "required": false,
                                            "default": "",
                                            "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                            "display_fields": [
                                                "shades.*.name"
                                            ],
                                            "search_fields": [
                                                "shades.*.name"
                                            ],
                                            "value_field": "shades.*.value"
                                        }
                                    ]
                                },
                                {
                                    "label": "Template",
                                    "name": "template",
                                    "widget": "hidden",
                                    "default": "templates/newsletter/on-brand-card.html"
                                },
                                {
                                    "label": "Header",
                                    "name": "header",
                                    "widget": "string"
                                },
                                {
                                    "label": "Description",
                                    "name": "description",
                                    "widget": "text"
                                },
                                {
                                    "label": "Newsletter Form",
                                    "name": "form",
                                    "widget": "object",
                                    "fields": [
                                        {
                                            "label": "Method",
                                            "name": "method",
                                            "widget": "select",
                                            "options": [
                                                "GET",
                                                "POST",
                                                "PUT",
                                                "DELETE"
                                            ],
                                            "default": "POST"
                                        },
                                        {
                                            "label": "Action",
                                            "name": "action",
                                            "widget": "string",
                                            "required": false,
                                            "default": "#",
                                            "pattern": [
                                                "((https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})|^#$)",
                                                "ONLY VALID URL ALLOWED!"
                                            ]
                                        },
                                        {
                                            "label": "Placeholder",
                                            "name": "placeholder",
                                            "widget": "string",
                                            "default": "Enter Your Email"
                                        },
                                        {
                                            "label": "Submit Button Text",
                                            "name": "submit",
                                            "widget": "string",
                                            "default": "Notify Me"
                                        },
                                        {
                                            "label": "Button Color",
                                            "name": "bg",
                                            "widget": "object",
                                            "fields": [
                                                {
                                                    "label": "Color",
                                                    "name": "color",
                                                    "widget": "relation",
                                                    "collection": "colors",
                                                    "file": "color_list",
                                                    "display_fields": [
                                                        "colors.*.name"
                                                    ],
                                                    "search_fields": [
                                                        "colors.*.name"
                                                    ],
                                                    "value_field": "colors.*.value"
                                                },
                                                {
                                                    "label": "Shade",
                                                    "name": "shade",
                                                    "widget": "relation",
                                                    "collection": "colors",
                                                    "file": "color_list",
                                                    "required": false,
                                                    "default": "",
                                                    "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                                    "display_fields": [
                                                        "shades.*.name"
                                                    ],
                                                    "search_fields": [
                                                        "shades.*.name"
                                                    ],
                                                    "value_field": "shades.*.value"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "label": "Privacy Section",
                                    "name": "privacy",
                                    "widget": "object",
                                    "fields": [
                                        {
                                            "label": "Explain Policy",
                                            "name": "explain",
                                            "widget": "string",
                                            "default": "We care about the protection of your data. Read our"
                                        },
                                        {
                                            "label": "Policy URL",
                                            "name": "url",
                                            "widget": "string",
                                            "default": "/privacy"
                                        },
                                        {
                                            "label": "Policy Name",
                                            "name": "policy",
                                            "widget": "string",
                                            "default": "Privacy Policy"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "label": "Newsletter Custom Background",
                            "name": "newsletter_custom_bg",
                            "widget": "object",
                            "summary": "Newsletter/Custom Background Color",
                            "fields": [
                                {
                                    "label": "Background Color",
                                    "name": "bg",
                                    "widget": "object",
                                    "fields": [
                                        {
                                            "label": "Color",
                                            "name": "color",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "display_fields": [
                                                "colors.*.name"
                                            ],
                                            "search_fields": [
                                                "colors.*.name"
                                            ],
                                            "value_field": "colors.*.value"
                                        },
                                        {
                                            "label": "Shade",
                                            "name": "shade",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "required": false,
                                            "default": "",
                                            "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                            "display_fields": [
                                                "shades.*.name"
                                            ],
                                            "search_fields": [
                                                "shades.*.name"
                                            ],
                                            "value_field": "shades.*.value"
                                        }
                                    ]
                                },
                                {
                                    "label": "Template",
                                    "name": "template",
                                    "widget": "hidden",
                                    "default": "templates/newsletter/custom-bg.html"
                                },
                                {
                                    "label": "Header",
                                    "name": "header",
                                    "widget": "string"
                                },
                                {
                                    "label": "Description",
                                    "name": "description",
                                    "widget": "text"
                                },
                                {
                                    "label": "Newsletter Form",
                                    "name": "form",
                                    "widget": "object",
                                    "fields": [
                                        {
                                            "label": "Method",
                                            "name": "method",
                                            "widget": "select",
                                            "options": [
                                                "GET",
                                                "POST",
                                                "PUT",
                                                "DELETE"
                                            ],
                                            "default": "POST"
                                        },
                                        {
                                            "label": "Action",
                                            "name": "action",
                                            "widget": "string",
                                            "required": false,
                                            "default": "#",
                                            "pattern": [
                                                "((https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})|^#$)",
                                                "ONLY VALID URL ALLOWED!"
                                            ]
                                        },
                                        {
                                            "label": "Placeholder",
                                            "name": "placeholder",
                                            "widget": "string",
                                            "default": "Enter Your Email"
                                        },
                                        {
                                            "label": "Submit Button Text",
                                            "name": "submit",
                                            "widget": "string",
                                            "default": "Notify Me"
                                        },
                                        {
                                            "label": "Button Color",
                                            "name": "bg",
                                            "widget": "object",
                                            "fields": [
                                                {
                                                    "label": "Color",
                                                    "name": "color",
                                                    "widget": "relation",
                                                    "collection": "colors",
                                                    "file": "color_list",
                                                    "display_fields": [
                                                        "colors.*.name"
                                                    ],
                                                    "search_fields": [
                                                        "colors.*.name"
                                                    ],
                                                    "value_field": "colors.*.value"
                                                },
                                                {
                                                    "label": "Shade",
                                                    "name": "shade",
                                                    "widget": "relation",
                                                    "collection": "colors",
                                                    "file": "color_list",
                                                    "required": false,
                                                    "default": "",
                                                    "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                                    "display_fields": [
                                                        "shades.*.name"
                                                    ],
                                                    "search_fields": [
                                                        "shades.*.name"
                                                    ],
                                                    "value_field": "shades.*.value"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "label": "Privacy Section",
                                    "name": "privacy",
                                    "widget": "object",
                                    "fields": [
                                        {
                                            "label": "Explain Policy",
                                            "name": "explain",
                                            "widget": "string",
                                            "default": "We care about the protection of your data. Read our"
                                        },
                                        {
                                            "label": "Policy URL",
                                            "name": "url",
                                            "widget": "string",
                                            "default": "/privacy"
                                        },
                                        {
                                            "label": "Policy Name",
                                            "name": "policy",
                                            "widget": "string",
                                            "default": "Privacy Policy"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "label": "Logos With Header Centered",
                            "name": "logos_with_header",
                            "widget": "object",
                            "summary": "Logos/With Header: {{fields.header}}",
                            "fields": [
                                {
                                    "label": "Template",
                                    "name": "template",
                                    "widget": "hidden",
                                    "default": "templates/logos/with-header.html"
                                },
                                {
                                    "label": "Header",
                                    "name": "header",
                                    "widget": "string"
                                },
                                {
                                    "label": "Backgroud Color",
                                    "name": "bg",
                                    "widget": "object",
                                    "fields": [
                                        {
                                            "label": "Color",
                                            "name": "color",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "display_fields": [
                                                "colors.*.name"
                                            ],
                                            "search_fields": [
                                                "colors.*.name"
                                            ],
                                            "value_field": "colors.*.value",
                                            "default": "gray"
                                        },
                                        {
                                            "label": "Shade",
                                            "name": "shade",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "required": false,
                                            "default": "50",
                                            "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                            "display_fields": [
                                                "shades.*.name"
                                            ],
                                            "search_fields": [
                                                "shades.*.name"
                                            ],
                                            "value_field": "shades.*.value"
                                        }
                                    ]
                                },
                                {
                                    "label": "Logo Background Color",
                                    "name": "logobg",
                                    "widget": "object",
                                    "fields": [
                                        {
                                            "label": "Color",
                                            "name": "color",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "display_fields": [
                                                "colors.*.name"
                                            ],
                                            "search_fields": [
                                                "colors.*.name"
                                            ],
                                            "value_field": "colors.*.value",
                                            "default": "blue"
                                        },
                                        {
                                            "label": "Shade",
                                            "name": "shade",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "required": false,
                                            "default": "50",
                                            "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                            "display_fields": [
                                                "shades.*.name"
                                            ],
                                            "search_fields": [
                                                "shades.*.name"
                                            ],
                                            "value_field": "shades.*.value"
                                        }
                                    ]
                                },
                                {
                                    "label": "Logos",
                                    "name": "logos",
                                    "widget": "object",
                                    "required": false,
                                    "fields": [
                                        {
                                            "label": "Column Gaps",
                                            "name": "gaps",
                                            "widget": "select",
                                            "options": GapSizes,
                                            "default": "0.5"
                                        },
                                        {
                                            "label": "Column on Desktop",
                                            "name": "colLG",
                                            "widget": "number",
                                            "default": 6
                                        },
                                        {
                                            "label": "Column on Tablets",
                                            "name": "colMD",
                                            "widget": "number",
                                            "default": 6
                                        },
                                        {
                                            "label": "Column on Mobile",
                                            "name": "col",
                                            "widget": "number",
                                            "default": 2
                                        },
                                        {
                                            "label": "Image Height",
                                            "name": "height",
                                            "widget": "number",
                                            "default": 12
                                        },
                                        {
                                            "label": "Images",
                                            "name": "images",
                                            "widget": "list",
                                            "hint": "Upload 6 Images If You Dont Want to Configure Span and Column",
                                            "fields": [
                                                {
                                                    "label": "Image",
                                                    "name": "url",
                                                    "widget": "image"
                                                },
                                                {
                                                    "label": "Image ALT",
                                                    "name": "alt",
                                                    "widget": "string",
                                                    "default": "logo item"
                                                },
                                                {
                                                    "label": "Desktop Span",
                                                    "name": "spanLG",
                                                    "widget": "number",
                                                    "default": 2
                                                },
                                                {
                                                    "label": "Tablet Span",
                                                    "name": "spanMD",
                                                    "widget": "number",
                                                    "default": 2
                                                },
                                                {
                                                    "label": "Mobile Span",
                                                    "name": "span",
                                                    "widget": "number",
                                                    "default": 1
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "label": "Logos Simple",
                            "name": "logos_simple",
                            "widget": "object",
                            "summary": "Logos/Simple",
                            "fields": [
                                {
                                    "label": "Template",
                                    "name": "template",
                                    "widget": "hidden",
                                    "default": "templates/logos/simple.html"
                                },
                                {
                                    "label": "Backgroud Color",
                                    "name": "bg",
                                    "widget": "object",
                                    "fields": [
                                        {
                                            "label": "Color",
                                            "name": "color",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "display_fields": [
                                                "colors.*.name"
                                            ],
                                            "search_fields": [
                                                "colors.*.name"
                                            ],
                                            "value_field": "colors.*.value",
                                            "default": "gray"
                                        },
                                        {
                                            "label": "Shade",
                                            "name": "shade",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "required": false,
                                            "default": "50",
                                            "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                            "display_fields": [
                                                "shades.*.name"
                                            ],
                                            "search_fields": [
                                                "shades.*.name"
                                            ],
                                            "value_field": "shades.*.value"
                                        }
                                    ]
                                },
                                {
                                    "label": "Logos",
                                    "name": "logos",
                                    "widget": "object",
                                    "required": false,
                                    "fields": [
                                        {
                                            "label": "Column Gaps",
                                            "name": "gaps",
                                            "widget": "select",
                                            "options": GapSizes,
                                            "default": "8"
                                        },
                                        {
                                            "label": "Column on Desktop",
                                            "name": "colLG",
                                            "widget": "number",
                                            "default": 6
                                        },
                                        {
                                            "label": "Column on Tablets",
                                            "name": "colMD",
                                            "widget": "number",
                                            "default": 6
                                        },
                                        {
                                            "label": "Column on Mobile",
                                            "name": "col",
                                            "widget": "number",
                                            "default": 2
                                        },
                                        {
                                            "label": "Image Height",
                                            "name": "height",
                                            "widget": "number",
                                            "default": 12
                                        },
                                        {
                                            "label": "Images",
                                            "name": "images",
                                            "widget": "list",
                                            "hint": "Upload 6 Images If You Dont Want to Configure Span and Column",
                                            "fields": [
                                                {
                                                    "label": "Image",
                                                    "name": "url",
                                                    "widget": "image"
                                                },
                                                {
                                                    "label": "Image ALT",
                                                    "name": "alt",
                                                    "widget": "string",
                                                    "default": "logo item"
                                                },
                                                {
                                                    "label": "Desktop Span",
                                                    "name": "spanLG",
                                                    "widget": "number",
                                                    "default": 2
                                                },
                                                {
                                                    "label": "Tablet Span",
                                                    "name": "spanMD",
                                                    "widget": "number",
                                                    "default": 2
                                                },
                                                {
                                                    "label": "Mobile Span",
                                                    "name": "span",
                                                    "widget": "number",
                                                    "default": 1
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "label": "Logos Split Grid",
                            "name": "logos_split_grid",
                            "widget": "object",
                            "summary": "Logos/Split Grid: {{fields.position}}",
                            "fields": [
                                {
                                    "label": "Template",
                                    "name": "template",
                                    "widget": "hidden",
                                    "default": "templates/logos/split-grid.html"
                                },
                                {
                                    "label": "Position",
                                    "name": "position",
                                    "widget": "select",
                                    "options": [
                                        "right",
                                        "left"
                                    ],
                                    "hint": "Logos Position in Grid"
                                },
                                {
                                    "label": "Header",
                                    "name": "header",
                                    "widget": "string"
                                },
                                {
                                    "label": "Description",
                                    "name": "description",
                                    "widget": "text"
                                },
                                {
                                    "label": "Backgroud Color",
                                    "name": "bg",
                                    "widget": "object",
                                    "fields": [
                                        {
                                            "label": "Color",
                                            "name": "color",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "display_fields": [
                                                "colors.*.name"
                                            ],
                                            "search_fields": [
                                                "colors.*.name"
                                            ],
                                            "value_field": "colors.*.value",
                                            "default": "gray"
                                        },
                                        {
                                            "label": "Shade",
                                            "name": "shade",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "required": false,
                                            "default": "50",
                                            "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                            "display_fields": [
                                                "shades.*.name"
                                            ],
                                            "search_fields": [
                                                "shades.*.name"
                                            ],
                                            "value_field": "shades.*.value"
                                        }
                                    ]
                                },
                                {
                                    "label": "Logo Background Color",
                                    "name": "logobg",
                                    "widget": "object",
                                    "fields": [
                                        {
                                            "label": "Color",
                                            "name": "color",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "display_fields": [
                                                "colors.*.name"
                                            ],
                                            "search_fields": [
                                                "colors.*.name"
                                            ],
                                            "value_field": "colors.*.value",
                                            "default": "blue"
                                        },
                                        {
                                            "label": "Shade",
                                            "name": "shade",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "required": false,
                                            "default": "50",
                                            "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                            "display_fields": [
                                                "shades.*.name"
                                            ],
                                            "search_fields": [
                                                "shades.*.name"
                                            ],
                                            "value_field": "shades.*.value"
                                        }
                                    ]
                                },
                                {
                                    "label": "CTA Buttons",
                                    "name": "buttons",
                                    "widget": "list",
                                    "fields": [
                                        {
                                            "label": "URL",
                                            "name": "url",
                                            "widget": "string"
                                        },
                                        {
                                            "label": "Text",
                                            "name": "cta",
                                            "widget": "string",
                                            "default": "Click Here"
                                        },
                                        {
                                            "label": "Background Color",
                                            "name": "bg",
                                            "widget": "object",
                                            "fields": [
                                                {
                                                    "label": "Color",
                                                    "name": "color",
                                                    "widget": "relation",
                                                    "collection": "colors",
                                                    "file": "color_list",
                                                    "display_fields": [
                                                        "colors.*.name"
                                                    ],
                                                    "search_fields": [
                                                        "colors.*.name"
                                                    ],
                                                    "value_field": "colors.*.value",
                                                    "default": "primary-darker"
                                                },
                                                {
                                                    "label": "Shade",
                                                    "name": "shade",
                                                    "widget": "relation",
                                                    "collection": "colors",
                                                    "file": "color_list",
                                                    "required": false,
                                                    "default": "",
                                                    "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                                    "display_fields": [
                                                        "shades.*.name"
                                                    ],
                                                    "search_fields": [
                                                        "shades.*.name"
                                                    ],
                                                    "value_field": "shades.*.value"
                                                }
                                            ]
                                        },
                                        {
                                            "label": "Text Color",
                                            "name": "text",
                                            "widget": "object",
                                            "fields": [
                                                {
                                                    "label": "Color",
                                                    "name": "color",
                                                    "widget": "relation",
                                                    "collection": "colors",
                                                    "file": "color_list",
                                                    "display_fields": [
                                                        "colors.*.name"
                                                    ],
                                                    "search_fields": [
                                                        "colors.*.name"
                                                    ],
                                                    "value_field": "colors.*.value",
                                                    "default": "white"
                                                },
                                                {
                                                    "label": "Shade",
                                                    "name": "shade",
                                                    "widget": "relation",
                                                    "collection": "colors",
                                                    "file": "color_list",
                                                    "required": false,
                                                    "default": "",
                                                    "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                                    "display_fields": [
                                                        "shades.*.name"
                                                    ],
                                                    "search_fields": [
                                                        "shades.*.name"
                                                    ],
                                                    "value_field": "shades.*.value"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "label": "Logos",
                                    "name": "logos",
                                    "widget": "object",
                                    "required": false,
                                    "fields": [
                                        {
                                            "label": "Column Gaps",
                                            "name": "gaps",
                                            "widget": "select",
                                            "options": GapSizes,
                                            "default": "0.5"
                                        },
                                        {
                                            "label": "Column on Desktop",
                                            "name": "colLG",
                                            "widget": "number",
                                            "default": 6,
                                            "required": false
                                        },
                                        {
                                            "label": "Column on Tablets",
                                            "name": "colMD",
                                            "widget": "number",
                                            "default": 6,
                                            "required": false
                                        },
                                        {
                                            "label": "Column on Mobile",
                                            "name": "col",
                                            "widget": "number",
                                            "default": 2,
                                            "required": false
                                        },
                                        {
                                            "label": "Image Height",
                                            "name": "height",
                                            "widget": "select",
                                            "options": SizeOptions,
                                            "default": "24"
                                        },
                                        {
                                            "label": "Images",
                                            "name": "images",
                                            "widget": "list",
                                            "hint": "Upload 6 Images If You Dont Want to Configure Span and Column",
                                            "fields": [
                                                {
                                                    "label": "Image",
                                                    "name": "url",
                                                    "widget": "image"
                                                },
                                                {
                                                    "label": "Image ALT",
                                                    "name": "alt",
                                                    "widget": "string",
                                                    "default": "logo item"
                                                },
                                                {
                                                    "label": "Desktop Span",
                                                    "name": "spanLG",
                                                    "widget": "number",
                                                    "default": 2
                                                },
                                                {
                                                    "label": "Tablet Span",
                                                    "name": "spanMD",
                                                    "widget": "number",
                                                    "default": 2
                                                },
                                                {
                                                    "label": "Mobile Span",
                                                    "name": "span",
                                                    "widget": "number",
                                                    "default": 1
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "label": "Pricing Single",
                            "name": "pricing_single",
                            "widget": "object",
                            "summary": "Pricing/Single: {{fields.title}}",
                            "fields": [
                                {
                                    "label": "Template",
                                    "name": "template",
                                    "widget": "hidden",
                                    "default": "templates/pricing/single.html"
                                },
                                {
                                    "label": "Title",
                                    "name": "title",
                                    "widget": "string",
                                    "default": "Simple no-tricks pricing"
                                },
                                {
                                    "label": "Subtitle",
                                    "name": "subtitle",
                                    "widget": "string",
                                    "default": "If you're not satisfied, contact us within the first 14 days and we'll send you a full refund."
                                },
                                {
                                    "label": "Header",
                                    "name": "header",
                                    "widget": "string",
                                    "default": "Lifetime Membership"
                                },
                                {
                                    "label": "Description",
                                    "name": "description",
                                    "widget": "text",
                                    "default": "Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda."
                                },
                                {
                                    "label": "Upper Background Color",
                                    "name": "upperbg",
                                    "widget": "object",
                                    "fields": [
                                        {
                                            "label": "Color",
                                            "name": "color",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "display_fields": [
                                                "colors.*.name"
                                            ],
                                            "search_fields": [
                                                "colors.*.name"
                                            ],
                                            "value_field": "colors.*.value",
                                            "default": "gray"
                                        },
                                        {
                                            "label": "Shade",
                                            "name": "shade",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "required": false,
                                            "default": "50",
                                            "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                            "display_fields": [
                                                "shades.*.name"
                                            ],
                                            "search_fields": [
                                                "shades.*.name"
                                            ],
                                            "value_field": "shades.*.value"
                                        }
                                    ]
                                },
                                {
                                    "label": "Lower Background Color",
                                    "name": "lowerbg",
                                    "widget": "object",
                                    "fields": [
                                        {
                                            "label": "Color",
                                            "name": "color",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "display_fields": [
                                                "colors.*.name"
                                            ],
                                            "search_fields": [
                                                "colors.*.name"
                                            ],
                                            "value_field": "colors.*.value",
                                            "default": "white"
                                        },
                                        {
                                            "label": "Shade",
                                            "name": "shade",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "required": false,
                                            "default": "",
                                            "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                            "display_fields": [
                                                "shades.*.name"
                                            ],
                                            "search_fields": [
                                                "shades.*.name"
                                            ],
                                            "value_field": "shades.*.value"
                                        }
                                    ]
                                },
                                {
                                    "label": "Inclusion Text",
                                    "name": "inclusion",
                                    "widget": "string",
                                    "default": "WHAT'S INCLUDED"
                                },
                                {
                                    "label": "Inclusion List",
                                    "name": "list",
                                    "widget": "list",
                                    "field": {
                                        "label": "Included",
                                        "name": "text",
                                        "widget": "string"
                                    },
                                    "default": [
                                        "Private forum access",
                                        "Member resources",
                                        "Entry to annual conference",
                                        "Official member t-shirt"
                                    ]
                                },
                                {
                                    "label": "Pricing",
                                    "name": "price",
                                    "widget": "object",
                                    "fields": [
                                        {
                                            "label": "Tag",
                                            "name": "tag",
                                            "widget": "string",
                                            "required": false,
                                            "default": "Pay Once Use it Forever"
                                        },
                                        {
                                            "label": "Amount",
                                            "name": "amount",
                                            "widget": "number",
                                            "default": "349"
                                        },
                                        {
                                            "label": "Currency Symbol",
                                            "name": "currency",
                                            "widget": "object",
                                            "fields": [
                                                {
                                                    "label": "Symbol",
                                                    "name": "symbol",
                                                    "widget": "string",
                                                    "default": "‚Ç±"
                                                },
                                                {
                                                    "label": "Name",
                                                    "name": "name",
                                                    "widget": "string",
                                                    "default": "PHP"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "label": "CTA Buttons",
                                    "name": "cta",
                                    "widget": "object",
                                    "fields": [
                                        {
                                            "label": "URL",
                                            "name": "url",
                                            "widget": "string",
                                            "default": "#"
                                        },
                                        {
                                            "label": "Text",
                                            "name": "text",
                                            "widget": "string",
                                            "default": "Get Access"
                                        },
                                        {
                                            "label": "Button Color",
                                            "name": "bg",
                                            "widget": "object",
                                            "fields": [
                                                {
                                                    "label": "Color",
                                                    "name": "color",
                                                    "widget": "relation",
                                                    "collection": "colors",
                                                    "file": "color_list",
                                                    "display_fields": [
                                                        "colors.*.name"
                                                    ],
                                                    "search_fields": [
                                                        "colors.*.name"
                                                    ],
                                                    "value_field": "colors.*.value",
                                                    "default": "primary-darker"
                                                },
                                                {
                                                    "label": "Shade",
                                                    "name": "shade",
                                                    "widget": "relation",
                                                    "collection": "colors",
                                                    "file": "color_list",
                                                    "required": false,
                                                    "default": "",
                                                    "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                                    "display_fields": [
                                                        "shades.*.name"
                                                    ],
                                                    "search_fields": [
                                                        "shades.*.name"
                                                    ],
                                                    "value_field": "shades.*.value"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "label": "Policy",
                                    "name": "policy",
                                    "widget": "object",
                                    "fields": [
                                        {
                                            "label": "Message",
                                            "name": "message",
                                            "widget": "string",
                                            "required": false,
                                            "default": "Learn about our membership policy"
                                        },
                                        {
                                            "label": "URL",
                                            "name": "url",
                                            "widget": "string",
                                            "default": "#"
                                        }
                                    ]
                                },
                                {
                                    "label": "Downloadables",
                                    "name": "file",
                                    "widget": "object",
                                    "fields": [
                                        {
                                            "label": "Text",
                                            "name": "text",
                                            "widget": "string",
                                            "required": false,
                                            "default": "Get a Free Sample"
                                        },
                                        {
                                            "label": "URL",
                                            "name": "url",
                                            "widget": "file",
                                            "required": false,
                                            "default": "#"
                                        },
                                        {
                                            "label": "Download Size",
                                            "name": "size",
                                            "widget": "string",
                                            "required": false,
                                            "default": "20 MB"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "label": "Pricing Three Tier",
                            "name": "pricing_three_tier",
                            "widget": "object",
                            "summary": "Pricing/Three Tier: {{fields.title}}",
                            "fields": [
                                {
                                    "label": "Template",
                                    "name": "template",
                                    "widget": "hidden",
                                    "default": "templates/pricing/three-tier.html"
                                },
                                {
                                    "label": "Brand Title",
                                    "name": "brand_title",
                                    "widget": "string",
                                    "default": "PRICING"
                                },
                                {
                                    "label": "Title",
                                    "name": "title",
                                    "widget": "string",
                                    "default": "The right price for you, whoever you are"
                                },
                                {
                                    "label": "Description",
                                    "name": "description",
                                    "widget": "text",
                                    "default": "Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda."
                                },
                                {
                                    "label": "Upper Background Color",
                                    "name": "upperbg",
                                    "widget": "object",
                                    "fields": [
                                        {
                                            "label": "Color",
                                            "name": "color",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "display_fields": [
                                                "colors.*.name"
                                            ],
                                            "search_fields": [
                                                "colors.*.name"
                                            ],
                                            "value_field": "colors.*.value",
                                            "default": "gray"
                                        },
                                        {
                                            "label": "Shade",
                                            "name": "shade",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "required": false,
                                            "default": "900",
                                            "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                            "display_fields": [
                                                "shades.*.name"
                                            ],
                                            "search_fields": [
                                                "shades.*.name"
                                            ],
                                            "value_field": "shades.*.value"
                                        }
                                    ]
                                },
                                {
                                    "label": "Lower Background Color",
                                    "name": "lowerbg",
                                    "widget": "object",
                                    "fields": [
                                        {
                                            "label": "Color",
                                            "name": "color",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "display_fields": [
                                                "colors.*.name"
                                            ],
                                            "search_fields": [
                                                "colors.*.name"
                                            ],
                                            "value_field": "colors.*.value",
                                            "default": "gray"
                                        },
                                        {
                                            "label": "Shade",
                                            "name": "shade",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "required": false,
                                            "default": "50",
                                            "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                            "display_fields": [
                                                "shades.*.name"
                                            ],
                                            "search_fields": [
                                                "shades.*.name"
                                            ],
                                            "value_field": "shades.*.value"
                                        }
                                    ]
                                },
                                {
                                    "label": "Featured Color",
                                    "name": "featured",
                                    "widget": "object",
                                    "hint": "Featured Tier is Tier #2,It is At the Centered Highlighted",
                                    "fields": [
                                        {
                                            "label": "Color",
                                            "name": "color",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "display_fields": [
                                                "colors.*.name"
                                            ],
                                            "search_fields": [
                                                "colors.*.name"
                                            ],
                                            "value_field": "colors.*.value",
                                            "default": "brand"
                                        },
                                        {
                                            "label": "Shade",
                                            "name": "shade",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "required": false,
                                            "default": "",
                                            "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                            "display_fields": [
                                                "shades.*.name"
                                            ],
                                            "search_fields": [
                                                "shades.*.name"
                                            ],
                                            "value_field": "shades.*.value"
                                        }
                                    ]
                                },
                                {
                                    "label": "Tiers",
                                    "name": "tiers",
                                    "widget": "list",
                                    "hint": "NOTE: Only the First 3 Tier Will Be Rendered, Tier #2 is The Featured Tier",
                                    "fields": [
                                        {
                                            "label": "Name",
                                            "name": "name",
                                            "widget": "string"
                                        },
                                        {
                                            "label": "Currency",
                                            "name": "currency",
                                            "widget": "string",
                                            "default": "‚Ç±"
                                        },
                                        {
                                            "label": "Amount",
                                            "name": "amount",
                                            "widget": "number",
                                            "default": "349"
                                        },
                                        {
                                            "label": "Per",
                                            "name": "per_unit",
                                            "widget": "string",
                                            "default": "month"
                                        },
                                        {
                                            "label": "CTA Buttons",
                                            "name": "button",
                                            "widget": "object",
                                            "fields": [
                                                {
                                                    "label": "URL",
                                                    "name": "url",
                                                    "widget": "string",
                                                    "default": "#"
                                                },
                                                {
                                                    "label": "Text",
                                                    "name": "cta",
                                                    "widget": "string",
                                                    "default": "Start Your Trial"
                                                }
                                            ]
                                        },
                                        {
                                            "label": "Features",
                                            "name": "features",
                                            "widget": "list",
                                            "field": {
                                                "label": "Feature",
                                                "name": "feature",
                                                "widget": "string"
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "label": "Pricing Two Tier",
                            "name": "pricing_two_tier",
                            "widget": "object",
                            "summary": "Pricing/Two Tier: {{fields.title}}",
                            "fields": [
                                {
                                    "label": "Template",
                                    "name": "template",
                                    "widget": "hidden",
                                    "default": "templates/pricing/two-tier.html"
                                },
                                {
                                    "label": "Brand Title",
                                    "name": "brand_title",
                                    "widget": "string",
                                    "default": "PRICING"
                                },
                                {
                                    "label": "Title",
                                    "name": "title",
                                    "widget": "string",
                                    "default": "The right price for you, whoever you are"
                                },
                                {
                                    "label": "Description",
                                    "name": "description",
                                    "widget": "text",
                                    "default": "Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda."
                                },
                                {
                                    "label": "Upper Background Color",
                                    "name": "upperbg",
                                    "widget": "object",
                                    "fields": [
                                        {
                                            "label": "Color",
                                            "name": "color",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "display_fields": [
                                                "colors.*.name"
                                            ],
                                            "search_fields": [
                                                "colors.*.name"
                                            ],
                                            "value_field": "colors.*.value",
                                            "default": "gray"
                                        },
                                        {
                                            "label": "Shade",
                                            "name": "shade",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "required": false,
                                            "default": "900",
                                            "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                            "display_fields": [
                                                "shades.*.name"
                                            ],
                                            "search_fields": [
                                                "shades.*.name"
                                            ],
                                            "value_field": "shades.*.value"
                                        }
                                    ]
                                },
                                {
                                    "label": "Lower Background Color",
                                    "name": "lowerbg",
                                    "widget": "object",
                                    "fields": [
                                        {
                                            "label": "Color",
                                            "name": "color",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "display_fields": [
                                                "colors.*.name"
                                            ],
                                            "search_fields": [
                                                "colors.*.name"
                                            ],
                                            "value_field": "colors.*.value",
                                            "default": "gray"
                                        },
                                        {
                                            "label": "Shade",
                                            "name": "shade",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "required": false,
                                            "default": "50",
                                            "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                            "display_fields": [
                                                "shades.*.name"
                                            ],
                                            "search_fields": [
                                                "shades.*.name"
                                            ],
                                            "value_field": "shades.*.value"
                                        }
                                    ]
                                },
                                {
                                    "label": "Featured Color",
                                    "name": "featured",
                                    "widget": "object",
                                    "fields": [
                                        {
                                            "label": "Color",
                                            "name": "color",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "display_fields": [
                                                "colors.*.name"
                                            ],
                                            "search_fields": [
                                                "colors.*.name"
                                            ],
                                            "value_field": "colors.*.value",
                                            "default": "brand"
                                        },
                                        {
                                            "label": "Shade",
                                            "name": "shade",
                                            "widget": "relation",
                                            "collection": "colors",
                                            "file": "color_list",
                                            "required": false,
                                            "default": "",
                                            "hint": "themable colors have no shade e.g. primary, secondary , accent, etc. and neutral color such as black, white, and transparent.",
                                            "display_fields": [
                                                "shades.*.name"
                                            ],
                                            "search_fields": [
                                                "shades.*.name"
                                            ],
                                            "value_field": "shades.*.value"
                                        }
                                    ]
                                },
                                {
                                    "label": "Tiers",
                                    "name": "tiers",
                                    "widget": "list",
                                    "hint": "NOTE: Only the First 2 Tier Will Be Rendered",
                                    "fields": [
                                        {
                                            "label": "Name",
                                            "name": "name",
                                            "widget": "string"
                                        },
                                        {
                                            "label": "Currency",
                                            "name": "currency",
                                            "widget": "string",
                                            "default": "‚Ç±"
                                        },
                                        {
                                            "label": "Amount",
                                            "name": "amount",
                                            "widget": "number",
                                            "default": "349"
                                        },
                                        {
                                            "label": "Per",
                                            "name": "per_unit",
                                            "widget": "string",
                                            "default": "mo"
                                        },
                                        {
                                            "label": "Description",
                                            "name": "description",
                                            "widget": "text"
                                        },
                                        {
                                            "label": "CTA Buttons",
                                            "name": "button",
                                            "widget": "object",
                                            "fields": [
                                                {
                                                    "label": "URL",
                                                    "name": "url",
                                                    "widget": "string",
                                                    "default": "#"
                                                },
                                                {
                                                    "label": "Text",
                                                    "name": "cta",
                                                    "widget": "string",
                                                    "default": "Get Started"
                                                }
                                            ]
                                        },
                                        {
                                            "label": "Features",
                                            "name": "features",
                                            "widget": "list",
                                            "field": {
                                                "label": "Feature",
                                                "name": "feature",
                                                "widget": "string"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "label": "Extra Tier",
                                    "name": "extra",
                                    "widget": "object",
                                    "fields": [
                                        {
                                            "label": "title",
                                            "name": "title",
                                            "widget": "string",
                                            "default": "DISCOUNTED"
                                        },
                                        {
                                            "label": "description",
                                            "name": "description",
                                            "widget": "string",
                                            "default": "Get full access to all of standard license features for solo projects that make less than $20k gross revenue for"
                                        },
                                        {
                                            "label": "Price",
                                            "name": "amount",
                                            "widget": "number",
                                            "default": "499"
                                        },
                                        {
                                            "label": "Currency",
                                            "name": "currency",
                                            "widget": "string",
                                            "default": "‚Ç±"
                                        },
                                        {
                                            "label": "Call To Action",
                                            "name": "cta",
                                            "widget": "string",
                                            "default": "Buy Discounted License"
                                        },
                                        {
                                            "label": "URL",
                                            "name": "url",
                                            "widget": "string",
                                            "default": "#"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "label": "Contact Cards",
                            "name": "contacts_cards",
                            "widget": "object",
                            "summary": "Contact/Cards: {{fields.title}}",
                            "fields": [
                                {
                                    "label": "Template",
                                    "name": "template",
                                    "widget": "hidden",
                                    "default": "templates/contacts/cards.html"
                                },
                                {
                                    "label": "Team Name",
                                    "name": "title",
                                    "widget": "string",
                                    "hint": "Group name or Team Name",
                                    "required": false
                                },
                                {
                                    "label": "Description",
                                    "name": "description",
                                    "widget": "text",
                                    "hint": "Give Brief Intro , Describing These Group",
                                    "required": false
                                },
                                {
                                    "label": "Column Gaps",
                                    "name": "gap",
                                    "widget": "select",
                                    "options": GapSizes,
                                    "default": "8"
                                },
                                {
                                    "label": "Column on Desktop",
                                    "name": "colLG",
                                    "widget": "number",
                                    "default": 6
                                },
                                {
                                    "label": "Column on Tablets",
                                    "name": "colMD",
                                    "widget": "number",
                                    "default": 6
                                },
                                {
                                    "label": "Column on Mobile",
                                    "name": "col",
                                    "widget": "number",
                                    "default": 2
                                },
                                {
                                    "label": "Contacts",
                                    "name": "contacts",
                                    "widget": "list",
                                    "summary": "{{fields.name}}",
                                    "hint": "Default Settings is Perfect for 3 Contact, You can Customize Column and Span if You Have More or Less Contacts",
                                    "fields": [
                                        {
                                            "label": "Avatar",
                                            "name": "image",
                                            "widget": "object",
                                            "fields": [
                                                {
                                                    "label": "Image",
                                                    "name": "url",
                                                    "widget": "image",
                                                    "default": "/images/avatar.svg"
                                                },
                                                {
                                                    "label": "Image Alt",
                                                    "name": "alt",
                                                    "widget": "string",
                                                    "default": "contact"
                                                }
                                            ]
                                        },
                                        {
                                            "label": "Name",
                                            "name": "name",
                                            "widget": "string",
                                            "default": "Juan Dela Cruz"
                                        },
                                        {
                                            "label": "Work",
                                            "name": "work",
                                            "widget": "string",
                                            "default": "Chief Technical Officer"
                                        },
                                        {
                                            "label": "Role",
                                            "name": "role",
                                            "widget": "string",
                                            "default": "admin"
                                        },
                                        {
                                            "label": "Email",
                                            "name": "email",
                                            "widget": "string",
                                            "default": "juandelacruz@gmail.com"
                                        },
                                        {
                                            "label": "Mobile No",
                                            "name": "mobile",
                                            "widget": "string",
                                            "default": "+6391912345678"
                                        },
                                        {
                                            "label": "Desktop Span",
                                            "name": "spanLG",
                                            "widget": "number",
                                            "default": 2
                                        },
                                        {
                                            "label": "Tablet Span",
                                            "name": "spanMD",
                                            "widget": "number",
                                            "default": 2
                                        },
                                        {
                                            "label": "Mobile Span",
                                            "name": "span",
                                            "widget": "number",
                                            "default": 1
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
export { home_page };
