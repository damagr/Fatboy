import { Client, Intents } from "discord.js";
/*import axios from "axios";*/
import express from "express";

const server = express();

server.get('/', function (req, res) {
    res.send('FatboyTracker')
});

function keepAlive() {
    server.listen(3000, () => {
        console.log("Server is ready.");
    });
}

const prefix = "!"
const helpMessage = "```md \n-Si tu frase termina con un cinco el bot te sorprenderá.```";
const errorMessage = "```md \nComando inválido, utiliza !help para saber los comandos disponibles.```";
const cinco = ['5', 'cinco']

const client = new Client({
    intents: [Intents.FLAGS.GUILDS],
});

const BOT_ID = process.env["BOT_ID"];
const BOT_TOKEN = process.env["BOT_TOKEN"];

client.once("ready", () => {
    console.log("We on . . .");

    const SERVER_ID = process.env["SERVER_ID"];
    const guild = client.guilds.cache.get(SERVER_ID);
    const BOT = guild.members.cache.get(BOT_ID);

    setInterval(async () => {
        getPrice();
        BOT.user.setActivity(lastTokenID + " " + lastPrice + '$', { type: "WATCHING" }).catch(console.error);
    }, 7500);
});

client.on("message", message => {
    if (message.author.bot) return;
    if (message.content.toLowerCase().includes(cinco[0]) || message.content.toLowerCase().includes(cinco[1])) message.channel.send('Por el culo te la hinco!');
    if (message.content.startsWith(prefix)) return;
    else if (message.content.startsWith(`${prefix}help`)) message.channel.send(helpMessage);
    else message.channel.send(errorMessage);
});

keepAlive();
client.login(BOT_TOKEN);
