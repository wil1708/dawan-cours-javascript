'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Produits', [
      {
        type: 'Fruits',
        libelle: 'Pomme',
        prix: 12.5,
        stock: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'Fruits',
        libelle: 'Cerise',
        prix: 9.99,
        stock: 300,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'Quincaillerie',
        libelle: 'Boite de 200 vis, L.35 mm inox',
        prix: 9.80,
        stock: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'Quincaillerie',
        libelle: '400 clous tapissier Acier',
        prix: 2.60,
        stock: 500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Produits', null, {});
  }
};
