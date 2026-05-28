import jwt from "jsonwebtoken";

const authMiddlware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.json("No token given");
  }

  const token = authHeader.split(" ")[1];
  
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (error) {
    return res.json(error.message);
  }
};

export default authMiddlware
