"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readonly = exports.success = exports.error = exports.warning = exports.info = exports.log = void 0;
const chalk_1 = __importDefault(require("chalk"));
function log(information) {
    return chalk_1.default.white(information);
}
exports.log = log;
function warning(information) {
    return chalk_1.default.yellow(information);
}
exports.warning = warning;
function error(information) {
    return chalk_1.default.red(information);
}
exports.error = error;
function success(information) {
    return chalk_1.default.cyan(information);
}
exports.success = success;
function info(information) {
    return chalk_1.default.blue(information);
}
exports.info = info;
function readonly(information) {
    return chalk_1.default.grey(information);
}
exports.readonly = readonly;
