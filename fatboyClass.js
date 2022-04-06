/* Constantes para arranque y funcionamiento del BOT */ 
export const BOT_ID = process.env["BOT_ID"];
export const BOT_TOKEN = process.env["BOT_TOKEN"];
export const SERVER_ID = process.env["SERVER_ID"];

/* Constantes para evitar textos en código */ 
export const prefix = "!"
export const helpMessage = "```md\n - Si tu frase contiene un cinco el bot te sorprenderá. \n - !old - Muestra la antigüedad del servidor. \n - !blue - Cuenta la maravillosa história de Blue.```";
export const errorMessage = "```md\n Comando inválido, utiliza !help para saber los comandos disponibles.```";
export const botActivity = "Buffet libre";

/* Constantes personalizadas de las funciones */
export const cinco = ["5", "cinco"];
export const stop = ["<:", "http"];
export const fatboysRole = '840177913033654285';
export const fatboysChannel = '913377699161047081';
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
  },
  {
    "Name": "Fatboys",
    "Birth": "03/08"
  }
]
export const blue = "```fix\n De como Blue dejó de hablarnos por su propia culpa.``` ```md\n - Blue pasa un perfil de IG de una chavala que 'no sabia quien era'\n - Acto seguido: 'Ah vale, es de mi curro' (lo borra).\n - Kai escribe el IG de la chaval porque se llama igual que mi prima y se parecia hasta el instagram.\n - Blue se enfada porque aquí 'hay muchos gilipollas sueltos'.\n - Guille pasa el IG unas 6 veces, Blue nos llama gilipollas y lo pineamos. Nadie de aquí agrega a la chavala ni le habla a la chavala ni molesta a la chavala ni nada (tan gilipollas no seremos).\n - Blue se va, nadie se entera hasta 2 días después, nos la sudó y hasta ahora.```";

export const pizza = "```fix\n Pizza estilo Hiki (no la quemada) 24h de reposo en nevera para 2 pizzas``` ```md\n - 360 gramos de harina de fuerza (cualquier harina vale).\n - 235-240 ml de agua (algo más de un vaso, aunque podemos ajustar).\n - 6 gramos de sal (una cuchadarita de postre rasa).\n - 1 gramo de levadura fresca (el tamaño equivalente a un garbanzo; si fuese levadura seca, basta con el equivalente a una lenteja).```";