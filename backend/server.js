import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./src/config/db.js";
import userRouter from "./src/routes/userRoutes.js";
import resumeRouter from "./src/routes/resumeRoutes.js";
import aiRouter from "./src/routes/aiRoutes.js";


const app = express();

await connectDB();

app.use(express.json());
app.use(cors());

app.use("/api/users", userRouter);
app.use("/api/resumes", resumeRouter);
app.use("/api/ai", aiRouter);
app.use("/api/resumes", resumeRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
