module.exports = (Discord, message) => {
  message.author.send(
    new Discord.MessageEmbed()
      .setColor("#fc03be")
      .setTitle(`Ajuda`)
      .setDescription(
        `
          AQUI VAI UMA LISTA COM MEUS COMANDOS:
          `
      )
      .addFields(
        { name: "`-buscar`", value: "Busque por um produto" },
        {
          name: "`-limpar`",
          value: "Reinicie nossa conversa limpando as mensagens do site",
        },
        {
          name: "`-parar`",
          value: "Pare sua busca e reinicie nossa conversa",
        }
      )
  );
};
