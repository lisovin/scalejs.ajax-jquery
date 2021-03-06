
/*global define,console*/
define('scalejs.ajax-jquery/ajax',[
    'jQuery',
    'scalejs!core'
], function (
    jQuery,
    core
) {
    

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
                log.error('Error: "' + errorThrown + ': ' + textStatus + ' in response to ' + url + '"');
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
                success: success,
                error: error,
                completed: completed
            }, opts);

            jQuery.ajax(url, settings);

            return function () {};
        });
    }

    function get(url, data, options) {
        options = core.object.merge(options, {
            type: 'GET',
            data: data
        });

        return ajax(url, options);
    }

    function postMultipart(url, data, options) {
        options = core.object.merge(options, {
            type: 'POST',
            data: data
        });

        return ajax(url, options);
    }

    function postJson(url, data, options) {
        var jsonString = JSON.stringify(data);
        options = core.object.merge(options, {
            type: 'POST',
            data: jsonString,
            contentType: 'application/json',
            processData: false
        });

        return ajax(url, options);
    }

    function jsonpGet(url, data, options) {
        var params = jQuery.param(data);
        options = core.object.merge(options, {
            type: 'GET',
            dataType: 'jsonp'
        });

        console.error('url: ' + url + '?' + params);
        return ajax(url + '?' + params, undefined, options);
    }

    return {
        postJson: postJson,
        postMultipart: postMultipart,
        jsonpGet: jsonpGet,
        get: get
    };
});

/*global define*/
define('scalejs.ajax-jquery',[
    'scalejs!core',
    './scalejs.ajax-jquery/ajax'
], function (
    core,
    ajax
) {
    

    core.registerExtension({
        ajax: ajax
    });
});

