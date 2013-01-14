/*global define,console,document*/
define([
    'scalejs!core',
    'json2'
], function (
    core,
    json2
) {
    'use strict';

    var has = core.object.has;

    function toJson(obj) {
        return json2.stringify(obj);
    }

    function fromJson(json) {
        if (!has(json) || json === "") {
            return {};
        }

        return json2.parse(json);
    }

    return {
        toJson: toJson,
        fromJson: fromJson
    };
});
