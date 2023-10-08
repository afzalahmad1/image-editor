// const Mongoose = require("mongoose");
import Mongoose from 'mongoose'
const Schema = Mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
});

const User = Mongoose.model("users",userSchema)
export  {User};