import express, { Request, Response } from "express";
import { product_router, rn_router, update_router } from "./routes";
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200);
});

app.use("/api", product_router);
app.use("/api", rn_router);
app.use("/api", update_router);

export default app;
