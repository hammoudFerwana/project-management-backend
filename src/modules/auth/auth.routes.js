import { Router } from "express";
import { signUp } from "./auth.controller.js";

const authRouter = Router();

authRouter.post("/sign-up", signUp);

export default authRouter;
