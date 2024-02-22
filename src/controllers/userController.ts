import { createJWT, hashPassword, comparePasswords } from "../auth/auth";
import prisma from "../utils/db";

const createUser = async (req, res) => {
  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      password: await hashPassword(req.body.password),
    },
  });

  const token = createJWT(user);
  res.json({ token });
};

const signInUser = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    },
  });

  const isValid = await comparePasswords(req.body.password, user.password);
  if (!isValid) {
    res.status(401).json({ message: "Invalid Credentials" });
    return;
  }

  const token = createJWT(user);
  res.json({ token });
};

export { createUser };
