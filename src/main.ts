import App from "./App";
import Bot from "./Bot";

const main = async () => {
    const bot = new Bot();
    try {
        bot.init();
        

        App.listen("3001", (error?: Error) => {
            if (!error) {
                console.log("Servidor rodando na porta 3000");

            } else {
                console.log("Aguardando conexão do Bot no Whatsapp!");
            }
        });
    } catch (error) {
        console.log("Erro ao inicializar o Bot: " + error);
    }
}

main();











