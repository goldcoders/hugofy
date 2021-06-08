import { CmsCollection } from 'netlify-cms-core';
import GapSizes from "../options/GapSizes";
import { DynamicHomeContent, HeroAngleImageOnRight, HeroAppWithScreenShot, HeroSimpleCentered, HeroSplitImage, HeroWithSignUpVideo } from '../templates';
import { CtaBranPanel, CtaSimpleCentered, CtaSimpleJustified, CtaSimpleStacked, CtaSplitWithImage } from '../templates/cta';
import { Featured3Col, FeaturedCenter2By2, FeaturedOffset2By2Grid } from '../templates/featured';
import { LogoSimple, LogosSplitGrid, LogosWithHeaderCentered } from '../templates/logos';
import { NewsletterCustomBg, NewsletterOnCard, NewsletterSimpleStacked } from '../templates/newsletter';
import { TeamSection, TeamShortParagraph } from '../templates/team';
import { TestimonialSideBySide, TestimonialSimpleCentered, TesttimonialWithLargeAvatar } from '../templates/testimonial';

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
                       TestimonialSimpleCentered,
                       TestimonialSideBySide,
                       TesttimonialWithLargeAvatar,
                       TeamShortParagraph,
                       TeamSection,
                       NewsletterSimpleStacked,
                       NewsletterOnCard,
                       NewsletterCustomBg,
                       LogosWithHeaderCentered,
                       LogoSimple,
                       LogosSplitGrid,
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
