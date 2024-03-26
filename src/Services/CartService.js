const Cart = require("../Models/Cart");
const Product = require("../Models/ProductModel");
const User = require("../Models/UserModal");

module.exports = {

  createProduct: async (req) => {
    const { user , product } = req.body;
    try {
      const existProduct = Product.findById(product);
      const existUser = User.findById(user);

      if (existProduct !== null && existUser !== null) {
        const cart = new Cart(
            {
                user: user,
                product: product
            }
        );
        const data = await cart.save();
        return { data: data, statusCode: 201, success: true , message: "Product added to cart successfully"};
      } else {
        return { success: false, message: "Product already exists" };
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};