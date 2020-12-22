'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
    },
    {}
  );
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Subbreaddit, { foreignKey: 'ownerId' });
    User.hasMany(models.Post, { foreignKey: 'userId' });
    User.hasMany(models.Subbreaddit, { through: 'Subscription', otherKey: 'subId', foreignKey: 'userId' });
  };
  return User;
};
