import bcrypt, { hashSync } from "bcryptjs";
import jwt from "jsonwebtoken";
import Auth from "../models/authModel.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.json({
        message: "All fields are required",
      });
    }

    const existingUser = await Auth.findOne({ email });
    if (existingUser) {
      return res.json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    //token generation
    const token = jwt.sign(
      { id: user._id, email: user.email},
      process.env.JWT_SECRET,
      process.env.JWT_EXPIRY,
    );

    const user = await Auth.create({
      name,
      email,
      password: hashedPassword,
    });

    res.json({
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    res.json(error.message);
  }
};



export const login = async (req, res) => {
  try {
    //create
    const { email, password } = req.body;

    //validation
    if (!email || !password) {
      return res.json({
        message: "All fields are required",
      });
    }
    

    //validation
    const user = await Auth.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    

    //password comparison
    const isValid = await bcrypt.compare(password, hashedPassowrd);
    if (!isValid) {
      return res.json({
        message: "Invalid passoword",
      });
    }

    //token generation
    const token = jwt.sign(
      { id, email },
      process.env.JWT_SECRET,
      process.env.JWT_EXPIRY,
    );
  

    //user logged-in
    res.json({
      message: "User logged in successfully",
      token,
      data: existingUser,
    });
  } catch (error) {
    res.json(error.message);
  }
};
