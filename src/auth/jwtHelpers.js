const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfigs = {
  algorithm: 'HS256',
  expiresIn: '15min',
};

const createToken = (payload) => {
  const token = jwt.sign(payload, secret, jwtConfigs);
  return token;
};

const verifyToken = (token) => {
  try {
    const payload = jwt.verify(token, secret);
    return payload;
  } catch (error) {
    return { isError: true, error };
  }
};

module.exports = { createToken, verifyToken };
