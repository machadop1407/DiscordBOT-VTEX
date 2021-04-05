const fetch = require("node-fetch");

module.exports = (Discord, message, optionsPost, optionsGet, id) => {
  optionsPost.body = JSON.stringify({
    items: [
      {
        id: id,
        quantity: 1,
        seller: "1",
      },
    ],
    country: "BRA",
  });

  fetch(
    `https://cosmetics2.vtexcommercestable.com.br/api/checkout/pub/orderforms/simulation`,
    optionsPost
  )
    .then((response) => response.json())
    .then((data) => {
      fetch(
        `https://cosmetics2.vtexcommercestable.com.br/api/catalog/pvt/product/${id}`,
        optionsGet
      )
        .then((response) => response.json())
        .then((item) => {
          message.author.send(
            new Discord.MessageEmbed()
              .setAuthor("VTEX BOT")
              .setColor("#fc03be")
              .setTitle(`Muito obrigado pela sua compra!`)
              .setDescription(
                `O produto ${item.Name} foi adicionado ao seu carrinho. O produto será enviado para o endereço registrado na sua conta.
                         `
              )
          );
        });
    });
};
