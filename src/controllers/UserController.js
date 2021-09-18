import User from "../models/User";

class UserController {
  // Post
  async store(req, res) {
    try {
      const newUser = await User.create(req.body);
      return res.json(newUser);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors
          ? error.errors.map((err) => err.message)
          : "Error 400 - Bad Request",
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (error) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      return res.json(user);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors
          ? error.errors.map((err) => err.message)
          : "Error 400 - Bad Request",
      });
    }
  }

  // Update
  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ["Missing User ID."],
        });
      }

      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(400).json({
          errors: ["User does not exist."],
        });
      }

      const newData = await user.update(req.body);

      return res.json(newData);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors
          ? error.errors.map((err) => err.message)
          : "Error 400 - Bad Request",
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ["Missing User ID."],
        });
      }

      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(400).json({
          errors: ["User does not exist."],
        });
      }

      await user.destroy();

      return res.json(user);
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
