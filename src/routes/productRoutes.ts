import { Router } from "express";

const product_router = Router();

product_router.get("/product", (req, res) => {
  res.json({ message: "Hello World" });
});
product_router.get("/product/:id", () => {});
product_router.put("/product/:id", () => {});
product_router.delete("/product/:id", () => {});
product_router.post("/product", () => {});

export default product_router;
