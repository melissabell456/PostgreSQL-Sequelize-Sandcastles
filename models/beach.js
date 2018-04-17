'use strict';
module.exports = (sequelize, DataTypes) => {
  var Beach = sequelize.define('Beach', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    sand_rating: DataTypes.INTEGER
  }, { tableName: "beaches" });
  Beach.associate = function(models) {
    // a Beach can have many Lifeguards and a Lifeguard can work on many Beaches
    Beach.belongsToMany(models.Lifeguard, {
      through: "lifeguards_beaches"
    })
  };
  return Beach;
};