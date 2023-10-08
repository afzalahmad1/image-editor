import {User} from "../models/User.js";

const verifyEmail = async (email) => {
  try {
    const userData = await User.findOne({email});

    if (userData && userData.email === email) {
      return "E";
    }
    return null;
  } catch (err) {
    return "Err";
  }
};

export { verifyEmail };