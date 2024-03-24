const User = require("../Models/UserModal");
const { storage } = require("../dbConfig/cloudinary-config");
const multer = require("multer");
const upload = multer({ storage });
const cloudinary = require("../dbConfig/cloudinary-config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");

module.exports = {
  get: async (req, res) => {
    console.log("My service");
  },

  createUser: async (req) => {
    const { email,password } = req.body;
    console.log(req.body);
    try {
      const existUser = await User.findOne({ email });
      if (existUser === null) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            email: email,
            password: hashedPassword
        });
        const data = await user.save();
        return { data: data, statusCode: 201, success: true };
      } else {
        return { success: false, message: "User already exists" };
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  userLogin: async (req) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });
      if (!user) {
        return {
          data: user,
          statusCode: 400,
          success: false,
          message: "User not found",
        };
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return {
          data: user,
          statusCode: 401,
          success: false,
          message: "Authentication failed",
        };
      }
      const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });
      return {
        token: token,
        statusCode: 200,
        success: true,
        message: "Login Success!",
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};
