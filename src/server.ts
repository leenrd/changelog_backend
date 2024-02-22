import express, { Request, Response } from "express";
import * as routes from "./routes";
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200);
});

export default app;
