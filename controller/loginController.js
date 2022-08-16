const { createToken } = require('../utils/utils');

const { User } = require('../models');

const loginUser = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).json({ message: 'Invalid fields' });

    const token = createToken(user);

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error });
  }
};

module.exports = { loginUser };