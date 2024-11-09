import { Router } from "express";

import AuthController from "../controllers/AuthController";


const authRoute: Router = Router();

// Rota para efetuar a criação do user
authRoute.post('/', AuthController.create);

// Rota responsavel por gerar token JWT e login
authRoute.get("/login", AuthController.login);

export default authRoute;