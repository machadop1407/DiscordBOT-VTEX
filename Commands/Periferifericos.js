const fetch = require("node-fetch");

module.exports = (Discord, message, options, categoryId) => {
  let items = [];
  fetch(
    `https://cosmetics2.vtexcommercestable.com.br/api/catalog_system/pvt/products/GetProductAndSkuIds?categoryId=${categoryId}`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      message.reply("Escolha uma das opções abaixo (Ex: -buy 2}) ⬇️");
      Object.entries(data.data).forEach(async ([id, value]) => {
        items.push(id);
        await fetch(
          `https://cosmetics2.vtexcommercestable.com.br/api/catalog/pvt/product/${id}`,
          options
        )
          .then((response) => response.json())
          .then(async (item) => {
            await message.author.send(
              new Discord.MessageEmbed()
                .setAuthor(item.Name)
                .setColor("#fc03be")
                .setDescription(`Price: ${item.TaxCode}`)
                .setImage(item.Description)
            );
          });
      });
    });
  return items;
};
