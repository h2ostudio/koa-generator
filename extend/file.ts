import { copyFileSync, existsSync, mkdirSync, writeFileSync } from "fs";

/**
 * 文件操作类
 * @description 更加语义化的简便文件操作。
 */
class file {
  /**
   * 创建目录
   * @description 如果目录不存在，则自动创建目录，并返回结果
   * 如果目录存在，则返回 true
   *
   * @param {string} filePath 要操作（复制，剪切）的目录名（带文件名和后缀的完整目录）
   * @return {boolean} 操作状态
   */
  protected static createPath(filePath: string): boolean {
    // 获取完整目录（去除最后一位的文件字段）
    let dir = filePath.substring(0, filePath.lastIndexOf("/"));
    if (dir == "" || dir == null) dir = "./"; // 不写目录名 => 根目录

    // 文件夹不存在
    if (!existsSync(dir)) {
      let actionNotice = mkdirSync(dir, { recursive: true });
      return !!actionNotice;
    } else return true;
  }

  /**
   * 复制文件
   * @param {string} src 源文件地址
   * @param {string} dest 文件去向地址
   * @return {boolean} 操作状态
   */
  static copy(src: string, dest: string): boolean {
    if (!existsSync(src)) {
      console.log("源文件不存在");
      return false;
    }
    // 复制操作
    if (file.createPath(dest)) {
      copyFileSync(src, dest);
      return existsSync(dest);
    } else return false;
  }

  /***
   * 文件写入（保存文件）
   * @param {string} filePath 文件去向地址
   * @param data 写入数据
   * @return {boolean} 操作状态
   */
  static write(filePath: string, data: any = "") {
    if (file.createPath(filePath)) {
      writeFileSync(filePath, data);
      return existsSync(filePath);
    } else return false;
  }
}

export { file };
