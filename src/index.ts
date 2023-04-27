import express, { Application, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });
import morgan from "morgan";
import AppError from "./utils/AppError";
import globalErrorMiddleware from "./middleware/error.middleware";
import routes from './routes/index'

//create app  instance
const app: Application = express();

//middlewares
app.use(express.json()); //parsing req body
app.use(morgan("dev"));
if (process.env.NODE_ENV == "dev") { //logging http requests
}

//routes
app.use('/api/v1', routes)

//404 routes
app.all('*', (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`this route ${req.originalUrl} is not found on this server`, 404));
})

//global error middleware
app.use(globalErrorMiddleware)

//start server
const PORT = process.env.PORT || 9090;
app.listen(PORT, () => {
  console.log(`app is  listening on port ${PORT}`);
});

export default app;
