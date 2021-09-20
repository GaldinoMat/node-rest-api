import User from "../models/User";

class UserController {
  // Post: Creates user in database
  async store(req, res) {
    try {
      const newUser = await User.create(req.body);

      const { id, name, email } = newUser;

      return res.json({ id, name, email });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors
          ? error.errors.map((err) => err.message)
          : "Error 400 - Bad Request",
      });
    }
  }

  // Index: List all users in database
  async index(req, res) {
    try {
      // Finds all users in database
      const users = await User.findAll({ attributes: ["id", "name", "email"] });
      return res.json(users);
    } catch (error) {
      return res.json(null);
    }
  }

  // Show: Lists a single user in database
  async show(req, res) {
    try {
      // Find a single user by id
      const user = await User.findByPk(req.params.id);

      const { id, name, email } = user;
      return res.json({ id, name, email });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors
          ? error.errors.map((err) => err.message)
          : "Error 400 - Bad Request",
      });
    }
  }

  // Update: Check user avaiability and updates their information
  async update(req, res) {
    try {
      // Find a single user by id
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: ["User does not exist."],
        });
      }

      // Updates user data
      const newData = await user.update(req.body);

      const { id, name, email } = newData;

      return res.json({ id, name, email });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors
          ? error.errors.map((err) => err.message)
          : "Error 400 - Bad Request",
      });
    }
  }

  // Delete: checks user avaiability and deletes them from database
  async delete(req, res) {
    try {
      // Find a single user by id
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: ["User does not exist."],
        });
      }

      // Deletes user entry in database
      await user.destroy();

      return res.json(`User ${user.name} was deleted`);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors
          ? error.errors.map((err) => err.message)
          : "Error 400 - Bad Request",
      });
    }
  }
}

export default new UserController();
