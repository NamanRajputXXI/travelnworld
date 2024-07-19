import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { readFileSync } from "fs";
import path from "path";

// Load environment variables
config({ path: "./config/config.env" });

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON request bodies

// Read JSON data
const dataPath = path.resolve("./MOCK_DATA.json");
const data = JSON.parse(readFileSync(dataPath, "utf-8"));

// Routes
app.get("/", (req, res) => {
  console.log("server working");
  res.send("Server is working");
});

app.get("/users", (req, res) => {
  return res.json(data);
});

// Error handling for unhandled routes
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(7600, () => {
  console.log(`server listening on port ${7600}`);
});

export default app;
