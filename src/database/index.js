import Sequelize from "sequelize";
import database from "../config/database";
import Student from "../models/Student";
import User from "../models/User";

const models = [Student, User];

const connection = new Sequelize(database);

models.forEach((model) => model.init(connection));
