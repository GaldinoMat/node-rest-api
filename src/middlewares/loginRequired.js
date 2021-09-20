import jwt from "jsonwebtoken";
import User from "../models/User";

// Checks if login attempt has jwt token
export default async (req, res, next) => {
  // Gets authorization header from request's headers
  const { authorization } = req.headers;

  // Checks if authorization exists
  if (!authorization) {
    return res.status(401).json({
      errors: ["Unauthorized Access - Login Required"],
    });
  }

  // Gets the token from header
  const [, token] = authorization.split(" ");

  try {
    // Verifies if jwt token matches with api secret key
    const data = jwt.verify(token, process.env.TOKEN_SECRET);

    // Gets user info from data received
    const { id, email } = data;

    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) {
      return res.status(401).json({
        errors: ["Unauthorized Access - Invalid User"],
      });
    }

    req.userId = id;
    req.userEmail = email;

    return next();
  } catch (error) {
    return res.status(401).json({
      errors: ["Unauthorized Access - Expired or Invalid Token"],
    });
  }
};
