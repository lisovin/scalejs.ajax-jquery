/*global define*/
define([
    'scalejs!core',
    './scalejs.ajax-jquery/json',
    './scalejs.ajax-jquery/ajax'
], function (
    core,
    json,
    ajax
) {
    'use strict';

    core.registerExtension({
        json: json,
        ajax: ajax
    });
});

