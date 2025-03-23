import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routers/health.router.js";

import cookieParser from "cookie-parser";
import process from "node:process";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Set Up the Routes:
app.use("/api/auth", authRouter);

// Simple API endpoint.
app.get("/", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

// Start up the Server:
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
