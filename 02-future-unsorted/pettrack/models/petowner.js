'use strict';
module.exports = (sequelize, DataTypes) => {
  const PetOwner = sequelize.define('PetOwner', {
    petId: DataTypes.INTEGER,
    ownerId: DataTypes.INTEGER
  }, {});
  PetOwner.associate = function(models) {
    // associations can be defined here
  };
  return PetOwner;
};