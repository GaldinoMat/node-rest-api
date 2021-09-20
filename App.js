import dotenv from "dotenv";
import express from "express";
import home from "./src/routes/home";
import user from "./src/routes/user";
import token from "./src/routes/token";
import student from "./src/routes/student";
import photo from "./src/routes/photo";
import "./src/database";

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  // Middleares used
  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
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
