import App from "./App";


App.listen("3000", (error?: Error) => {
    try {
        console.log("Servidor rodando na porta 3000");
        
    } catch (error) {
        console.log("Erro:", error);
        
    }
})