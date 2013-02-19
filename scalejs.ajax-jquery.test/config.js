var require = {
    "baseUrl":  ".",
    "paths":  {
        "es5-shim":  "Scripts/es5-shim",
        "jasmine":  "Scripts/jasmine",
        "jasmine-html":  "Scripts/jasmine-html",
        "jQuery":  "Scripts/jquery-1.9.0",
        "json2":  "Scripts/json2",
        "rx":  "Scripts/rx",
        "rx.binding":  "Scripts/rx.binding",
        "rx.time":  "Scripts/rx.time",
        "scalejs":  "Scripts/scalejs-0.2.6.1",
        "scalejs.ajax-jquery":  "Scripts/scalejs.ajax-jquery-0.2.0",
        "scalejs.reactive":  "Scripts/scalejs.reactive-2.0.20921"
    },
    "scalejs":  {
        "extensions":  [
            "scalejs.ajax-jquery",
            "scalejs.reactive"
        ]
    },
    "shim":  {
        "jasmine":  {
            "exports":  "jasmine"
        },
        "jasmine-html":  {
            "deps":  [
                "jasmine"
            ]
        },
        "jQuery":  {
            "exports":  "jQuery"
        },
        "json2":  {
            "exports":  "JSON"
        }
    }
};
