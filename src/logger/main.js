"use strict";
exports.__esModule = true;
exports.error = exports.warn = exports.success = exports.info = void 0;
var dayjs = require("dayjs");
var c = require("colorette");
var line;
function info(text) {
    return console.log(c.cyan('mitsuha: ')
        + c.dim(dayjs().format('HH:mm:ss:SSS'))
        + c.blue(' INFO    ')
        + '> '
        + text);
}
exports.info = info;
function success(text) {
    return console.log(c.cyan('mitsuha: ')
        + c.dim(dayjs().format('HH:mm:ss:SSS'))
        + c.green(' SUCCESS ')
        + '> '
        + text);
}
exports.success = success;
function warn(text) {
    return console.log(c.cyan('mitsuha: ')
        + c.dim(dayjs().format('HH:mm:ss:SSS'))
        + c.yellow(' WARNING ')
        + '> '
        + text);
}
exports.warn = warn;
function error(text) {
    return console.log(c.cyan('mitsuha: ')
        + c.bgRed(dayjs().format('HH:mm:ss:SSS'))
        + c.red(' ERROR   ')
        + '> '
        + text);
}
exports.error = error;
