import express from "express";
import index from "./routes/Index";
import authRoute from "./routes/Auth";

// Aplicação da api Express
class App{
    constructor(public app: express.Application = express()){
        this.middlewares();
        this.routes();
    }

    routes(){
        this.app.use("/" ,index);
        this.app.use("/auth", authRoute);
    }

    middlewares(){
        this.app.use(express.json());
    }
}

export default new App().app;