import Auth from "../models/auth.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { keys } from "../config/keys.js";

// Register
const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "all fields required to register the transactworld",
      });
    }

    const user = await Auth.findOne({ email });

    if (user)
      res.status(400).json({
        success: false,
        message: "User already exist with this email.",
      });

    const hashedPassword = await bcrypt.hash(password, 10);

    const registerUser = await Auth.create({
      username,
      email,
      password: hashedPassword,
    });

    const userResponse = {
      username: registerUser.username,
      email: registerUser.email,
      role: registerUser.role,
    };

    // Generate JWT token
    const token = jwt.sign(
      {
        id: registerUser._id,
        username: registerUser.username,
        email: registerUser.email,
      },
      process.env.JWT_SECRET // Use your secret key from environment variables
    );

    return res.status(201).json({
      success: true,
      message: "Account created successfully",
      data: {
        ...userResponse,
        token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

// Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "all fields required" });
    }

    const user = await Auth.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Incorrect email or password",
      });
    }

    const comparepassword = await bcrypt.compare(password, user.password);
    if (!comparepassword) {
      return res.status(400).json({
        success: false,
        message: "Incorrect email or password",
      });
    }

    const { jwtSecret } = keys;

    if (user && comparepassword) {
      const token = jwt.sign({ userId: user._id }, jwtSecret, {
        expiresIn: "1d",
      });
      return res
        .cookie("authtoken", token, {
          httpOnly: true,
          sameSite: "strict",
          maxAge: 24 * 60 * 60 * 1000,
        })
        .status(200)
        .json({
          success: true,
          message: "Logged in successfully",
          data: {
            username: user.username,
            email: user.email,
            token,
            role: user.role,
          },
        });
    }
  } catch (error) {
    console.log(error);
  }
};

// Logout
const logout = async (req, res) => {
  try {
    res.clearCookie("authtoken", {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    });

    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export { register, login, logout };
