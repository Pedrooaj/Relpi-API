import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import database from "../database/databaseConfig";
import dotenv from "dotenv";
dotenv.config();
const jsonwebtokenInfo = {
    time: process.env.JWT_TIME as string,
    secret: process.env.JWT_SECRET as string
}


class AuthController {
    public async create(req: Request, res: Response) {
        const { nome, password } = req.body;

        const hashedPassword = bcrypt.hashSync(password, 10);

        try {
            const registrar = await database.from('Auth').insert({ nome, password: hashedPassword });

            res.json({
                status: registrar.statusText
            });

        } catch (error) {
            res.json({
                status: "Erro ao cadastrar usuário"
            });

        }

    }

    public async login(req: Request, res: Response) {
        const { nome, password } = req.body;

        try {
            const login = await database.from("Auth").select("*").eq("nome", nome).single();

            if (bcrypt.compareSync(password, login.data.password)) {
                const token = jwt.sign({ id: login.data.id, nome: login.data.nome }, jsonwebtokenInfo.secret, {
                    expiresIn: jsonwebtokenInfo.time
                })
                res.json({
                    token: token
                })
            } else {
                res.json({
                    status: "Senha incorreta"
                })
            }

        } catch (error) {
            res.json({
                status: "Erro ao efetuar login"
            })
        }

    }
}

export default new AuthController();