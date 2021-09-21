import Sequelize, { Model } from "sequelize";

export default class Photo extends Model {
  static init(sequelize) {
    // Sets data model structure
    super.init(
      {
        originalname: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "Field can not be empty",
            },
          },
        },
        filename: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "Field can not be empty",
            },
          },
        },
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: "student_id" });
  }
}
