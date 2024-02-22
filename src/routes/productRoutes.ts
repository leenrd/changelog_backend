import { Router } from "express";

const product_router = Router();

product_router.get("/product", () => {});
product_router.get("/product/:id", () => {});
product_router.put("/product/:id", () => {});
product_router.delete("/product/:id", () => {});
product_router.post("/product", () => {});

export default product_router;
