import { Client, Intents } from "discord.js";
/*import axios from "axios";*/
import express from "express";

const server = express();

server.get('/', function (req, res) {
    res.send('Fatboy')
});

function keepAlive() {
    server.listen(3000, () => {
        console.log("Server is ready.");
    });
}

const prefix = "!"
const helpMessage = "```md\n - Si tu frase termina con un cinco el bot te sorprenderá.```";
const errorMessage = "```md\n Comando inválido, utiliza !help para saber los comandos disponibles.```";
const cinco = ['5', 'cinco', '15'];
const stop = ['<:', 'http']

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

    BOT.user.setActivity('Buffet libre', { type: "WATCHING" }).catch(console.error);
});

client.on("message", message => {
    if (message.author.bot) return;
    if (checkCinco(message)) message.channel.send('Por el culo te la hinco.');
    if (!message.content.startsWith(prefix)) return;
    else if (message.content.startsWith(`${prefix}help`)) message.channel.send(helpMessage);
    else message.channel.send(errorMessage);
});

function checkCinco(message) {
  let cleanMessage = message.content.toLowerCase().replace('15', '');
  let DEP = true;
  let RIP = false;
  stop.map(item => { if (message.content.startsWith(item)) DEP = false });
  if (DEP) {
      if (cinco.map(item => cleanMessage.includes(item) ? RIP = true : ''));
      return RIP;
  } else {
      return DEP;
  }
}

keepAlive();
client.login(BOT_TOKEN);


