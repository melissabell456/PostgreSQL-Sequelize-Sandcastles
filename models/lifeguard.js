'use strict';
module.exports = (sequelize, DataTypes) => {
  var Lifeguard = sequelize.define('Lifeguard', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    location: DataTypes.STRING
  }, {});
  Lifeguard.associate = function(models) {
    // declaring many to many relationship with Beach
    Lifeguard.hasMany(models.Beach, {
      through: "lifeguards_beaches"
    })
  };
  return Lifeguard;
};