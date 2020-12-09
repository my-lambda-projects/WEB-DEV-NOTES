'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('noodles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(30),
        required: true
      },
      isPretty: {
        type: Sequelize.STRING(30),
        defaultValue: 'So pretty.'
      },
      isCool: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      isStuffed: {
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      isStuffd: {
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('noodles');
  }
};
