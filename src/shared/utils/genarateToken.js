import jwt from "jsonwebtoken";
import { JWT_EXPIRE, JWT_SECRET } from "../../config/env.js";
export const generateToekn = (userId) => {
  return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: JWT_EXPIRE });
};
