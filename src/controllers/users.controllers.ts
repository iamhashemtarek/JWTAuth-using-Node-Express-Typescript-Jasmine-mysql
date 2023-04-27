import UserModel from "../models/users.model";
import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
const userModel = new UserModel();

export const create = catchAsync(async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await userModel.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      userID: user.insertId,
    },
  });
})
