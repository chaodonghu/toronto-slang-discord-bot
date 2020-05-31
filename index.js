const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	console.log(message.content);
  if (message.content === '!ping') {
	// send back "Pong." to the channel the message was sent in
	message.channel.send('Pong.');
}
});

client.login('NzE2NzI1OTgwNjE3NjM3OTQy.XtP-XQ.fJPooRi4kPmodVphyK5XdsaiE3c');
