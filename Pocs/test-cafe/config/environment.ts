import * as dotenv from "dotenv";

dotenv.config();
const args = process.env;

export const environment = {
  API_BASE_URL: args.API_BASE_URL || "",
  APPLICATION_BASE_URL: args.APPLICATION_BASE_URL || ""
};
