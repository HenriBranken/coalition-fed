const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const authRouter = require("./routers/health.router");
const process = require("node:process");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
// Set Up the Routes:
app.use("/api/auth", authRouter);

// Serve the static files from Vite's build folder (in ../frontend):
app.use(express.static(path.join(__dirname, "../frontend/dist")));

/**
 * Serve the Vite-built frontend statically from "../frontend/dist/index.html"
 * The SPA fallback:  Serve index.html for any non-API routes
 * This needs to be placed after the API routes
 * 
 * If someone mistypes the API path, the fallback will serve index.html, which will confuse things.
 */
app.get("*", (req, res) => {
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ error: "API route not found." });
  }
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});


// Start up the Server:
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Log the Node Environment:
console.log(`\n\nEnvironment: ${process.env.NODE_ENV || 'development'}.`);

/**
 * To run the "unified server":
 * node index.js
 * 
 * Navigate to:
 * http://localhost:8000
 */
