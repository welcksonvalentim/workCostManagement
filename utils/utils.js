require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = process.env.JWT_SECRET;

const createToken = (user) => {
  const { email } = user.dataValues;
  const JWT_CONFIG = { expiresIn: '7d', algorithm: 'HS256' };
  const token = jwt.sign({ data: email }, secret, JWT_CONFIG);
  return token;
};

const decodeToken = async (authorization) => {
  const decoded = jwt.verify(authorization, secret);
  const user = await User.findOne({ where: { email: decoded.data } });
  return user.dataValues;
};

module.exports = { createToken, decodeToken };