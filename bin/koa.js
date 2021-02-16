"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.Koa = void 0;
var cli_1 = require("../extend/cli");
var os = __importStar(require("os"));
var console_1 = require("../extend/console");
var child_process_1 = require("child_process");
var ora_1 = __importDefault(require("ora"));
var path_1 = require("path");
// Koa 命令行
var Koa = /** @class */ (function (_super) {
    __extends(Koa, _super);
    function Koa() {
        var _this = _super.call(this) || this;
        _this.command = "";
        return _this;
    }
    // 初始化
    Koa.prototype.Initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(console_1.info("\n\r---------------- \uD83C\uDFA8 KOA CLI ----------------"));
                return [2 /*return*/];
            });
        });
    };
    // 交互阶段
    Koa.prototype.Prompting = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prompt([
                            {
                                name: "appName",
                                message: console_1.readonly("🎉App Name:"),
                                type: "text",
                                validate: function (values) { return values.length <= 0 ? "Input your project name, Please !" : true; },
                            },
                            {
                                name: "pkgManager",
                                message: console_1.readonly("🎰Package Manager:"),
                                type: "toggle",
                                active: "Yarn",
                                inactive: "Npm",
                                initial: "Yarn",
                            },
                            {
                                name: "author",
                                message: console_1.readonly("🥤Author Name:"),
                                type: "text",
                                initial: os.userInfo().username,
                            },
                        ])];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // 项目初始化
    Koa.prototype.Writing = function () {
        return __awaiter(this, void 0, void 0, function () {
            var files;
            var _this = this;
            return __generator(this, function (_a) {
                console.log(console_1.info("---------------- \uD83E\uDDE9 WRITING ----------------"));
                files = {
                    static: [
                        "controller/index.ts",
                        "extend/logger.ts",
                        "extend/lucky.ts",
                        "route/route.ts",
                        "view/index.njk",
                        "tsconfig.json",
                        "Dockerfile",
                        "app.ts",
                    ],
                    tpl: [
                        "docker-compose.yml",
                        "package.json",
                        "LICENSE",
                    ],
                };
                files.static.forEach(function (file) {
                    var notice = _this.easyCopy(file);
                    if (notice)
                        console.log(console_1.success("+"), console_1.readonly(path_1.join(file)));
                    else
                        console.log(console_1.error("x"), console_1.error(path_1.join(file)));
                });
                files.tpl.forEach(function (file) {
                    var notice = _this.easyTpl(file);
                    if (notice)
                        console.log(console_1.success("+"), console_1.readonly(path_1.join(file)));
                    else
                        console.log(console_1.error("x"), console_1.error(path_1.join(file)));
                });
                return [2 /*return*/];
            });
        });
    };
    // 依赖安装
    Koa.prototype.Installing = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(console_1.info("---------------- \uD83C\uDFB0 INSTALL ----------------"));
                        if (this.answers.pkgManager) {
                            this.command += "cd " + this.answers.appName + " && yarn install";
                        }
                        else {
                            this.command += "cd " + this.answers.appName + " && npm install";
                        }
                        return [4 /*yield*/, this.easyInstall()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // 安装
    Koa.prototype.easyInstall = function () {
        return __awaiter(this, void 0, void 0, function () {
            var oraObj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        oraObj = ora_1.default();
                        oraObj.start(console_1.readonly("Install..."));
                        return [4 /*yield*/, child_process_1.exec(this.command, function (res, stdout, stderr) {
                                if (res == null) {
                                    return oraObj.succeed(console_1.success("依赖安装完成...")).stop();
                                }
                                else {
                                    return oraObj.fail(console_1.error("依赖安装失败，请手动安装")).stop();
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Koa;
}(cli_1.Cli));
exports.Koa = Koa;
