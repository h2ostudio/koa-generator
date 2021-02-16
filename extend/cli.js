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
exports.Cli = void 0;
var prompts_1 = __importDefault(require("prompts"));
var file_1 = require("./file");
var ejs_1 = __importDefault(require("ejs"));
var path_1 = require("path");
var Cli = /** @class */ (function () {
    /**
     * @constructor
     * @protected
     */
    function Cli() {
        this.RUN = path_1.join(path_1.resolve(process.cwd()), path_1.sep);
        this.answers = null;
        this.dir = path_1.join(path_1.resolve(__dirname));
        this.PATH = this.dir.substring(0, this.dir.lastIndexOf("extend"));
        this.TPL = path_1.join(this.PATH, "template/");
        this.run().then().catch(function (err) { return console.log(err); });
    }
    /**
     * 自动指令中枢：
     * @description 自动调用 CLI 过程中的5大阶段
     */
    Cli.prototype.run = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Initialize()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.Prompting()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.Writing()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.Installing()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.Ending()];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Cli.prototype.Initialize = function () {
    };
    Cli.prototype.Prompting = function () {
    };
    Cli.prototype.Writing = function () {
    };
    Cli.prototype.Installing = function () {
    };
    Cli.prototype.Ending = function () {
    };
    // TODO: Copy Files
    // PATH: 当前项目绝对路径
    Cli.prototype.easyCopy = function (file) {
        // @ts-ignore
        return file_1.file.copy(path_1.join(this.TPL, file), path_1.join(this.RUN, this.answers.appName, file));
    };
    Cli.prototype.easyTpl = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var compileContent;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all([ejs_1.default.renderFile(path_1.join(this.TPL, file), this.answers)])];
                    case 1:
                        compileContent = (_a.sent())[0];
                        // @ts-ignore
                        return [2 /*return*/, file_1.file.write(path_1.join(this.RUN, this.answers.appName, file), compileContent)];
                }
            });
        });
    };
    // 提问题，并传回问题答案
    Cli.prototype.prompt = function (question) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, prompts_1.default(question)];
                    case 1: return [2 /*return*/, _a.answers = _b.sent()];
                }
            });
        });
    };
    return Cli;
}());
exports.Cli = Cli;
