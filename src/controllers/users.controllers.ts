import UserModel from "../models/users.model";
import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import exp from "constants";
const userModel = new UserModel();

export const create = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await userModel.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        userID: user.insertId,
      },
      message: "user created successfuly"
    });
  }
);

export const getMany = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const users = await userModel.getMany();

    res.status(200).json({
      status: "success",
      data: users,
    });
  }
);

export const getOne = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await userModel.getOne(req.params.id);

    res.status(200).json({
      status: "success",
      data: user,
    });
  }
);

export const updateOne = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const user = await userModel.updateOne(req.body, req.params.id)

  res.status(200).json({
    status: "success",
    message: 'user updated successfuly',
  });
})


export const deleteOne = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  await userModel.deleteOne(req.params.id)

  res.status(200).json({
    status: "success",
    message: 'user deleted successfuly',
  });
})