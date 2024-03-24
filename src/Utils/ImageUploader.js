const { storage } = require("../dbConfig/cloudinary-config");
const multer = require("multer");
const upload = multer({ storage });
const cloudinary = require("../dbConfig/cloudinary-config");

module.exports = {
    imageUploader : async (req) => {
        let StoryImage = null;
        if (req.file) {
          StoryImage = await cloudinary.cloudinary.uploader.upload(
            req.file.path,
            { folder: "ProductImages" },
            function (error, result) {
              console.log(result, error);
            }
          );
        }
        let image = "";
        if (StoryImage != null) {
          image = StoryImage.secure_url;
        }
        return image;
    }
};