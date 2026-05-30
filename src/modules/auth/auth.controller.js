import { asyncWrapper } from "../../shared/utils/asyncWrapper.js";
import { registar } from "./auth.service.js";

export const signUp = asyncWrapper(async (req, res, next) => {
  let data = await registar(req.body);

  res.status(201).json({
    status: "success",
    data,
  });
});
