/*global define*/
define([
    './scalejs.ajax-jquery/json',
    './scalejs.ajax-jquery/ajax'
], function (
    json,
    ajax
) {
    'use strict';

    return {
        json: json,
        ajax: ajax
    };
});

