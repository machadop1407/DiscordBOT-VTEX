const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const {
  ajuda,
  limpar,
  parar,
  buscar,
  second,
  first,
  perifericos,
  checkout,
  jogo,
} = require("./Commands");
const { optionsGet, optionsPost } = require("./Headers");
client.login(config.BOT_TOKEN);

const prefix = "-";

let stages = [];
var items = [];

client.on("message", async (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);

  const args = commandBody.split(" ");
  const command = args.shift().toLowerCase();

  if (command == "ajuda") {
    ajuda(Discord, message);
  }

  if (command == "limpar") {
    limpar(Discord, message);
  }

  if (command == "parar") {
    parar(Discord, message);
    stages = [];
  }

  if (command == "buscar") {
    stages.push("buscar");
    buscar(Discord, message);
  }
  if (command == "first" && stages[stages.length - 1] === "buscar") {
    stages.push("escolhaJogo");
    first(Discord, message);
  }

  if (command == "jogo") {
    items = jogo(Discord, message, optionsGet, args);
  }
  if (command == "second" && stages[stages.length - 1] === "buscar") {
    stages.push("escolhaPerifericos");
    second(Discord, message);
  }

  if (
    command == "teclado" &&
    stages[stages.length - 1] == "escolhaPerifericos"
  ) {
    items = perifericos(Discord, message, optionsGet, 3);
  }

  if (
    command == "headset" &&
    stages[stages.length - 1] == "escolhaPerifericos"
  ) {
    items = perifericos(Discord, message, optionsGet, 7);
  }

  if (command == "mouse" && stages[stages.length - 1] == "escolhaPerifericos") {
    items = perifericos(Discord, message, optionsGet, 6);
  }

  if (command == "buy") {
    let itemId;
    switch (args[0]) {
      case "1":
        itemId = 0;
        break;
      case "2":
        itemId = 1;
        break;
      case "3":
        itemId = 2;
        break;
      case "4":
        itemId = 3;
        break;
    }
    checkout(Discord, message, optionsPost, optionsGet, items[itemId]);
  }
});
