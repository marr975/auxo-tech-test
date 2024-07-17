import * as dotenv from "dotenv";

export const getEnv = () => {
  dotenv.config({
    override: true,
    path: `src/test/support/env/.env.${process.env.ENV}`,
  });
};
