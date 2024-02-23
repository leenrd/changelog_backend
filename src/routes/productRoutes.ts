import { Router } from "express";
import { body } from "express-validator";
import { errorHandler } from "../utils/validatorMiddleware";
import { error } from "console";

const product_router = Router();

product_router.get("/product", (req, res) => {
  res.json({ message: "Hello World" });
});

product_router.get(
  "/product/:id",
  body("name").isString(),
  errorHandler,
  (req, res) => {}
);

product_router.put(
  "/product/:id",
  body("name").isString(),
  errorHandler,
  (req, res) => {}
);

product_router.delete("/product/:id", () => {});

product_router.post(
  "/product",
  body("name").isString(),
  errorHandler,
  (req, res) => {}
);

export default product_router;
