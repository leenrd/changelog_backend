import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Response, Request } from "express";

const comparePasswords = (password, hash) => {
  return bcrypt.compare(password, hash);
};

const hashPassword = (password) => {
  return bcrypt.hash(password, 10);
};

export const createJWT = (user) => {
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET
  );
  return token;
};

export const routeProtection = (req: Request, res: Response, next) => {
  const bearer = req.headers.authorization;

  if (!bearer) {
    res.status(401).json({ message: "Not Authorized" });
    return;
  }

  const [, token] = bearer.split(" ");
  if (!token) {
    res.status(401).json({ message: "Invalid Token" });
    return;
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    console.log(payload);
    next();
    return;
  } catch (e) {
    console.log(e);
    res.status(401).json({ message: "Note Authorized" });
    return;
  }
};
