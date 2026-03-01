const authService = require("~/services/auth");

const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await authService.register(email, password);
    res.status(201).json({ id: user._id, email: user.email });
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { token } = await authService.login(email, password);
    res.status(200).json({ token });
    console.log(token);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message });
  }
};

module.exports = {
  register,
  login,
};
