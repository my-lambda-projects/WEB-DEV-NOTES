'use strict';
//A JavaScript class like Cat that corresponds to a SQL table is called a model class.

module.exports = ( sequelize, DataTypes ) => {
  const Cat = sequelize.define( 'Cat', {
    firstName: DataTypes.STRING,
    specialSkill: DataTypes.STRING
  }, {} );
  Cat.associate = function ( models ) {
    // associations can be defined here
  };
  return Cat;
};
