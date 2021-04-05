const fetch = require("node-fetch");

module.exports = (Discord, message, options, args) => {
  let items = [];
  fetch(
    `https://cosmetics2.vtexcommercestable.com.br/api/catalog_system/pvt/products/GetProductAndSkuIds?categoryId=2`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      Object.entries(data.data).forEach(async ([id, value]) => {
        await fetch(
          `https://cosmetics2.vtexcommercestable.com.br/api/catalog/pvt/product/${id}`,
          options
        )
          .then((response) => response.json())
          .then(async (item) => {
            if (item.TaxCode) {
              const itemDescription = item.Description.split(",");

              if (
                args[1].toLowerCase() ==
                (args[0].toLowerCase() == "fortnite"
                  ? itemDescription[4].toLowerCase()
                  : itemDescription[5].toLowerCase())
              ) {
                items.push(item.Id);

                await message.author.send(
                  new Discord.MessageEmbed()
                    .setColor("#fc03be")
                    .setTitle(item.Name)
                    .setImage(itemDescription[6])
                    .addFields(
                      {
                        name: "Placa de Video",
                        value: itemDescription[0],
                      },
                      {
                        name: "Processador",
                        value: itemDescription[1],
                      },
                      {
                        name: "Mémoria RAM",
                        value: itemDescription[2],
                      },
                      {
                        name: "Armazenamento",
                        value: itemDescription[3],
                      },
                      {
                        name: "Preço",
                        value: `R$${item.TaxCode},00`,
                      }
                    )
                );
              }
            }
          });
      });
    });

  return items;
};
