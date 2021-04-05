module.exports = (Discord, message) => {
  message.author.send(
    new Discord.MessageEmbed()
      .setAuthor("VTEX BOT")
      .setColor("#fc03be")
      .setTitle(`Qual produto te interessa?`).setDescription(`
          -Teclado
          -Mouse
          -Headset
          
          Para escolher um, digite -{CLASSE}
        `)
  );
};
