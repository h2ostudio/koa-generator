#! node
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = __importDefault(require("inquirer"));
var file_1 = require("../extend/file");
var os = __importStar(require("os"));
var ejs_1 = __importDefault(require("ejs"));
var chalk_1 = __importDefault(require("chalk"));
var child_process_1 = require("child_process");
var path_1 = require("path");
// ------------------------------------------------
// cli结果：
var answers;
// npm项目包 => 绝对路径
var path = path_1.resolve(__dirname) + "/";
// 项目安装后 => 固定目录
var projectName = path.substring(0, path.lastIndexOf("/bin"));
// 项目安装后 => 模版目录（复制模版使用）
var tpl = projectName + "/template/";
// 脚本运行所在目录（模版去向使用）
var runPath = path_1.resolve(process.cwd()) + "/";
// ========================================================
// 1、CLI 交互
inquirer_1.default
    .prompt([
    {
        name: "appName",
        message: chalk_1.default.cyan("🌈 App Name:"),
        type: "input",
        validate: function (input) {
            if (input.trim().length <= 0 || !input)
                return chalk_1.default.red("‼️  必填项");
            else
                return true;
        },
    },
    {
        name: "pkgManager",
        message: chalk_1.default.yellow("🥓 Package Manager:"),
        type: "list",
        choices: [
            { name: "Yarn", value: 0, checked: true },
            { name: "Npm", value: 1 },
        ],
    },
    {
        name: "author",
        message: chalk_1.default.green("🥤 Your Name:"),
        type: "input",
        default: os.userInfo().username,
    },
])
    .then(function (answer) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                answers = answer;
                // --------------------------------
                // 调用2
                return [4 /*yield*/, writing()];
            case 1:
                // --------------------------------
                // 调用2
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
// ========================================================
// 2、读写操作
function writing() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(chalk_1.default.blue("\r\n ---------------- WRITING... ----------------"));
                    // Static 文件
                    copyStatic([
                        ["controller/index.ts", "controller/index.ts"],
                        ["extend/logger.ts", "extend/logger.ts"],
                        ["extend/lucky.ts", "extend/lucky.ts"],
                        ["route/route.ts", "route/route.ts"],
                        ["view/index.njk", "view/index.njk"],
                        ["tsconfig.json", "tsconfig.json"],
                        ["Dockerfile", "Dockerfile"],
                        ["yarn.lock", "yarn.lock"],
                        ["app.ts", "app.ts"],
                    ]);
                    // template that uses the EJS engine
                    return [4 /*yield*/, copyTemplate([
                            ["docker-compose.yml", "docker-compose.yml"],
                            ["package.json", "package.json"],
                            ["LICENSE", "LICENSE"],
                        ])];
                case 1:
                    // template that uses the EJS engine
                    _a.sent();
                    // --------------------------------
                    // 调用3
                    installed();
                    return [2 /*return*/];
            }
        });
    });
}
// ------------------------------------------------
// Copy Static 文件
function copyStatic(files) {
    files.forEach(function (file) {
        file_1.file.copy("" + tpl + file[0], "" + runPath + answers.appName + "/" + file[1]);
        console.log(chalk_1.default.green("+") +
            (" " + chalk_1.default.grey(answers.appName + "/" + file[1]) + " " + chalk_1.default.green("SUCCESS.👌")));
    });
}
// Copy template that uses the EJS engine
// 使用EJS，解析模版，并将解析后的内容存入新文件中
function copyTemplate(files) {
    var _this = this;
    files.forEach(function (file) { return __awaiter(_this, void 0, void 0, function () {
        var compileContent;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, ejs_1.default.renderFile("" + tpl + file[0], answers)];
                case 1:
                    compileContent = _a.sent();
                    file_1.file.write("" + runPath + answers.appName + "/" + file[1], compileContent);
                    console.log(chalk_1.default.green("+") +
                        (" " + chalk_1.default.grey(answers.appName + "/" + file[1]) + " " + chalk_1.default.green("SUCCESS.👌")));
                    return [2 /*return*/];
            }
        });
    }); });
}
// ========================================================
// 3、依赖安装
function installed() {
    console.log(chalk_1.default.blue("\r\n ---------------- Installing... ----------------"));
    if (answers.pkgManager == 0) {
        child_process_1.exec("cd " + answers.appName + " && yarn install", function (err) {
            console.log(chalk_1.default.green("SUCCESS.👌"));
        });
    }
    else {
        child_process_1.exec("cd " + answers.appName + " && npm install", function (err) {
            console.log(chalk_1.default.green("SUCCESS.👌"));
        });
    }
}
