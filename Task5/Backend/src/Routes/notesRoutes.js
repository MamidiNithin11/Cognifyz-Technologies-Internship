import express from "express";
import {getALlnotes,postNotes,putNotes,deleteNotes,getNoteById} from "../Controllers/notesControllers.js"

const router = express.Router();
router.get("/",getALlnotes);
router.get("/:id",getNoteById);
router.post("/",postNotes);
router.put("/:id",putNotes);
router.delete("/:id",deleteNotes);

export default router;


