import dotenv from 'dotenv'
import { Command } from 'commander';

const program = new Command();
program
  .option("-m, --mode <mode>", "Modo de trabajo", "production")
  .option("-p <port>", "Puerto del servidor", 8080);

program.parse();

dotenv.config({
  path: program.opts().mode === "dev" ? "./.env" : "./.env.prod",
});

export default {
  app: {
    PORT: process.env.PORT,
    ADMIN_EMAIL: process.env.ADMIN_EMAIL,
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD
  },
  mongo: {
    URI: process.env.MONGO_URI
  },
  jwt: {
    COOKIE: process.env.JWT_COOKIE,
    SECRET: process.env.JWT_SECRET || "jwtSecret",
  },
  back:{
    BACKEND: process.env.BACKEND_URL
  },
  front:{
    FRONT: process.env.FRONT
  },
  EMAIL:{
    USER:process.env.EMAIL_USER,
    PASSWORD:process.env.EMAIL_PASSWORD,
    HOST:process.env.EMAIL_HOST,
    PORT:process.env.EMAIL_PORT
  }
};