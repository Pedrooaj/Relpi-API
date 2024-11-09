import { Client, LocalAuth, Message } from "whatsapp-web.js";
import qrcode from "qrcode-terminal";


const saudados = new Set();
// Aplicação do bot com whatsapp web js
class Bot {
    constructor(
        public client = new Client({
            authStrategy: new LocalAuth(),
            restartOnAuthFail: true,
            puppeteer: {
                headless: true
            }
        })
    ) {
        this.configs();
        this.commands();
    }

    public async commands(){
        this.client.on('message', async (message: Message) => {
            const contactId = message.from;
            const contact = await message.getContact();
            const name = contact.pushname || "Cliente";
            const msg = message.body.toLowerCase();
            const arraydeSaudacao = ['oi','ola','hi', 'hello', 'olá'];
            if(!saudados.has(contactId) && arraydeSaudacao.includes(msg)){
                message.reply(`Olá, *${name}* Seja bem vindo(a) ao bot *Relpi*!\nSua segurança em um clique 🛡️ \n\nDigite para mais Informações ℹ️  \n\n*1 - Sobre o Projeto* \n*2 - Integrantes da equipe* ` );
                saudados.add(contactId);
            }

            if(msg == "1"){
                message.reply("*📖 Resumo:*\n\nRelpi e um projeto de feira de ciências da feira da Escola de *Pedro de Queiroz Lima*, o nosso projeto se baseia em um dispositivo que consegue identificar agressões a mulheres e realiza denuncia/alerta de forma discreta em tempo real para o contato de emergência.\n\n*⚙️ Aspectos Técnicos:*\n \nNossa equipe utiliza como base um microcontrolador chamado esp32 onde nele contemos Wifi 2.4ghz e 5ghz além bluetooth low energy onde ele captura a todo momento se está ocorrendo alguma agressão, quando identificada ela envia as informações para o nosso endpoint e nele alertaremos ao contato mais proximos e realizarmos a denuncia ")
            }
            else if(msg == "2"){
                message.reply("*Orientadores:* \nEverton Stênio \nPedro Antônio \nIan Alas \nMarina Sena\n\n*Alunos:* \nIaclara da Costa Rodrigues Silva\nSarah Mileidy Miranda da Camara\nArlete Julia Gama da Costa\nEike da Costa Miranda\nHeytor Miranda Almeida Peixoto\nJoão Pedro Gondim Frangoso\nJoaquim Bonifacio dos Santos Neto\nRodrigo Monteiro Oliveira\n\n*Link do nosso Projeto:* \n\nhttps://www.youtube.com/watch?v=f-VTHGxLWJE")
            }else{
                message.reply("Ops! não entendo oque você diz...")
            }
        })
        
    }

    public async init(){
        await this.client.initialize();
    }

    public configs(){
        this.client.on('qr', async (qr) => {
            qrcode.generate(qr, { small: true });
        })

        this.client.on('authenticated', async () => {
            console.log("Whatsapp Auteticado");
        });

        this.client.on('ready', async () => {
            const version = await this.client.getWWebVersion();
            console.log(`Bot Iniciado na versão ${version}`);
        })
    }
}




export default Bot;




