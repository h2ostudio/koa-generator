import { lucky } from "./lucky";
import { Context, Next } from "koa";

/**
 * 命令行日志：
 * 输出应用的当前请求信息
 * @param app {Context | string}
 * @param next {Next | function}
 * @return {Promise<void>}
 */
async function logger(app: Context, next: Next): Promise<void> {
  // @ts-ignore
  let start: Date = new Date();

  await next();

  // @ts-ignore
  let ms: Date = new Date() - start;
  console.log(`${setMethodImage(app)} ${lucky.info(app.method)} ${lucky.second(app.url)} ${lucky.primary('['+ ms + "ms]")}`);
}

/**
 * 设置请求的 头标图片：
 * 通过 Application 的请求方式，设置不同的命令行请求头标识。
 * @param app {Application.Context}
 * @return methodImage {String}
 */
function setMethodImage(app: Context) {
  let method = app.method;
  let methodImage: string;

  switch (method) {
    case "GET":
      methodImage = "=>";
      break;
    case "POST":
      methodImage = "<= ";
      break;
    default:
      methodImage = "<=>";
      break;
  }
  return methodImage;
}

// 导出
export { logger };
