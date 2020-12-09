'use strict';
module.exports = (sequelize, DataTypes) => {
	const Pet = sequelize.define(
		'Pet',
		{
			name: {
				type: DataTypes.STRING,
				validate: {
					notEmpty: true
				}
			},
			petTypeId: DataTypes.INTEGER,
			age: DataTypes.INTEGER
		},
		{}
	);
	Pet.associate = function(models) {
		Pet.belongsTo(models.PetType, { foreignKey: 'petTypeId' });

		const columnMapping = {
			through: 'PetOwner',
			otherKey: 'ownerId',
			foreignKey: 'petId'
		};

		Pet.belongsToMany(models.Owner, columnMapping);
	};
	return Pet;
};
