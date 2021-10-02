import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { resolve } from "path";
import home from "./routes/home";
import user from "./routes/user";
import token from "./routes/token";
import student from "./routes/student";
import photo from "./routes/photo";
import "./database";

dotenv.config();

const whiteList = ["https://react.mydomain.com.br", "http://localhost:3000"];

const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not Allowed by Cors"));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  // Middleares used
  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, "uploads")));
  }

  // Routes used for navigation
  routes() {
    this.app.use("/", home);
    this.app.use("/users/", user);
    this.app.use("/tokens/", token);
    this.app.use("/students/", student);
    this.app.use("/photos/", photo);
  }
}

export default new App().app;
