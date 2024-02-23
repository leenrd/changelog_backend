import { Router } from "express";
import { body } from "express-validator";

import {
  getAllReleaseNotes,
  getReleaseNotesById,
  updateReleaseNotesById,
  deleteReleaseNotesById,
  addReleaseNotes,
} from "../controllers/release_notesControllers";
const rn_router = Router();

rn_router.get("/release_notes", getAllReleaseNotes);

rn_router.get("/release_notes/:id", getReleaseNotesById);

rn_router.put(
  "/release_notes/:id",
  body("name").optional().isString(),
  body("description").optional().isString(),
  updateReleaseNotesById
);

rn_router.delete("/release_notes/:id", deleteReleaseNotesById);

rn_router.post(
  "/release_notes",
  body("name").isString(),
  body("description").optional().isString(),
  body("updateId").exists().isString(),
  addReleaseNotes
);

export default rn_router;
