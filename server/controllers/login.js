import bcrypt from "bcrypt";
import { User } from "../models/User.js";



// POST - Login user
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
    let userData = await User.findOne({email});
    // console.log(userData);
    if (!userData) {
      return res.status(200).send({
        status: 400,
        message: "No user found! Please register",
      });
    }
    const isPasswordMatching = await bcrypt.compare(
      password,
      userData.password
    );
//   console.log(isPasswordMatching);
    if (!isPasswordMatching) {
      return res.status(200).send({
        status: 400,
        message: "Incorrect Password",
      });
    }

    res.status(200).send({
      status: 200,
      message: "Logged in successfully",
    });
    } catch (error) {
        req.status(400).send({
            status: 400,
            message: "error"
        })
    }
  };
  export {loginUser}