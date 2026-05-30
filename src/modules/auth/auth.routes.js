import { Router } from "express";
import { signIn, signUp } from "./auth.controller.js";
import { validateRequest } from "../../shared/middlewares/validation.middleware.js";
import { registerSchema, loginSchema } from "./auth.validation.js";
const authRouter = Router();

authRouter.post("/sign-up", validateRequest(registerSchema), signUp);
authRouter.post("/sign-in", validateRequest(loginSchema), signIn);

export default authRouter;
