import { Router } from "express";
import { body } from "express-validator";
import {
  getAllUpdates,
  getUpdateById,
  updateUpdateById,
  deleteUpdateById,
  addUpdate,
} from "../controllers/updateControllers";
import { errorHandler } from "../utils/validatorMiddleware";

const update_router = Router();

update_router.get("/update", getAllUpdates);

update_router.get("/update/:id", getUpdateById);

update_router.put(
  "/update/:id",
  body("title").optional(),
  body("body").optional(),
  body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]).optional(),
  body("version").optional(),
  updateUpdateById
);

update_router.delete("/update/:id", deleteUpdateById);

update_router.post(
  "/update",
  body("title").exists().isString(),
  body("body").exists().isString(),
  body("productId").exists().isNumeric(),
  addUpdate
);

export default update_router;
