import jwt from "jsonwebtoken";
import User from "../models/User";

class TokenController {
  // Checks if user exists in database and creates jwt token
  async store(req, res) {
    const { email = "", password = "" } = req.body;

    // Checks if email or password are null
    if (!email || !password) {
      return res.status(401).json({
        errors: ["Unauthorized access"],
      });
    }

    // Finds user that matches with emial in database
    const user = await User.findOne({ where: { email } });

    // Checks if user is null
    if (!user) {
      return res.status(401).json({
        errors: ["User does not exist"],
      });
    }

    // Uses User model method to check if password is valid
    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ["Invalid password"],
      });
    }

    // Creates jwt token based on user id, email, token secret key and token expiration date
    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token, user: { name: user.name, id, email } });
  }
}

export default new TokenController();
