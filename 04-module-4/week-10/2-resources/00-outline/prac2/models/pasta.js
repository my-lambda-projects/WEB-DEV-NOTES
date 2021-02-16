'use strict';
module.exports = (sequelize, DataTypes) => {
  const pasta = sequelize.define('pasta', {
    label: DataTypes.STRING,
    description: DataTypes.TEXT,
    taste: DataTypes.DECIMAL,
    noodleId: DataTypes.INTEGER,
    sauceId: DataTypes.INTEGER
  }, {});
  pasta.associate = function(models) {
    pasta.belongsTo(models.noodle, {foreignKey: 'noodleId'}),
    pasta.belongsTo(models.sauce, {foreignKey: 'sauceId'})
  };
  return pasta;
};
