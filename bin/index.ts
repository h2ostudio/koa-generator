#! node
import program from "inquirer";
import { file as fs } from "../extend/file";
import * as os from "os";
import ejs from "ejs";
import chalk from "chalk";
import { exec } from "child_process";
import { resolve } from "path";

// ------------------------------------------------
// cli结果：
let answers: { appName: string; pkgManager: number; author: string };

// npm项目包 => 绝对路径
const path: string = resolve(__dirname) + "/";
// 项目安装后 => 固定目录
const projectName = path.substring(0, path.lastIndexOf("/bin"));

// 项目安装后 => 模版目录（复制模版使用）
const tpl: string = `${projectName}/template/`;
// 脚本运行所在目录（模版去向使用）
const runPath: string = resolve(process.cwd()) + "/";

// ========================================================
// 1、CLI 交互
program
  .prompt([
    {
      name: "appName",
      message: chalk.cyan("🌈 App Name:"),
      type: "input",
      validate(input) {
        if (input.trim().length <= 0 || !input) return chalk.red("‼️  必填项");
        else return true;
      },
    },
    {
      name: "pkgManager",
      message: chalk.yellow("🥓 Package Manager:"),
      type: "list",
      choices: [
        { name: "Yarn", value: 0, checked: true },
        { name: "Npm", value: 1 },
      ],
    },
    {
      name: "author",
      message: chalk.green("🥤 Your Name:"),
      type: "input",
      default: os.userInfo().username,
    },
  ])
  .then(async answer => {
    answers = answer;

    // --------------------------------
    // 调用2
    await writing();
  });

// ========================================================
// 2、读写操作
async function writing() {
  console.log(chalk.blue("\r\n ---------------- WRITING... ----------------"));

  // Static 文件
  copyStatic([
    [`controller/index.ts`, `controller/index.ts`],
    [`extend/logger.ts`, `extend/logger.ts`],
    [`extend/lucky.ts`, `extend/lucky.ts`],
    [`route/route.ts`, `route/route.ts`],
    [`view/index.njk`, `view/index.njk`],
    [`tsconfig.json`, `tsconfig.json`],
    [`Dockerfile`, `Dockerfile`],
    [`yarn.lock`, `yarn.lock`],
    [`app.ts`, `app.ts`],
  ]);
  // template that uses the EJS engine
  await copyTemplate([
    [`docker-compose.yml`, `docker-compose.yml`],
    [`package.json`, `package.json`],
    [`LICENSE`, `LICENSE`],
  ]);

  // --------------------------------
  // 调用3
  installed();
}

// ------------------------------------------------
// Copy Static 文件
function copyStatic(files: string[][]) {
  files.forEach(file => {
    fs.copy(`${tpl}${file[0]}`, `${runPath}${answers.appName}/${file[1]}`);
    console.log(
      chalk.green("+") +
        ` ${chalk.grey(answers.appName + "/" + file[1])} ${chalk.green(
          "SUCCESS.👌"
        )}`
    );
  });
}

// Copy template that uses the EJS engine
// 使用EJS，解析模版，并将解析后的内容存入新文件中
function copyTemplate(files: string[][]) {
  files.forEach(async file => {
    let compileContent = await ejs.renderFile(`${tpl}${file[0]}`, answers);
    fs.write(`${runPath}${answers.appName}/${file[1]}`, compileContent);
    console.log(
      chalk.green("+") +
        ` ${chalk.grey(answers.appName + "/" + file[1])} ${chalk.green(
          "SUCCESS.👌"
        )}`
    );
  });
}
// ========================================================
// 3、依赖安装
function installed() {
  console.log(
    chalk.blue("\r\n ---------------- Installing... ----------------")
  );

  if (answers.pkgManager == 0) {
    exec(`cd ${answers.appName} && yarn install`, err => {
      console.log(chalk.green("SUCCESS.👌"));
    });
  } else {
    exec(`cd ${answers.appName} && npm install`, err => {
      console.log(chalk.green("SUCCESS.👌"));
    });
  }
}
