import { config } from "dotenv";
config({ path: `.env.${process.env.NODE_ENV || "development.local"}` });
export const {
  port,
  NODE_ENV,
  DB_URI,
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
} = process.env;
