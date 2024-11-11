import { Router } from "express";

import AuthController from "../controllers/AuthController";
import requireToken from "../middlewares/requireToken";


const authRoute: Router = Router();

// Rota para efetuar a criação do user
authRoute.post('/', AuthController.create);

// Rota responsavel por gerar token JWT e login
authRoute.get("/login", AuthController.login);

// Rota responsavel por verificar se o Token JWT e válido
authRoute.get("/verify", requireToken, AuthController.verify);

export default authRoute;