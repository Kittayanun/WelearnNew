'use strict';
module.exports = (sequelize, DataTypes) => {
  var Topic = sequelize.define('Topic', {
    title: DataTypes.TEXT,
    detail: DataTypes.TEXT
  }, {});
  Topic.associate = function(models) {
    // associations can be defined here
  };
  return Topic;
};