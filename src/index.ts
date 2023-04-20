import express, { Application, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });
import morgan from "morgan";
import AppError from "./utils/AppError";
import globalErrorMiddleware from "./middleware/error.middleware";
import connect from "./database";
import { log } from "console";


//create app  instance
const app: Application = express();

//middleware
app.use(express.json()); //parsing req body
app.use(morgan("dev"));
if (process.env.NODE_ENV == "development") { //logging http requests
}

//routes
app.get("/api/v1/myroute", async(req: Request, res: Response) => {
  const conn = connect();
  const result =( await conn.query('select now()'))[0];  
  res.status(200).json({
    status: 'success',
    data: {
      result
    }
  })
});
app.all('*', (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`this route ${req.originalUrl} is not found on this server`, 404));
})

app.use(globalErrorMiddleware)

//start server
const PORT = process.env.PORT || 9090;
app.listen(PORT, () => {
  console.log(`app is  listening on port ${PORT}`);
});

export default app;
