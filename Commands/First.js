module.exports = (Discord, message) => {
  message.author.send(
    new Discord.MessageEmbed()
      .setColor("#fc03be")
      .setTitle("Aqui você escolhe o melhor PC para seu game")
      .addFields(
        {
          name: "Qual jogo voce planeja jogar no seu PC novo?",
          value: `  
            Fortnite
            Cyberpunk 
          `,
        },
        {
          name: "Qual resolução você quer ter?",
          value: `   
            Low
            Medium
            High 
          `,
        },
        {
          name: "\u200b",
          value: `   
           \u200B 
          `,
        },
        {
          name:
            "Para procurar seu novo PC digite `-jogo {NOME DO JOGO} {RESOLUÇÃO}`",
          value: "\u200b",
        }
      )
  );
};
