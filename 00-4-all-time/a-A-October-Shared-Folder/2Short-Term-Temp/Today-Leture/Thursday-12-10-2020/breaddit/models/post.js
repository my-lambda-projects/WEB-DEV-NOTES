'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Post',
    {
      content: {
        type: DataTypes.STRING,
        validate: {
          len: [2, 1000],
        },
      },
      userId: DataTypes.INTEGER,
      subId: DataTypes.INTEGER,
    },
    {}
  );
  Post.associate = function (models) {
    // associations can be defined here
    Post.belongsTo(models.User, { foreignKey: 'userId' });
    Post.belongsTo(models.Subbreaddit, { foreignKey: 'subId' });
  };
  return Post;
};
