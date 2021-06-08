import CMS from 'netlify-cms-app';

CMS.registerEventListener({
        name: "preSave",
        handler: ({ entry }) => {
          switch (entry.get("collection")) {
            case "blog":
              if (entry.get("slug")) {
                const slug = entry
                  .getIn(["data", "title"], "")
                  .toLowerCase()
                  .replace(/[']/g, "")
                  .replace(/[.]/g, "-")
                  .replace(/[\s]/g, "-");
                return entry.get("data").set("slug", slug);
              } else {
                const slug = entry
                  .getIn(["data", "title"], "")
                  .toLowerCase()
                  .replace(/[']/g, "")
                  .replace(/[.]/g, "-")
                  .replace(/[\s]/g, "-");
                return entry.get("data").set("slug", slug);
              }
            case "products":
              if (entry.get("slug")) {
                const slug = entry
                  .getIn(["data", "title"], "")
                  .toLowerCase()
                  .replace(/[']/g, "")
                  .replace(/[.]/g, "-")
                  .replace(/[\s]/g, "-");
                return entry.get("data").set("slug", slug);
              } else {
                const slug = entry
                  .getIn(["data", "title"], "")
                  .toLowerCase()
                  .replace(/[']/g, "")
                  .replace(/[.]/g, "-")
                  .replace(/[\s]/g, "-");
                return entry.get("data").set("slug", slug);
              }
            case "pages":
              if (entry.get("slug")) {
                const slug = entry
                  .getIn(["data", "title"], "")
                  .toLowerCase()
                  .replace(/[']/g, "")
                  .replace(/[.]/g, "-")
                  .replace(/[\s]/g, "-");
                return entry.get("data").set("slug", slug);
              } else {
                const slug = entry
                  .getIn(["data", "title"], "")
                  .toLowerCase()
                  .replace(/[']/g, "")
                  .replace(/[.]/g, "-")
                  .replace(/[\s]/g, "-");
                return entry.get("data").set("slug", slug);
              }
            default:
              console.log("Skip Modifying Slug")
          }
        },
      });
