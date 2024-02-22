import * as dotenv from "dotenv";
import app from "./src/server";

dotenv.config();

app.listen(5000, () => {
  console.log("server is at port:5000");
});
