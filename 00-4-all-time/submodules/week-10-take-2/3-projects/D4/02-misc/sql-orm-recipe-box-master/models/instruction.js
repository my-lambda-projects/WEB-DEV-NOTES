'use strict';
module.exports = (sequelize, DataTypes) => {
  const Instruction = sequelize.define('Instruction', {
    specification:
    {
        type: DataTypes.TEXT,
        validate: {
            notEmpty: true,
        },
    },
    listOrder:
    {
       type: DataTypes.INTEGER,
       validate: {
           [Op.gt]: 0,
       }
    },
    recipeId: DataTypes.INTEGER
  }, {});
  Instruction.associate = function (models) {
    Instruction.belongsTo(models.Recipe, { foreignKey: 'recipeId' });
  };
  return Instruction;
};
