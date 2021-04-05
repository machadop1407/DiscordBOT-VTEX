if (command == "sum") {
  message.reply(Number(args[0]) + Number(args[1]));
}

if (command == "dog") {
  fetch("https://random.dog/woof.json")
    .then((response) => response.json())
    .then((data) => {
      message.channel.send("Cute Dog:", {
        files: [data.url],
      });
    });
}

if (command == "btc") {
  fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      message.reply(`CURRENT BTC PRICE: ${data.bpi.USD.rate}`); //i wanna fuck pedro tech
    });
}
