'use strict';
module.exports = (sequelize, DataTypes) => {
  const sauce = sequelize.define('sauce', {
    name: DataTypes.STRING,
    isReal: DataTypes.BOOLEAN,
    color: DataTypes.STRING
  }, {});
  sauce.associate = function(models) {
    sauce.hasMany(models.pasta, {foreignKey: 'sauceId'})
  };
  return sauce;
};
