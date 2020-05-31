module.exports = {
	name: 'whosthat',
	description: 'whosthat!',
	execute(message, args) {
		message.channel.send(`You bean they call you ${message.author.username}`);
	},
};
