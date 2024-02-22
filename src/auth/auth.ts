import jwt from "jsonwebtoken";
import { Response, Request } from "express";

export const createJWT = (user) => {
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET
  );
  return token;
};

export const routeProtection = (req: Request, res: Response) => {
  const bearer = req.headers.authorization;

  if (!bearer) {
    res.status(401).json({ message: "Not Authorized" });
    return;
  }
};
