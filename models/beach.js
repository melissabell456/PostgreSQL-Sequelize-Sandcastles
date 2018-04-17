'use strict';
module.exports = (sequelize, DataTypes) => {
  var Beach = sequelize.define('Beach', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    sand_rating: DataTypes.INTEGER
  }, { tableName: "beaches" });
  Beach.associate = function(models) {
    // declaring many to many relationship with Beach
    Beach.hasMany(models.Lifeguard, {
      through: "lifeguards_beaches"
    })
  };
  return Beach;
};