'use strict';
module.exports = (sequelize, DataTypes) => {
  var Topic = sequelize.define('Topic', {
    title: DataTypes.TEXT,
    detail: DataTypes.TEXT
  });
  Topic.associate = (models) => {
    // associations can be defined here
    Topic.hasMany(models.Comment, {
      foreignKey: 'topicID',
      as: 'comment',
    });
  };
  return Topic;
};
