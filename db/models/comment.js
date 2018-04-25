'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define('Comment', {
    comment: DataTypes.TEXT
  });
  Comment.associate = (models) => {
    // associations can be defined here
    Comment.belongsTo(models.Topic, {
      foreignKey: 'topicID',
      onDelete: 'CASCADE',
    });
  };
  return Comment;
};
