import express from "express";
import { Router } from "express";
import { globalMiddleware } from "./middlewares/globalMiddleware";
import index from "./routes/Index";
// Aplicação da api Express
class App{
    constructor(public app: express.Application = express()){
        this.routes();
        this.middlewares();
    }

    routes(){
        this.app.use("/" ,index);
    }

    middlewares(){
        this.app.use(express.json());
    }
}

export default new App().app;