import Sequelize from "sequelize";
import database from "../config/database";
import Student from "../models/Student";

const models = [Student];

const connection = new Sequelize(database);

models.forEach((model) => model.init(connection));
