import { asyncWrapper } from "../../shared/utils/asyncWrapper.js";
import { login, registar } from "./auth.service.js";

export const signUp = asyncWrapper(async (req, res, next) => {
  let data = await registar(req.body);

  res.status(201).json({
    status: "success",
    data,
  });
});

export const signIn = asyncWrapper(async (req, res, next) => {
  let data = await login(req.body);

  res.status(200).json({
    status: "success",
    data,
  });
});
