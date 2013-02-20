/*global define*/
define([
    'scalejs!core',
    './scalejs.ajax-jquery/ajax'
], function (
    core,
    ajax
) {
    'use strict';

    core.registerExtension({
        ajax: ajax
    });
});

