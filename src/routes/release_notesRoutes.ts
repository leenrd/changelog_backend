import { Router } from "express";

const rn_router = Router();

rn_router.get("/release_notes", () => {});
rn_router.get("/release_notes/:id", () => {});
rn_router.put("/release_notes/:id", () => {});
rn_router.delete("/release_notes/:id", () => {});
rn_router.post("/release_notes", () => {});

export default rn_router;
