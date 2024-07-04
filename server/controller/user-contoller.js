const UserService = require("../services/user-service");

const signUp = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const result = await UserService.createUser(name, email, password);
    if (result) return res.status(201).json({ result });
    return res.status(201).json({ message: "User already exists!" });
  } catch (e) {
    console.log(e);
  }
};

const logIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const result = await UserService.authenticateUser(email, password);
    if (typeof result === "string")
      return res.status(201).json({ message: result });
    return res.status(201).json(result);
  } catch (error) {
    return error;
  }
};

module.exports = { signUp, logIn };
