import { Router } from "express";

const update_router = Router();

update_router.get("/update", () => {});
update_router.get("/update/:id", () => {});
update_router.put("/update/:id", () => {});
update_router.delete("/update/:id", () => {});
update_router.post("/update", () => {});

export default update_router;
