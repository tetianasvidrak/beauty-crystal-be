const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("~/models/user");

const authService = {
  register: async (email, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return await User.create({ email, password: hashedPassword });
  },

  login: async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN || "1d",
    });
    return { token };
  },
};

module.exports = authService;
