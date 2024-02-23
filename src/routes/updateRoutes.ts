import { Router } from "express";
import { body, oneOf } from "express-validator";
import { errorHandler } from "../utils/validatorMiddleware";

const update_router = Router();

update_router.get("/update", () => {});

update_router.get("/update/:id", () => {});

update_router.put(
  "/update/:id",
  body("title").optional(),
  body("body").optional(),
  body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]),
  body("version").optional(),
  () => {}
);

update_router.delete("/update/:id", () => {});

update_router.post(
  "/update",
  body("title").exists().isString(),
  body("body").exists().isString(),
  () => {}
);

export default update_router;
