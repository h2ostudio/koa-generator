import { Command } from "./api";
import prompts from "prompts";
import { file as fs } from "./file";
import ejs from "ejs";
import { join, resolve, sep } from "path";



abstract class Cli implements Command{
  protected RUN: string = join(resolve(process.cwd()), sep);
  protected answers: {} | null = null;
  private dir = join(resolve(__dirname));
  protected PATH: string = this.dir.substring(0, this.dir.lastIndexOf("extend"));
  protected TPL: string = join(this.PATH, "template/");

  /**
   * @constructor
   * @protected
   */
  protected constructor() {
    this.run().then().catch(err => console.log(err));
  }

  /**
   * 自动指令中枢：
   * @description 自动调用 CLI 过程中的5大阶段
   */
  async run() {
    await this.Initialize();
    await this.Prompting();
    await this.Writing();
    await this.Installing();
    await this.Ending();
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
  protected easyCopy(file: string) {
    // @ts-ignore
    return fs.copy(join(this.TPL, file), join(this.RUN, this.answers.appName, file));
  }

  protected async easyTpl(file: string) {
    // @ts-ignore
    const [compileContent] = await Promise.all([ejs.renderFile(join(this.TPL, file), this.answers)]);
    // @ts-ignore
    return fs.write(join(this.RUN, this.answers.appName, file), compileContent);
  }

  // 提问题，并传回问题答案
  protected async prompt(question: prompts.PromptObject<string> | prompts.PromptObject<string>[]) {
    return this.answers = await prompts(question);
  }

}

export { Cli };