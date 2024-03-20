import { Router, Request, Response, NextFunction } from "express";

const router = Router();

router.get(
  "/",
  (req: Request, res: Response, next: NextFunction) => {
    console.log("Middleware 1");
    next();
  },
  (req: Request, res: Response, next: NextFunction) => {
    console.log("Middleware 2");
    next();
  },
  (req: Request, res: Response, next: NextFunction) => {
    console.log("Middleware 3");
    next();
  },
  (req: Request, res: Response) => {
    res.send({
      user: "DONE",
    });
  }
);
