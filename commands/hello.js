module.exports = {
	name: 'hello',
	description: 'Hello Greeting!',
	execute(message, args) {
		message.channel.send('Wagwan fam.');
	},
};
