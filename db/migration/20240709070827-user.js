module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      login: {
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
        type: Sequelize.STRING,
      },
      password: {
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
        type: Sequelize.STRING,
      },
      avatar_url: {
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down(queryInterface) {
    return queryInterface.dropTable('users');
  },
};
