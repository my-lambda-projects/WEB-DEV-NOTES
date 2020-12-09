'use strict';
module.exports = (sequelize, DataTypes) => {
  const noodle = sequelize.define('noodle', {
    name: DataTypes.STRING,
    isPretty: {
      type: DataTypes.STRING,
      defaultValue: 'Oh no.',
    },
    isCool: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    isStuffed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {});
  noodle.associate = function(models) {
    noodle.hasMany(models.pasta, {foreignKey: 'noodleId'})
  };
  return noodle;
};
