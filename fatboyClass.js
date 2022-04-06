/* Constantes para arranque y funcionamiento del BOT */ 
export const BOT_ID = process.env["BOT_ID"];
export const BOT_TOKEN = process.env["BOT_TOKEN"];
export const SERVER_ID = process.env["SERVER_ID"];

/* Constantes para evitar textos en código */ 
export const prefix = "!"
export const helpMessage = "```md\n - Si tu frase termina con un cinco el bot te sorprenderá.```";
export const errorMessage = "```md\n Comando inválido, utiliza !help para saber los comandos disponibles.```";

/* Constantes personalizadas de las funciones */
export const cinco = ["5", "cinco"];
export const stop = ["<:", "http"];
export const fatboysRole = '840177913033654285';
export const birthDays = [
  {
    "Name": "Kai", 
    "Birth": "09/05"
  },
  {
    "Name": "Hiki", 
    "Birth": "26/10"
  },
  {
    "Name": "Tosti", 
    "Birth": "18/02"
  },
  {
    "Name": "Sise", 
    "Birth": "19/11"
  },
  {
    "Name": "Cami", 
    "Birth": "12/11"
  },
  {
    "Name": "Puli", 
    "Birth": "20/08"
  }
]