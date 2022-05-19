/* Constantes para arranque y funcionamiento del BOT */ 
export const BOT_ID = process.env["BOT_ID"];
export const BOT_TOKEN = process.env["BOT_TOKEN"];
export const SERVER_ID = process.env["SERVER_ID"];

/* Constantes para evitar textos en código */ 
export const prefix = "!"
export const helpMessage = "```md\n - Si tu frase contiene un cinco el bot te sorprenderá. \n - !old - Muestra la antigüedad del servidor. \n - !blue - Cuenta la maravillosa história de Blue. \n - !pizzah - Muestra la receta de la pizza de Hiki (la buena). \n - !pizzak - Muestra la receta de la pizza de Kai (un reversionado de la de Hiki). \n - !perro - Cuenta la maravillosa história del perro de Koex (un examigo de Tosti).```";
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
export const blue = "```fix\n De como Blue dejó de hablarnos por su propia culpa.``` ```md\n 1. Blue pasa un perfil de IG de una chavala que 'no sabia quien era'\n 2. Acto seguido: 'Ah vale, es de mi curro' (lo borra).\n 3. Kai escribe el IG de la chaval porque se llama igual que mi prima y se parecia hasta el instagram.\n 4. Blue se enfada porque aquí 'hay muchos gilipollas sueltos'.\n 5. Guille pasa el IG unas 6 veces, Blue nos llama gilipollas y lo pineamos. Nadie de aquí agrega a la chavala ni le habla a la chavala ni molesta a la chavala ni nada (tan gilipollas no seremos).\n 6. Blue se va, nadie se entera hasta 2 días después, nos la sudó y hasta ahora.```";
export const pizzah = "```fix\n Pizza estilo Hiki (no la quemada) 24h de reposo en nevera para 2 pizzas``` ```md\n - 360 gramos de harina de fuerza (cualquier harina vale).\n - 230-235 ml de agua (algo más de un vaso, aunque podemos ajustar).\n - 6 gramos de sal (una cuchadarita de postre rasa).\n - 1 gramo de levadura fresca (el tamaño equivalente a un garbanzo; si fuese levadura seca, basta con el equivalente a una lenteja).```";
export const pizzak = "```fix\n Pizza estilo Kai 4h de reposo a temperatura ambiente 1 persona``` ```md\n - 160 gramos de harina de fuerza (utilizo una especial para pizza con levadura incluida).\n - 110 ml de agua .\n - 6 gramos de sal (una cuchadarita de postre rasa).```";
export const perro = "```fix\n História trambólica del perro de Koex``` ```md\n 1. Koex cobra 3000€ al mes (no sabemos en que trabaja)\n 2. Introducimos los personajes Madre de Koex y Amigo de Koex (Abreviaremos con MK y AK (47 jajajaj))\n 3. Koex regala un perrete to mono de 1500€ a AK. \n 4. MK se entera y le dice a Koex que le pida los 1500€ a AK. \n 5. AK es retrasito mental y accede a pagar en comodos plazos de 100 euracos al mes por el puto perro que le han 'regalado'. \n 6. MK revisa cada mes que AK ingresa los 100 euracos a Koex. \n PD: El perro no murió ni sufrió daños.```";