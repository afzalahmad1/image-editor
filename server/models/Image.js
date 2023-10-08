// const Mongoose = require("mongoose");
import Mongoose from 'mongoose'
const Schema = Mongoose.Schema;

const ImageSchema = new Schema({
  image: {
    type: String,
  },
});

const Image = Mongoose.model("images",ImageSchema)
export  {Image};