import Application from "koa";
import { router } from "./route/route";
// @ts-ignore
import view from "koa-nunjucks-2";
import { logger } from "./extend/logger";

const app: Application = new Application();
const port: Number = 4321;

// -------------------------------------------------- Use View
app.use(
  view({
    ext: "njk",
    path: process.cwd() + "/view/",
  })
);

// -------------------------------------------------- Use logger
app.use((ctx: Application.Context, next) => {
  logger(ctx, next).then();
});

// -------------------------------------------------- Use Route
app.use(router.routes());

// ========================================================================
// START Application
// ========================================================================
app.listen(port);
