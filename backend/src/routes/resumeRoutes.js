import express from "express";
import protect from "../middlewares/authMiddleware.js";
import {
  createResume,
  deleteResume,
  getPublicResumeById,
  updateResume,
  getResume
} from "../controllers/resumeController.js";
import upload from "../config/multer.js";

const resumeRouter = express.Router();

resumeRouter.post("/create", protect, createResume);
resumeRouter.put("/update", upload.single("image"), protect, updateResume);
resumeRouter.post("/delete/:resumeId", protect, deleteResume);
resumeRouter.post("/get/:resumeId", protect, getResume);
resumeRouter.get("/public/:resumeId", getPublicResumeById);
resumeRouter.post("/public/:resumeId", getPublicResumeById);

export default resumeRouter;
