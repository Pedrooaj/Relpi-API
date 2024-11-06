import { Router } from "express";
import { Request, Response } from "express";
import upload from "../configs/multerConfig";
import multer from "multer";

const index: Router = Router();

// rota para enviar audio
index.post("/audio", upload.single('audio'),(req: Request, res: Response): void => {
    if(!req.file){
        res.status(400).json({
            erro: "Arquivo inexistente"
        });
        return;
    }

    res.status(200).json({
        status: "Sucess"
    })
    return;
    


})


export default index;
