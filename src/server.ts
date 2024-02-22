import express, { Request, Response } from "express";
import { product_router, rn_router, update_router } from "./routes";
import morgan from "morgan";
import cors from "cors";
import { routeProtection } from "./auth/auth";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    credentials: true,
  })
);

app.get("/", (req: Request, res: Response) => {
  res.status(200);
});

app.use("/api", routeProtection, product_router);
app.use("/api", routeProtection, rn_router);
app.use("/api", routeProtection, update_router);

export default app;
