import { User } from "../models/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  console.log("post huselt", req.body);
  const { email, password } = req.body;
  try {
    // const token = jwt.sign({name: "ariun", age:"16" }, "aimrnuutscode", {expiresIn:'1h'})
    // console.log('mytoken', token)
    const isRegistered = await User.findOne({ email: email });
    if (!isRegistered) {
      const hashedPassword = bcrypt.hashSync(password, 10);
      console.log("hashedpass", hashedPassword);
      User.create({
        email: email,
        password: hashedPassword,
      });
      res.status(200).send("User successfully created");
    } else {
      res.status(401).send("this email has already been registered");
    }
  } catch (error) {
    res.status(500).send("error with creating a user");
    console.log("error", error);
  }
};
export const getUsers = async (req, res) => {
  // try {

  // } catch (error) {
  // res.status(403).send("cant get users")
  // }
  const result = await User.find();
  res.status(200).send(result);
};
export const logIn = async (req, res) => {
  const TOKENKEY = process.env.TOKENKEY;
  try {
    const { email, password } = req.body;
    const isRegistered = await User.findOne({ email: email });

    if (!isRegistered) {
      res.status(404).send("email hasnt been registered");
    }
    console.log("is regis", isRegistered);
    const isCorrectPass = await bcrypt.compare(password, isRegistered.password);
    if (isCorrectPass) {
      const token = jwt.sign(isRegistered.toObject(), TOKENKEY, {
        expiresIn: "1h",
      });
      res.status(200).send({ res: isRegistered, token: token });
    } else {
      res.status(401).send("wrong password");
    }
  } catch (error) {
    res.status(500).send(error, "error");
  }
};
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("id", req.body);
    const user = await User.findByIdAndUpdate(id, req.body);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send("error", error);
  }
};

export const getUserById = async (req, res) => {
  console.log("token irsnuu?", req.token);
  try {
    const { id } = await req.params;

    const authorizationHeader = req.get("Authorization");

    console.log({ authorizationHeader });

    const user = await User.findOne({ _id: id });
    res.status(210).send("");
  } catch (error) {
    res.status(500).send(error);
  }
};
