const { isErrored } = require("stream");
const userService = require("../Services/UserService");
const userValidate = require("../validator/UserValidator");
module.exports = {
  get: async (req, res) => {
    console.log("get Success");
  },
  createUser: async (req, res) => {
    const { email, password } = req.body;
    try {
        const validemail =await userValidate.ValidateEmail(email);
        const validpassword =await userValidate.ValidateString(password);
        if (validemail.result && validpassword.result)
        {
            const result = await userService.createUser(req);
            if (!result.success) {
            res.status(400).send({
                message: result.message,
            });
            } else {
            res.send(JSON.stringify(result));
            }
        } else {
            res.status(400).send({
            message: {email: validemail.message, password: validpassword.message},
            });
        }
    } catch (error) {
      console.error(error.message);
      res.status(500).send({
        message: error.message,
      });
    }
  },

  userLogin: async (req, res) => {
    try {
      const result = await userService.userLogin(req);
      if (!result.success) {
        res.status(400).send({
          message: result.message,
        });
      }
      if (result.success === true) {
        res.status(200).send({ 
            token: result.token,
            message: result.message,
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: error.message,
      });
    }
  },
};
