import express from "express";
import protect from "../middlewares/authMiddleware.js";
import {
  createResume,
  deleteResume,
  getPublicResumeById,
  updateResume,
} from "../controllers/resumeController.js";
import upload from "../config/multer.js";
import { getUserById } from "../controllers/userController.js";

const resumeRouter = express.Router();

resumeRouter.post("/create", protect, createResume);
resumeRouter.put("/update", upload.single("image"), protect, updateResume);
resumeRouter.post("/delete/:resumeId", protect, deleteResume);
resumeRouter.post("/get/:resumeId", protect, getUserById);
resumeRouter.post("/public/:resumeId", getPublicResumeById);

export default resumeRouter;
