function isEmail(req, res, next) {
  const { email } = req.body;
  const REGEX_EMAIL = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i; 
  if (!email) return res.status(401).json({ message: '"email" is required' });
  
  if (!REGEX_EMAIL.test(email)) {
    return res.status(404).json({ message: '"email" is not allowed' });
  }
    next();
}

function isPassword(req, res, next) {
  const { password } = req.body; 
  if (!password) return res.status(401).json({ message: '"password" is required' });  
  if (password.length < 6) {
    return res.status(404).json({ message: '"password" is not allowed' });
  }
  next();
}

module.exports = { isEmail, isPassword };