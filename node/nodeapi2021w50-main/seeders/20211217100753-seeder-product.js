'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
      { name: "Pomme", price: 12.90, picture: "pomme.png", createdAt: new Date(), updatedAt: new Date() },
      { name: "Orange", price: 9.99, picture: "orange.png", createdAt: new Date(), updatedAt: new Date() },
      { name: "Cerise", price: 2.89, picture: "cerise.png", createdAt: new Date(), updatedAt: new Date() },
      { name: "Poire", price: 5.00, picture: "poire.png", createdAt: new Date(), updatedAt: new Date() },
      { name: "Clémentine", price: 0.70, picture: "clementine.png", createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
