/*global define,describe,expect,it,runs,waitsFor,console*/
/*jslint sloppy: true*/
/// <reference path="Scripts/jasmine.js"/>
define([
    'scalejs!core',
    'scalejs!application'
], function (core) {
    var ajax = core.ajax;

    describe('ajax', function () {
        it('is defined', function () {
            expect(ajax).toBeDefined();
        });

        it('`get` works', function () {
            var done = false,
                date = new Date().getTime().toString(),
                result;

            runs(function () {
                ajax.get('http://jsfiddle.net/echo/js/', {js: date}).subscribe(function (r) {
                    done = true;
                    result = r;
                    console.debug('ajax.get test result: ' + result);
                });
            });

            waitsFor(function () {
                return done;
            }, 2000);

            runs(function () {
                expect(result).toBeDefined();
                expect(result).toEqual(date);
            });
        });

        it('`post` works', function () {
            var done = false,
                date = new Date().getTime().toString(),
                result;

            runs(function () {
                ajax.post('http://jsfiddle.net/echo/json/', {json: date}).subscribe(function (r) {
                    done = true;
                    result = r;
                    console.debug('ajax.get test result: ' + result);
                });
            });

            waitsFor(function () {
                return done;
            }, 2000);

            runs(function () {
                expect(result).toBeDefined();
                expect(result.toString()).toEqual(date);
            });
        });
    });
});