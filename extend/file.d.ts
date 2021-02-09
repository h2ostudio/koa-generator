/**
 * 文件操作类
 * @description 更加语义化的简便文件操作。
 */
declare class file {
    /**
     * 创建目录
     * @description 如果目录不存在，则自动创建目录，并返回结果
     * 如果目录存在，则返回 true
     *
     * @param {string} filePath 要操作（复制，剪切）的目录名（带文件名和后缀的完整目录）
     * @return {boolean} 操作状态
     */
    protected static createPath(filePath: string): boolean;
    /**
     * 复制文件
     * @param {string} src 源文件地址
     * @param {string} dest 文件去向地址
     * @return {boolean} 操作状态
     */
    static copy(src: string, dest: string): boolean;
}
export { file };
