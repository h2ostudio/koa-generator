import { Cli } from "../extend/cli";
import * as os from "os";
import { error, info, readonly, success } from "../extend/console";
import { exec } from "child_process";
import ora from "ora";
import { join } from "path";

// Koa 命令行
export class Koa extends Cli {
  // @ts-ignore
  protected answers: {
    appName: string;
    pkgManager: boolean;
  };
  private command: string = ``;

  constructor() {
    super();
  }

  // 初始化
  async Initialize() {
    console.log(info(`\n\r---------------- 🎨 KOA CLI ----------------`));
  }

  // 交互阶段
  async Prompting() {
    await this.prompt([
      {
        name: "appName",
        message: readonly("🎉App Name:"),
        type: "text",
        validate: (values) => values.length <= 0 ? `Input your project name, Please !` : true,
      },
      {
        name: "pkgManager",
        message: readonly("🎰Package Manager:"),
        type: "toggle",
        active: "Yarn",
        inactive: "Npm",
        initial: "Yarn",
      },
      {
        name: "author",
        message: readonly("🥤Author Name:"),
        type: "text",
        initial: os.userInfo().username,
      },
    ]);
  }

  // 项目初始化
  async Writing() {
    console.log(info(`---------------- 🧩 WRITING ----------------`));
    const files: {
      static: string[];
      tpl: string[]
    } = {
      static: [
        `controller/index.ts`,
        `extend/logger.ts`,
        `extend/lucky.ts`,
        `route/route.ts`,
        `view/index.njk`,
        `tsconfig.json`,
        `Dockerfile`,
        `app.ts`,
      ],
      tpl: [
        `docker-compose.yml`,
        `package.json`,
        `LICENSE`,
      ],
    };

    files.static.forEach(file => {
      let notice = this.easyCopy(file);
      if (notice) console.log(success("+"), readonly(join(file)));
      else console.log(error("x"), error(join(file)));
    });

    files.tpl.forEach(file => {
      let notice = this.easyTpl(file);
      if (notice) console.log(success("+"), readonly(join(file)));
      else console.log(error("x"), error(join(file)));
    });

  }

  // 依赖安装
  async Installing() {
    console.log(info(`---------------- 🎰 INSTALL ----------------`));
    if (this.answers.pkgManager) {
      this.command += `cd ${this.answers.appName} && yarn install`;
    } else {
      this.command += `cd ${this.answers.appName} && npm install`;
    }
    await this.easyInstall();
  }

  // 安装
  async easyInstall() {
    let oraObj: ora.Ora = ora();
    oraObj.start(readonly("Install..."));
    await exec(this.command, (res, stdout, stderr) => {
      if (res == null) {
        return oraObj.succeed(success("依赖安装完成...")).stop();
      } else {
        return oraObj.fail(error("依赖安装失败，请手动安装")).stop();
      }
    });
  }
}