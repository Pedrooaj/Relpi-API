import { NextFunction, Response } from "express";
import { AuthRequest } from "../interfaces/AuthRequest";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();


const secret = process.env.JWT_SECRET as string;

const requireToken = (req: AuthRequest , res: Response, next: NextFunction) => {
   const authorization = req.headers['authorization'];

    const token  = authorization?.split(" ")[1] as string;
    
    if(!token){
        res.status(401).json({
            status: "Não Autorizado"
        })
    }

    try {
        const decoded = jwt.verify(token, secret) as JwtPayload;
        req.user = { id: decoded.id, nome: decoded.nome };

        next();
        
    } catch (error) {
        res.status(403).json({
            status: "Token Inválido"
        })
    }

    next();


}

export default requireToken;