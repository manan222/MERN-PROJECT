const User = require("../model/User");
const bcrypt = require("bcryptjs");

const UserService = {
  createUser: async function (name, email, password) {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return false;
    }
    const hashedPassword = bcrypt.hashSync(password);
    const user = new User({
      name,
      email,
      password: hashedPassword,
      blogs: [],
    });
    await user.save();
    return true;
  },
  authenticateUser: async function (email, password) {
    const existingUser = await User.findOne({ email });
    if (!existingUser) return "Please enter valid Email address";

    const isPasswordCorrect = bcrypt.compareSync(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect) return "Please enter correct Password!";

    return { user: existingUser };
  },
};

module.exports = UserService;
