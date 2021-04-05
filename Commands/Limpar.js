module.exports = async (Discord, message) => {
  await message.channel.messages.fetch().then((messages) => {
    message.channel.bulkDelete(messages);
  });
};
