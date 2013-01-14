/*global define*/
define([
    'jQuery',
    'scalejs!core'
], function (
    jQuery,
    core
) {
    'use strict';

    function ajax(url, opts) {
        var observable = core.reactive.Observable,
            merge = core.object.merge,
            log = core.log;

        return observable.create(function (observer) {
            /*jslint unparam: true*/
            function success(data, textStatus, jqXhr) {
                observer.onNext(data);
            }
            /*jslint unparam: false*/

            /*jslint unparam: true*/
            function error(jqXhr, textStatus, errorThrown) {
                log.error('Error: "' + errorThrown + ': ' + textStatus + ' in response to GET to ' + url + '"');
                observer.onError({
                    error: errorThrown,
                    status: textStatus
                });
            }

            function completed() {
                observer.onCompleted();
            }
            /*jslint unparam: false*/

            var settings = merge({
                type: 'GET',
                /*headers: {
                    'Accept': 'application/json'
                },*/
                success: success,
                error: error,
                completed: completed
            }, opts);

            jQuery.ajax(url, settings);

            return function () {};
        });
    }

    function get(url, data) {
        return ajax(url, {
            type: 'GET',
            data: data
        });
    }

    function post(url, data) {
        var jsonString = core.json.toJson(data);

        return ajax(url, {
            type: 'POST',
            data: {json: jsonString}
        });
    }

    return {
        post: post,
        get: get
    };
});
