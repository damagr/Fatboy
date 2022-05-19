import { Client, Intents } from "discord.js";
/*import axios from "axios";*/
import moment from "moment";
import express from "express";
import * as FV from "./fatboyClass.js";

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const server = express();
server.get("/", function (req, res) { res.send("Fatboy"); });

/* Instanciación del cliente de discord */
client.once("ready", () => {
  const guild = client.guilds.cache.get(FV.SERVER_ID);
  const BOT = guild.members.cache.get(FV.BOT_ID);

  BOT.user.setActivity(FV.botActivity, { type: "WATCHING" }).catch(console.error);

  checkBirthday(moment().format("DD/MM"), client);

  setInterval(async () => {
    checkBirthday(moment().format("DD/MM"), client);
  }, 86400000);
});

client.on("message", message => {
  /* Comprobación de que el mensaje no sea del propio bot */
  if (message.author.bot) return;
  /* Comprobación del cuerpo del mensaje*/
  if (checkCinco(message)) message.channel.send("Por el culo te la hinco.");
  /* Comprobación de si es un comando con prefijo */
  if (!message.cleanContent.startsWith(FV.prefix)) return;
  /* Comandos disponibles y sus casos */
  switch (true) {
    case message.cleanContent.startsWith(`${FV.prefix}help`):
      message.channel.send(FV.helpMessage);
      break;
    case message.cleanContent.startsWith(`${FV.prefix}old`):
      message.channel.send("El día de la creación del servidor fue el: " + moment(client.guilds.cache.get(FV.SERVER_ID).createdAt).format("DD-MM-YYYY"));
      break;
    case message.cleanContent.startsWith(`${FV.prefix}blue`):
      message.channel.send(FV.blue);
      break;
    case message.cleanContent.startsWith(`${FV.prefix}pizzah`):
      message.channel.send(FV.pizzah);
      break;
    case message.cleanContent.startsWith(`${FV.prefix}pizzak`):
      message.channel.send(FV.pizzak);
      break;
    case message.cleanContent.startsWith(`${FV.prefix}perro`):
      message.channel.send(FV.perro);
      break;
    default:
      break;
  }
});

function checkCinco(message) {
  let cleanMessage = message.cleanContent.toLowerCase().replace("15", "");
  let DEP = true;
  let RIP = false;
  FV.stop.map(item => { if (message.cleanContent.includes(item)) DEP = false });
  if (DEP) {
    if (FV.cinco.map(item => cleanMessage.includes(item) ? RIP = true : ""));
    return RIP;
  } else {
    return DEP;
  }
}

function checkBirthday(date, client) {
  FV.birthDays.find(item => {
    if (item.Birth == date) {
      if (item.Name != "Fatboys") {
        client.channels.cache.get(FV.fatboysChannel).send("Hoy es el cumpleaños de " + item.Name + `!!!\nFelicitadle gordos de mierda! <@&${FV.fatboysRole}>`);
      } else {
        client.channels.cache.get(FV.fatboysChannel).send("Hoy es el " + moment("2017", "YYYY").fromNow().slice(0, 1) + "º aniversario de " + item.Name + `!!!\nFelicidades gordos de mierda! <@&${FV.fatboysRole}>`);
      }
    }
  });
}

function keepAlive() {
  server.listen(5000, () => {
    console.log("Server is ready.");
  });
}

keepAlive();
client.login(FV.BOT_TOKEN);