import { Router } from "express";
import { body } from "express-validator";
import { errorHandler } from "../utils/validatorMiddleware";
import {
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
  addProduct,
} from "../controllers/productController";

const product_router = Router();

product_router.get("/product", getAllProducts);

product_router.get(
  "/product/:id",
  body("name").isString(),
  errorHandler,
  getProductById
);

product_router.put(
  "/product/:id",
  body("name").isString(),
  errorHandler,
  updateProductById
);

product_router.delete("/product/:id", deleteProductById);

product_router.post(
  "/product",
  body("name").isString(),
  errorHandler,
  addProduct
);

export default product_router;
