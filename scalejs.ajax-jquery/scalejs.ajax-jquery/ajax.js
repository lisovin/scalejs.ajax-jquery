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

    function get(url, data, options) {
        options = core.merge(options, {
            type: 'GET',
            data: data
        });

        return ajax(url, options);
    }

    function post(url, data, options) {
        var jsonString = core.json.toJson(data);
        options = core.merge(options, {
            type: 'POST',
            data: {
                json: jsonString
            }
        });

        return ajax(url, options);
    }

    return {
        post: post,
        get: get
    };
});
