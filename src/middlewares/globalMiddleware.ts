import { Request, Response, NextFunction } from "express"

export const globalMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log("Passei no Middleware Global");
    next();
}
