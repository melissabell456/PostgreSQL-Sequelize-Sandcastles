const models = require("./models");
const { beaches } = require("./seeders/data/beaches");
const { lifeguards } = require("./seeders/data/lifeguards");

models.sequelize.sync({ force: true })
.then( () => {
  return models.Beach.bulkCreate(beaches)
  .then( () => {
    return models.Lifeguard.bulkCreate(lifeguards)
  })
  .then( () => {
    process.exit();
  })  
});