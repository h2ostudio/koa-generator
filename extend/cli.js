"use strict";
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
exports.Cli = void 0;
const prompts_1 = __importDefault(require("prompts"));
const file_1 = require("./file");
const ejs_1 = __importDefault(require("ejs"));
const path_1 = require("path");
class Cli {
    /**
     * @constructor
     * @protected
     */
    constructor() {
        this.RUN = path_1.join(path_1.resolve(process.cwd()), path_1.sep);
        this.answers = null;
        this.dir = path_1.join(path_1.resolve(__dirname));
        this.PATH = this.dir.substring(0, this.dir.lastIndexOf("extend"));
        this.TPL = path_1.join(this.PATH, "template/");
        this.run().then().catch(err => console.log(err));
    }
    /**
     * 自动指令中枢：
     * @description 自动调用 CLI 过程中的5大阶段
     */
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.Initialize();
            yield this.Prompting();
            yield this.Writing();
            yield this.Installing();
            yield this.Ending();
        });
    }
    Initialize() {
    }
    Prompting() {
    }
    Writing() {
    }
    Installing() {
    }
    Ending() {
    }
    // TODO: Copy Files
    // PATH: 当前项目绝对路径
    easyCopy(file) {
        // @ts-ignore
        return file_1.file.copy(path_1.join(this.TPL, file), path_1.join(this.RUN, this.answers.appName, file));
    }
    easyTpl(file) {
        return __awaiter(this, void 0, void 0, function* () {
            // @ts-ignore
            const [compileContent] = yield Promise.all([ejs_1.default.renderFile(path_1.join(this.TPL, file), this.answers)]);
            // @ts-ignore
            return file_1.file.write(path_1.join(this.RUN, this.answers.appName, file), compileContent);
        });
    }
    // 提问题，并传回问题答案
    prompt(question) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.answers = yield prompts_1.default(question);
        });
    }
}
exports.Cli = Cli;
