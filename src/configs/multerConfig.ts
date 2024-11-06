import multer from "multer";
import { Request } from "express";
import path from "path"


const fileFilter = (req: Request, file: Express.Multer.File, callback: multer.FileFilterCallback) => {
    const allowedMimeTypes = ["audio/mpeg", 'audio/wav', 'audio/ogg', 'audio/mp3'];

    if(allowedMimeTypes.includes(file.mimetype)){
        callback(null, true);
    }else{
        callback(null, false);
    }
}

const storage = multer.diskStorage({
    destination: (req: Request, file: Express.Multer.File, callback) => {
        callback(null, "uploads/");
    },

    filename: (req: Request, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        callback(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
})

const upload = multer({storage, fileFilter});

export default upload