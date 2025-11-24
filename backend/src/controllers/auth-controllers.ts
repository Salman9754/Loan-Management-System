import type { Request, Response, NextFunction } from "express";

export const signUp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json({
    success: true,
    message: "controllers working",
  });
};

export const signIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json({
    success: true,
    message: "controllers working",
  });
};

export const signOut = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json({
    success: true,
    message: "controllers working",
  });
};
