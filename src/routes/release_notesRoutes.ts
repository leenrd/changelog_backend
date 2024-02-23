import { Router } from "express";
import { body } from "express-validator";

const rn_router = Router();

rn_router.get("/release_notes", () => {});

rn_router.get("/release_notes/:id", () => {});

rn_router.put(
  "/release_notes/:id",
  body("name").optional().isString(),
  body("description").optional().isString(),
  () => {}
);

rn_router.delete("/release_notes/:id", () => {});

rn_router.post(
  "/release_notes",
  body("name").isString(),
  body("description").optional().isString(),
  body("updateId").exists().isString(),
  () => {}
);

export default rn_router;
