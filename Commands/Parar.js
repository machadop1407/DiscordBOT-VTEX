module.exports = (Discord, message, stages) => {
  stages = [];
  message.author.send(
    new Discord.MessageEmbed()
      .setAuthor("VTEX BOT")
      .setColor("#fc03be")
      .setTitle(`Parar Pesquisa`).setDescription(`
        Obrigado por pesquisar com a gente!
        Eu acabei de parar sua pesquisa. Se quiser procurar algo mais digite "-search".
        Até a próxima! 
        `)
  );
};
