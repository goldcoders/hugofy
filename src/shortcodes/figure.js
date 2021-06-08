import CMS from 'netlify-cms-app';

CMS.registerEditorComponent({
    id: "figure",
    label: "Figure",
    fields: [{
            name: "title",
            label: "Figure Title",
            widget: "string"
        },
        {
            name: "src",
            label: "Figure SRC",
            widget: "image"
        },
    ],
    pattern: /{{< figure src="([\s\S]*)" title="([a-zA-Z0-9-_ ]+)" >}}/,
    fromBlock: function(match) {
        return {
            title: match[2],
            src: match[1],
        };
    },
    toBlock: function(obj) {
        return `{{< figure src="/${obj.src}" title="${obj.title}" >}}`;
    },
    toPreview: function(obj) {
        return `<figure><img src="/${obj.src}" alt="${obj.title}"><figcaption>${obj.title}</figcaption></figure>`;
    },
});
