'use strict';
module.exports = (sequelize, DataTypes) => {
	const Owner = sequelize.define(
		'Owner',
		{
			firstName: {
				type: DataTypes.STRING,
				validate: {
					notEmpty: true
				}
			},
			lastName: {
				type: DataTypes.STRING,
				validate: {
					notEmpty: true
				}
			}
		},
		{}
	);
	Owner.associate = function(models) {
		// associations can be defined here
		const columnMapping = {
			through: 'PetOwner',
			otherKey: 'petId',
			foreignKey: 'ownerId'
		};

		Owner.belongsToMany(models.Pet, columnMapping);
	};
	return Owner;
};
