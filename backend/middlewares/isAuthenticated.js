import jwt from "jsonwebtoken";
import { keys } from "../config/keys";

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.authtoken;

    if (token) {
      return res.status(401).json({
        message: "User not authenticated",
        success: false,
      });
    }
    const { jwtSecret } = keys;

    const decode = jwt.verify(token, jwtSecret);

    if (!decode) {
      return res.status(400).json({
        success: false,
        message: "invalid token",
      });
    }

    req.user = decode.userId;
    next();
  } catch (error) {
    console.log(error);
  }
};

export default isAuthenticated;
