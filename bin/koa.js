"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Koa = void 0;
const cli_1 = require("../extend/cli");
const os = __importStar(require("os"));
const console_1 = require("../extend/console");
const child_process_1 = require("child_process");
const ora_1 = __importDefault(require("ora"));
const path_1 = require("path");
// Koa 命令行
class Koa extends cli_1.Cli {
    constructor() {
        super();
        this.command = ``;
    }
    // 初始化
    Initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(console_1.info(`\n\r---------------- 🎨 KOA CLI ----------------`));
        });
    }
    // 交互阶段
    Prompting() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.prompt([
                {
                    name: "appName",
                    message: console_1.readonly("🎉 App Name:"),
                    type: "text",
                    validate: (values) => values.length <= 0 ? `Input your project name, Please !` : true,
                },
                {
                    name: "pkgManager",
                    message: console_1.readonly("🎰 Package Manager:"),
                    type: "toggle",
                    active: "Yarn",
                    inactive: "Npm",
                    initial: "Yarn",
                },
                {
                    name: "author",
                    message: console_1.readonly("🥤 Author Name:"),
                    type: "text",
                    initial: os.userInfo().username,
                },
            ]);
        });
    }
    // 项目初始化
    Writing() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(console_1.info(`---------------- 🧩 WRITING ----------------`));
            const files = {
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
                if (notice)
                    console.log(console_1.success("+"), console_1.readonly(path_1.join(file)));
                else
                    console.log(console_1.error("x"), console_1.error(path_1.join(file)));
            });
            files.tpl.forEach(file => {
                let notice = this.easyTpl(file);
                if (notice)
                    console.log(console_1.success("+"), console_1.readonly(path_1.join(file)));
                else
                    console.log(console_1.error("x"), console_1.error(path_1.join(file)));
            });
        });
    }
    // 依赖安装
    Installing() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(console_1.info(`---------------- 🎰 INSTALL ----------------`));
            if (this.answers.pkgManager) {
                this.command += `cd ${this.answers.appName} && yarn install`;
            }
            else {
                this.command += `cd ${this.answers.appName} && npm install`;
            }
            yield this.easyInstall();
        });
    }
    // 安装
    easyInstall() {
        return __awaiter(this, void 0, void 0, function* () {
            let oraObj = ora_1.default();
            oraObj.start(console_1.readonly("Install..."));
            yield child_process_1.exec(this.command, (res, stdout, stderr) => {
                if (res == null) {
                    return oraObj.succeed(console_1.success("依赖安装完成...")).stop();
                }
                else {
                    return oraObj.fail(console_1.error("依赖安装失败，请手动安装")).stop();
                }
            });
        });
    }
}
exports.Koa = Koa;
