import { Context, Next } from "koa"


export class Index {
  static async index(ctx: Context, next: Next): Promise<any> {
    ctx.body = "This is Home!"
    await next()
  }

  static async json(ctx: Context, next: Next): Promise<any> {
    ctx.type = "json"
    ctx.body = {
      code: "200",
      message: "This is Home!",
    }
    await next()
  }

  static async view(ctx: Context) {
    await ctx.render("index", {
      name: "titor",
    })
  }
}
