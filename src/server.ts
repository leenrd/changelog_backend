import express, { Request, Response } from "express";
import { product_router, rn_router, update_router } from "./routes";
import morgan from "morgan";
import cors from "cors";
import { routeProtection } from "./auth/auth";
import helmet from "helmet";
import user_router from "./routes/userRoutes";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
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
app.use("", routeProtection, update_router);
app.use("", routeProtection, user_router);

export default app;
