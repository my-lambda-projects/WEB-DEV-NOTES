const readline = require('readline');
const util = require('util');
const { PetType, sequelize } = require('./models');

async function updatePet() {
	const petType = await PetType.create({
		type: 'Jackalope'
	});

	await pause();

	petType.type = 'Kangaroo';
	await petType.save();

	// Here to just close the connection to end
	// the process
	sequelize.close();
}

updatePet();

async function pause() {
	const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
	return new Promise((good) => {
		rl.question('hit enter to continue...', () => {
			good();
			rl.close();
		});
	});
}
