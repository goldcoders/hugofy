import { CmsCollection } from 'netlify-cms-core';
import GapSizes from "../options/GapSizes";
import { DynamicHomeContent, HeroAngleImageOnRight, HeroAppWithScreenShot, HeroSimpleCentered, HeroSplitImage, HeroWithSignUpVideo } from '../templates';
import { CtaBranPanel, CtaSimpleCentered, CtaSimpleJustified, CtaSimpleStacked, CtaSplitWithImage } from '../templates/cta';
import { Featured3Col, FeaturedCenter2By2, FeaturedOffset2By2Grid } from '../templates/featured';
import { LogoSimple, LogosSplitGrid, LogosWithHeaderCentered } from '../templates/logos';
import { NewsletterCustomBg, NewsletterOnCard, NewsletterSimpleStacked } from '../templates/newsletter';
import { PricingSingle, PricingThreeTier, PricingTwoTier } from '../templates/pricing';
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
                       PricingSingle,
                       PricingTwoTier,
                       PricingThreeTier,
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
