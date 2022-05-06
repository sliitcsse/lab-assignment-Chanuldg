import Router from "@koa/router";
import {
  save,
  get,
  getAll,
  update,
  deletePost,
} from "../api/traderprofile.api.js";

const traderprofileRouter = new Router({
  prefix: "/traderprofiles",
});



//POST
traderprofileRouter.post("/", (ctx) => {
  const data = ctx.request.body;
  ctx.body = save(data);
  ctx.set("Content-Type", "application/json");
  ctx.status = 201;
});



//Get all the 
//traders details
traderprofileRouter.get("/", (ctx) => {
  ctx.body = getAll();
  ctx.set("Content-Type", "application/json");
  ctx.status = 200;
});

//Get the traders 
//details by ID
traderprofileRouter.get("/:id", (ctx) => {
  const id = ctx.params.id;
  ctx.body = get(id);
  ctx.set("Content-Type", "application/json");
  ctx.status = 200;
});



//Update the traders 
//details by ID
traderprofileRouter.put("/:id", (ctx) => {
  const id = ctx.params.id;
  ctx.body = update(id, ctx.request.body);
  ctx.set("Content-Type", "application/json");
  ctx.status = 200;
});


//delete the trader 
//details by ID
traderprofileRouter.del("/:id", (ctx) => {
  const id = ctx.params.id;
  deletePost(id);
  ctx.status = 204;
});
export default traderprofileRouter;
