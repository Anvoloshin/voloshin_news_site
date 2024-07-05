module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('tags_posts', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      post_id: {
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
        references: {
          model: Post,
          key: 'id',
        },
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
      },
      tag_id: {
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
        references: {
          model: Tag,
          key: 'id',
        },
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
      },
    });
  },

  down(queryInterface) {
    return queryInterface.dropTable('tags_posts');
  },
};
