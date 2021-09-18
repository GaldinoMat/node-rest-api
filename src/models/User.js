import bcryptjs from "bcryptjs";
import Sequelize, { Model } from "sequelize";

export default class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          default: "",
          validate: { notEmpty: { msg: "Name field can't be empty" } },
        },
        email: {
          type: Sequelize.STRING,
          default: "",
          unique: {
            msg: "Email must be unique",
          },
          validate: { isEmail: { msg: "Invalid e-mail" } },
        },
        password_hash: {
          type: Sequelize.STRING,
          default: "",
          validate: { notEmpty: { msg: "Name field can't be empty" } },
        },
        password: {
          type: Sequelize.VIRTUAL,
          default: "",
          validate: {
            len: {
              args: [6, 18],
              msg: "Password field must have between 3 and 18 characters",
            },
          },
        },
      },
      { sequelize }
    );

    this.addHook("beforeSave", async (user) => {
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });

    return this;
  }
}
