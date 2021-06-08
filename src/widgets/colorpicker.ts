import CMS from 'netlify-cms-app';
import { ColorControl, ColorPreview } from "netlify-cms-widget-colorpicker";

CMS.registerWidget("color", ColorControl, ColorPreview);
