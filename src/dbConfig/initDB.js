const mongoose = require("mongoose");

const dbConfig = async () => {
  try {
    console.log(process.env.MONGODB_URI)
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongo DB connected");
  } catch (error) {
    console.log("Mongo DB connection fails", error.message || error);
  }
};

module.exports = dbConfig;