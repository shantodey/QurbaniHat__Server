import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth.js";
import router from "./routes/routes.js";

dotenv.config();

const app = express();


app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true, }));



app.all("/api/auth/*path", toNodeHandler(auth));
app.use(express.json());
app.use("/", router);
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome",
  });
});

app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Welcome",
  });
});


export default app;