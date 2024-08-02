'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('vente', [
      {
        clientId: 1,
        produitId: 3,
        date_vente: new Date('2021-12-15'),
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        clientId: 1,
        produitId: 1,
        date_vente: new Date('2021-12-15'),
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        clientId: 1,
        produitId: 4,
        date_vente: new Date('2021-12-15'),
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        clientId: 2,
        produitId: 1,
        date_vente: new Date('2021-12-10'),
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        clientId: 2,
        produitId: 2,
        date_vente: new Date('2021-12-10'),
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('vente', null, {});
  }
};
