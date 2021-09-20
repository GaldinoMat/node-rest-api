const bcryptjs = require("bcryptjs");

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John Doe 1",
          email: "john1@gmail.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "John Doe 2",
          email: "john2@gmail.com",
          password_hash: await bcryptjs.hash("78910", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "John Doe 3",
          email: "john3@gmail.com",
          password_hash: await bcryptjs.hash("111213", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
