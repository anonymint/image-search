'use stricts';

var path = process.cwd();
var Controller = require(path + '/app/controller/imageSearchController.js');
var imageSearchController = new Controller();
var assert = require('assert');

//assert that 
assert.deepEqual({},imageSearchController.search(undefined));
assert.deepEqual({},imageSearchController.search(''));

console.log("All tests pass!");