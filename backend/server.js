import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";


dotenv.config();

const app = express();

await connectDB()

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});