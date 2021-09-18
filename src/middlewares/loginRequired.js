import jwt from "jsonwebtoken";

// Checks if login attempt has jwt token
export default (req, res, next) => {
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
    req.userId = id;
    req.userEmail = email;

    return next();
  } catch (error) {
    return res.status(401).json({
      errors: ["Unauthorized Access - Expired or Not Valid Token"],
    });
  }
};
