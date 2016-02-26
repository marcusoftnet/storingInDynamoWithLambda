/* global require, module */
var ApiBuilder = require("claudia-api-builder");
var api = new ApiBuilder();
var superb = require("superb");

module.exports = api;

api.get("/hello", function (request) {
	'use strict';
	var name = request.queryString.name;

	return "Hi everyone! Wanted you to know that " + name + " is " + superb();
});