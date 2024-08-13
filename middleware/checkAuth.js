const jwt = require("jsonwebtoken");

const CheckAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "hello@44");

    req.userdata = decodedToken;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ msg: "Invalid token or Expire token.!!" });
  }
};

module.exports = {
  CheckAuth,
};
