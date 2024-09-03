import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { errorMiddleware } from "./middleware/error.middleware.js";
import { authRouter } from "./routes/auth.route.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  })
);

app.use(bodyParser.json());
app.use(errorMiddleware);

app.use("/api", authRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Backend running on port http://localhost:${PORT}`);
});
