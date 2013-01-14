/*global require*/
/// <reference path="Scripts/require.js"/>
/// <reference path="Scripts/jasmine.js"/>
require({
    "paths":  {
        "rx":  "Scripts/rx",
        "rx.binding":  "Scripts/rx.binding",
        "rx.time":  "Scripts/rx.time",
        "jQuery": "Scripts/jQuery-1.8.3",
        "json2": "Scripts/json2",
        "scalejs":  "Scripts/scalejs-0.1.5",
        "scalejs.ajax-jquery":  "../scalejs.ajax-jquery/build/scalejs.ajax-jquery-0.1.0",
        "scalejs.reactive":  "Scripts/scalejs.reactive-0.1.0"
    },
    "scalejs":  {
        "extensions":  [
            "scalejs.reactive",
            "scalejs.ajax-jquery"
        ]
    },
    "shim": {
        "jQuery" : {
            "exports" : "jQuery"
        },
        "json2": {
            "exports" : "JSON"
        }
    }
}, ['tests/all.tests']);
