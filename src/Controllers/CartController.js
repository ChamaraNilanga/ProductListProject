const CartService = require("../Services/CartService");

module.exports = {
    addToCart:async (req, res) => {
        try{
            const result = await CartService.createProduct(req);
            if (!result.success) {
            res.status(400).send({
                message: result.message,
            });
            } else {
            res.send(JSON.stringify(result));
            }   
        }catch(error){
            console.error(error.message);
            res.status(500).send({
                message: error.message,
            });
        }
    },
    getUser: (req, res) => {
        res.json({ message: "Cart Controller" });
    },
    userLogin: (req, res) => {
        res.json({ message: "Cart Controller" });
    },
};