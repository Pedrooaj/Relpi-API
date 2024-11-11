import App from "./App";
import Bot from "./Bot";

const main = async () => {
    // Instancia do bot na aplicação
    //const bot = new Bot();
    try {
        //await bot.init();
        App.listen("3001", (error?: Error) => {
            if (!error) {
                console.log("Servidor rodando na porta 3001");
            }else{
                console.log("Erro ao inicializar na porta 3001");
            }
        });
    } catch (error) {
        console.log("Erro ao inicializar o Bot: " + error);
    }
}

main();











