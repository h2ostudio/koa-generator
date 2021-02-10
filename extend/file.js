"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.file = void 0;
var fs_1 = require("fs");
/**
 * 文件操作类
 * @description 更加语义化的简便文件操作。
 */
var file = /** @class */ (function () {
    function file() {
    }
    /**
     * 创建目录
     * @description 如果目录不存在，则自动创建目录，并返回结果
     * 如果目录存在，则返回 true
     *
     * @param {string} filePath 要操作（复制，剪切）的目录名（带文件名和后缀的完整目录）
     * @return {boolean} 操作状态
     */
    file.createPath = function (filePath) {
        // 获取完整目录（去除最后一位的文件字段）
        var dir = filePath.substring(0, filePath.lastIndexOf("/"));
        if (dir == "" || dir == null)
            dir = "./"; // 不写目录名 => 根目录
        // 文件夹不存在
        if (!fs_1.existsSync(dir)) {
            var actionNotice = fs_1.mkdirSync(dir, { recursive: true });
            return !!actionNotice;
        }
        else
            return true;
    };
    /**
     * 复制文件
     * @param {string} src 源文件地址
     * @param {string} dest 文件去向地址
     * @return {boolean} 操作状态
     */
    file.copy = function (src, dest) {
        if (!fs_1.existsSync(src)) {
            console.log("源文件不存在");
            return false;
        }
        // 复制操作
        if (file.createPath(dest)) {
            fs_1.copyFileSync(src, dest);
            return fs_1.existsSync(dest);
        }
        else
            return false;
    };
    /***
     * 文件写入（保存文件）
     * @param {string} filePath 文件去向地址
     * @param data 写入数据
     * @return {boolean} 操作状态
     */
    file.write = function (filePath, data) {
        if (data === void 0) { data = ""; }
        if (file.createPath(filePath)) {
            fs_1.writeFileSync(filePath, data);
            return fs_1.existsSync(filePath);
        }
        else
            return false;
    };
    return file;
}());
exports.file = file;
