import Sequelize from "sequelize";
import database from "../config/database";
import Student from "../models/Student";
import User from "../models/User";

// Sets which models are used in database connection
const models = [Student, User];

// Set connection with sequelize
const connection = new Sequelize(database);

// Iterate through models and initialize connection with provided data structure
models.forEach((model) => model.init(connection));
