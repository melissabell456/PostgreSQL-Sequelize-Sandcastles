'use strict';
module.exports = (sequelize, DataTypes) => {
  var Lifeguard = sequelize.define('Lifeguard', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    location: DataTypes.STRING
  }, { tableName: "lifeguards" });
  Lifeguard.associate = function(models) {
    // a Beach can have many Lifeguards and a Lifeguard can work on many Beaches
    Lifeguard.belongsToMany(models.Beach, {
      as: "BeachGuards",
      through: "lifeguards_beaches"
    })

    Lifeguard.prototype.getFullName = function() {
      return `${this.first_name} ${this.last_name}`
    }
    
  };
  return Lifeguard;
};