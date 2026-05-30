import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import authRouter from "./modules/auth/auth.routes.js";
import { globalErrorMiddleWare } from "./shared/middlewares/globalErrorMiddleWare.js";
const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));

app.use("/api/v1/auth", authRouter);

app.use((req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: "the route is not found",
  });
});

app.use(globalErrorMiddleWare);
export default app;
