/*global define,describe,expect,it*/
/*jslint sloppy: true*/
/// <reference path="../Scripts/jasmine.js"/>
define(['../js/scalejs.ajax-jquery'], function (extension) {
    describe('scalejs.ajax extension', function () {
        it('is defined', function () {
            expect(extension).toBeDefined();
        });
    });
});