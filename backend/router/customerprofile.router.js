import Router from "@koa/router";
import {
  save,
  get,
  getAll,
  update,
  deletePost,
} from "../api/customerprofile.api.js";

const customerprofileRouter = new Router({
  prefix: "/customerprofiles",
});

customerprofileRouter.post("/", (ctx) => {
  const data = ctx.request.body;
  ctx.body = save(data);
  ctx.set("Content-Type", "application/json");
  ctx.status = 201;
});

customerprofileRouter.get("/", (ctx) => {
  ctx.body = getAll();
  ctx.set("Content-Type", "application/json");
  ctx.status = 200;
});

customerprofileRouter.get("/:id", (ctx) => {
  const id = ctx.params.id;
  ctx.body = get(id);
  ctx.set("Content-Type", "application/json");
  ctx.status = 200;
});

customerprofileRouter.put("/:id", (ctx) => {
  const id = ctx.params.id;
  ctx.body = update(id, ctx.request.body);
  ctx.set("Content-Type", "application/json");
  ctx.status = 200;
});

customerprofileRouter.del("/:id", (ctx) => {
  const id = ctx.params.id;
  deletePost(id);
  ctx.status = 204;
});
export default customerprofileRouter;
