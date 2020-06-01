const angry = require("../moods/angry.json");

module.exports = {
  name: "angry",
  description:
    "Sentiment analysis when a user types in some sort of angry expression",
  cooldown: 5,
  aliases: ["angry"],
  async execute(message, args) {
    message.channel.send(angry[Math.floor(Math.random() * angry.length)]);
    await message.react("👋");
  },
};
