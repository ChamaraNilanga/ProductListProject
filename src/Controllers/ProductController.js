const productService = require("../Services/ProductService");

module.exports = {
  get: async (req, res) => {
    console.log("get Success");
  },
  createProduct: async (req, res) => {
    try {
        const result = await productService.createProduct(req);
        if (!result.success) {
        res.status(400).send({
            message: result.message,
        });
        } else {
        res.send(JSON.stringify(result));
        }
    } catch (error) {
      console.error(error.message);
      res.status(500).send({
        message: error.message,
      });
    }
  },
  updateProduct: async (req, res) => {
    try {
        const result = await productService.updateProduct(req);
        if (!result.success) {
        res.status(400).send({
            message: result.message,
        });
        } else {
        res.send(JSON.stringify(result));
        }
    } catch (error) {
      console.error(error.message);
      res.status(500).send({
        message: error.message,
      });
    }
  },
};
