module.exports = {
  name: "hello",
  description: "Hello Greeting!",
  cooldown: 5,
  aliases: ["wagwan", "yerp"],
  execute(message, args) {
    message.channel.send("Wagwan fam.");
  },
};
