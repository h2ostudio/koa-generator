// colors-console 仅支持 CommonJS 导入
const cmd = require("colors-console");

/**
 * 命令行彩色输出；
 * 通过语义化方法，给命令行内容增加颜色。
 * @class lucky
 */
export class lucky {
  /**
   * 字体黄色
   * @param content {String} 要渲染的内容
   * @return {void}
   */
  static warning(content: any) {
    return cmd("yellow", content);
  }

  /**
   * 字体红色
   * @param content {String} 要渲染的内容
   * @return {void}
   */
  static danger(content: any) {
    return cmd("magenta", content);
  }

  /**
   * 字体青色
   * @param content {String} 要渲染的内容
   * @return {void}
   */
  static info(content: any) {
    return cmd("cyan", content);
  }

  /**
   * 字体灰色
   * @param content {String} 要渲染的内容
   * @return {void}
   */
  static second(content: any) {
    return cmd("grey", content);
  }

  /**
   * 字体白色
   * @param content {String} 要渲染的内容
   * @return {void}
   */
  static light(content: any) {
    return cmd("white", content);
  }

  /**
   * 字体蓝色
   * @param content {String} 要渲染的内容
   * @return {void}
   */
  static primary(content: any) {
    return cmd("blue", content);
  }

  /**
   * 字体绿色
   * @param content {String} 要渲染的内容
   * @return {void}
   */
  static success(content: any) {
    return cmd("green", content);
  }

  /**
   * 字体黑色
   * @param content {String} 要渲染的内容
   * @return {void}
   */
  static dark(content: any) {
    return cmd("black", content);
  }
}
