import express from "express";
import { config } from "dotenv";
import cors from "cors";

const app = express();

// Load environment variables
config({ path: "./config/config.env" });

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON request bodies

// Routes
app.get("/", (req, res) => {
    console.log("server working");
    res.send("Server is working");
});

export default app;
