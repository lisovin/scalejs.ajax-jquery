/// <reference path="../Scripts/require.js"/>
/// <reference path="../Scripts/jasmine.js"/>

/*global requirejs*/
requirejs({
    paths: {
        'scalejs' : '../Scripts/scalejs-0.1.3',
        'json2' : '../Scripts/json2',
        'jQuery'  : '../Scripts/jquery-1.8.3'
    },
    shim: {
        'json2': {
            exports: 'JSON'
        }
    }
}, [
    './scalejs.ajax.test',
    './json.test']);
