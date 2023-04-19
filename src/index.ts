import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });
import morgan from "morgan";

//create app  instance
const app: Application = express();

//middleware
app.use(express.json());
if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

//routes
app.get("/api/v1/myroute", (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    message: "hellow, world",
  });
});
//start server
const PORT = process.env.PORT || 9090;
app.listen(PORT, () => {
  console.log(`app is  listening on port ${PORT}`);
});

export default app;
