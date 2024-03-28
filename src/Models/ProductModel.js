const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true
    },
    size: {
        type: Number,
        required: true
      },
    price: {
        type: Number,
        required: true
      },
    image: {
        type: String,
        required: true
      },
    color: {
        type: String,
        required: false
      },
    category:{
        type:String,
        required:true
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("product", productSchema);
module.exports = Product;