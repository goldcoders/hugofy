type FileType = {
    label: string;
    name: string;
    files:  FileEntry[];
}

enum Widgets {
    Boolean = "boolean",
    Code = "code",
    Date = "date",
    DateTime = "datetime",
    File = "file",
    Hidden = "hidden",
    Image = "image",
    List = "list",
    Map = "map",
    Markdown = "markdown",
    Number = "number",
    Object = "object",
    Relation = "relation",
    Select = "select",
    String = "string",
    Text = "text"
}

type numbertype = "int" | "float";
type BoolType = true | false;
interface MediaLibrary {
    media_library: {
        config: {
            multiple: boolean;
        }
    }
}

interface BaseField {
    label: string;
    name: string;
    widget: Widgets;
    required: BoolType;
}

interface BooleanField extends BaseField{
    widget: Widgets.Boolean;
    default: BoolType;
}

interface CodeFields extends BaseField {
    widget: Widgets.Code;
    default_language?: string;
    allow_language_selection?: BoolType;
    keys?: object; // defaults to { code: 'code', lang: 'lang' }
    output_code_only?: BoolType;
}

interface DateField extends BaseField {
   widget: Widgets.Date;
   default?: string;
   format?: string;
   date_format?: boolean|string;
   time_format?: boolean|string; // string here is a momentjs tokens
}

interface DateTimeField extends BaseField{
    widget: Widgets.DateTime;
    default?: string;
    format?: string;
    date_format?: boolean|string;
    time_format?: boolean|string; // string here is a momentjs tokens
}

interface FileField extends BaseField,MediaLibrary{
    widget: Widgets.File;
    default?: string;
}

interface HiddenField extends BaseField{
    widget: Widgets.Hidden;
    default?: string;
}

interface ImageField extends BaseField,MediaLibrary {
    widget: Widgets.Image;
    default?: string;
}

interface ListField extends BaseField{
    widget: Widgets.List;
    default?: [string];
    allow_add?: BoolType;
    field?: Field;
    fields?: Field[];
    collapse?: BoolType;
    minimize_collapse: BoolType;
}

interface MapField extends BaseField{
    widget: Widgets.Map;
}

interface MarkdownField extends BaseField{
    widget: Widgets.Markdown;
}

interface NumberField extends BaseField {
    widgets: Widgets.Number;
    default?: number;
    value_type?: numbertype;
    min?: number;
    max?: number;
    step?: number;
}

interface ObjectField extends BaseField {
    widget: Widgets.Object;
    fields: Field[]; // any
}

interface RelationField extends BaseField{
    widget: Widgets.Relation;
    collection: string;
    search_fields: Array<string>;
    value_field: string;
    display_fields: Array<string>;
    file?: string;
}

interface SelectField extends BaseField{
    widget: Widgets.Select; // up to here required
    options:  any[];// string, object , multiple, min/max
    multiple?: boolean; // used by sme
    default?: [string];
    min?: number;
    max?: number;
}

interface StringField extends BaseField{
    widget: Widgets.String;
}

interface TextField extends BaseField{
    widget: Widgets.Text;
}
type FileEntry = {
    label: string;
    name: string;
    file: string;
    fields: Field[];
}

interface Filter {
    field: string;
    value: boolean;
}

interface Editor {
    preview: boolean;
}

type Field = {
    label: string;
    name: string;
    widget: string; // Values From Widgets Enum
    fields?: SubField[];
}

type SubField = {
    label: string;
    name: string;
    widget: string;
}
type FolderType = {
    name: string;
    identifier_field: string;
    label: string;
    label_singular?: string;
    folder: string;
    filter?: Filter;
    create?: boolean;
    preview_path?: string;
    editor?: Editor;
    fields: Field[];
}
