import { comparePasswords, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    // Validations
    if (!name) {
      return res.send({ error: "Name is required" });
    }
    if (!email) {
      return res.send({ error: "Email is required" });
    }
    if (!password) {
      return res.send({ error: "Password is required" });
    }
    if (!address) {
      return res.send({ error: "Address is required" });
    }
    if (!phone) {
      return res.send({ error: "Phone Number is required" });
    }

    // check user
    const existingUser = await userModel.findOne({ email });
    // existing user
    if (existingUser) {
      return res.status(200).send({ success: true, message: "Already Register please login" });
    }
    // register user
    const hashedPassword = await hashPassword(password);
    // save
    const user = await new userModel({ name, email, password: hashedPassword, phone, address }).save();
    res.status(200).send({ success: true, message: "User registered successfully", user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Error in registraion", error });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validation
    if (!email || !password) {
      return res.status(404).send({ success: false, message: "Invalid email or password" });
    }
    // check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({ success: false, message: "Email not registered" });
    }

    const match = await comparePasswords(password, user.password);
    if (!match) {
      return res.status(200).send({ success: false, message: "Invalid password" });
    }

    // token
    const token = await JWT.sign({ _id: user.id }, process.env.JWT_SECRET || "DASGKHJJY3216758", { expiresIn: "7d" });
    res.status(200).send({
      success: true,
      message: "Login successfully",
      user: { name: user.name, phone: user.phone, email: user.email, address: user.address },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Error in login", error });
  }
};
