import { config } from "dotenv";

config({
  path: ".env",
});

export const { PORT, DB_CONNECTION, NODE_ENV, JWT_SECRET, JWT_EXPIRE } =
  process.env;
