import Sequelize from "sequelize";
import database from "../config/database";
import Photo from "../models/Photo";
import Student from "../models/Student";
import User from "../models/User";

// Sets which models are used in database connection
const models = [Student, User, Photo];

// Set connection with sequelize
const connection = new Sequelize(database);

// Iterate through models and initialize connection with provided data structure
models.forEach((model) => model.init(connection));
models.forEach(
  (model) => model.associate && model.associate(connection.models)
);
