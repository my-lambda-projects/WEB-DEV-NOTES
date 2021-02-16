'use strict';
module.exports = (sequelize, DataTypes) => {
	const PetType = sequelize.define(
		'PetType',
		{
			type: {
				type: DataTypes.STRING,
				validate: {
					notEmpty: true
				}
			}
		},
		{}
	);
	PetType.associate = function(models) {
		PetType.hasMany(models.Pet, { foreignKey: 'petTypeId' });
	};
	return PetType;
};
