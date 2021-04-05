module.exports = (Discord, message) => {
  message.author.send(
    `Hey, ${message.author.username} estou feliz em poder te ajudar 😃`
  );
  message.author.send(
    new Discord.MessageEmbed()
      .setColor("#fc03be")
      .setTitle("Aqui você pode melhorar o seu setup gamer!")
      .setDescription("Digite:")
      .addFields(
        {
          name: "`-first`",
          value: "Para achar o computador certo para seu jogo favorito",
        },
        {
          name: "`-second`",
          value: "Para pesquisar novos periféricos",
        }
      )
  );
};
