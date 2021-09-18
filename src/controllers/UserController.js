import User from "../models/User";

class UserController {
  async store(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.json(newUser);
    } catch (error) {
      res.status(400).json({
        errors: error.errors
          ? error.errors.map((err) => err.message)
          : "Error 400 - Bad Request",
      });
    }
  }
}

export default new UserController();
