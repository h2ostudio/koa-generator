"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lucky = void 0;
// colors-console 仅支持 CommonJS 导入
const cmd = require("colors-console");
/**
 * 命令行彩色输出；
 * 通过语义化方法，给命令行内容增加颜色。
 * @class lucky
 */
class lucky {
    /**
     * 字体黄色
     * @param content {String} 要渲染的内容
     * @return {void}
     */
    static warning(content) {
        return cmd("yellow", content);
    }
    /**
     * 字体红色
     * @param content {String} 要渲染的内容
     * @return {void}
     */
    static danger(content) {
        return cmd("magenta", content);
    }
    /**
     * 字体青色
     * @param content {String} 要渲染的内容
     * @return {void}
     */
    static info(content) {
        return cmd("cyan", content);
    }
    /**
     * 字体灰色
     * @param content {String} 要渲染的内容
     * @return {void}
     */
    static second(content) {
        return cmd("grey", content);
    }
    /**
     * 字体白色
     * @param content {String} 要渲染的内容
     * @return {void}
     */
    static light(content) {
        return cmd("white", content);
    }
    /**
     * 字体蓝色
     * @param content {String} 要渲染的内容
     * @return {void}
     */
    static primary(content) {
        return cmd("blue", content);
    }
    /**
     * 字体绿色
     * @param content {String} 要渲染的内容
     * @return {void}
     */
    static success(content) {
        return cmd("green", content);
    }
    /**
     * 字体黑色
     * @param content {String} 要渲染的内容
     * @return {void}
     */
    static dark(content) {
        return cmd("black", content);
    }
}
exports.lucky = lucky;
