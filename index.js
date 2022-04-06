/*import axios from "axios";*/
import { Client, Intents } from "discord.js";
import moment from "moment";
import express from "express";
import * as FV from "./fatboyClass.js";

const client = new Client({ intents: [Intents.FLAGS.GUILDS]});
const server = express();
server.get("/", function (req, res) { res.send("Fatboy");});

client.once("ready", () => {
  const guild = client.guilds.cache.get(FV.SERVER_ID);
  const BOT = guild.members.cache.get(FV.BOT_ID);
  BOT.user.setActivity("Buffet libre", { type: "WATCHING" }).catch(console.error);
  checkBirthday(moment().format("DD/MM"), client);
  setInterval(async () => {
    checkBirthday(moment().format("DD/MM"), client);
  }, 86400000);
});

client.on("message", message => {
  if (message.author.bot) return;
  if (checkCinco(message)) message.channel.send("Por el culo te la hinco.");
  if (!message.cleanContent.startsWith(FV.prefix)) return;
  else if (message.cleanContent.startsWith(`${FV.prefix}help`)) message.channel.send(FV.helpMessage);
  else message.channel.send(FV.errorMessage);
});

function checkCinco(message) {
  let cleanMessage = message.cleanContent.toLowerCase().replace("15", "");
  let DEP = true;
  let RIP = false;
  FV.stop.map(item => { if (message.cleanContent.startsWith(item)) DEP = false });
  if (DEP) {
    if (FV.cinco.map(item => cleanMessage.includes(item) ? RIP = true : ""));
    return RIP;
  } else {
    return DEP;
  }
}

function checkBirthday(date, client){
  FV.birthDays.find(item => {
    if(item.Birth == date) client.channels.cache.get("913377699161047081").send("Hoy es el cumpleaños de "+item.Name+`!!!\nFelicitadle gordos de mierda! <@&${FV.fatboysRole}>`);
  });
}

function keepAlive() {
  server.listen(3000, () => {
      console.log("Server is ready.");
  });
}

keepAlive();
client.login(FV.BOT_TOKEN);