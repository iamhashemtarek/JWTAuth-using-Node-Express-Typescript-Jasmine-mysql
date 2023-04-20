import { Request, Response, NextFunction } from "express";
import AppError from "../utils/AppError";

const globalErrorMiddleware = <
  t extends { message: string; status: string; statusCode: number }
>(
  err: t,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.message = err.message || "somthing went wrong";
  err.status = err.status || "error";
  err.statusCode = err.statusCode || 500;

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
  });
};

export default globalErrorMiddleware;
