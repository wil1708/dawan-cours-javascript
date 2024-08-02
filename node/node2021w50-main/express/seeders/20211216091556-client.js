'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('client', [
      {
        nom: 'Doe',
        prenom: 'John',
        naissance: new Date('1990-07-01'),
        email: 'john.doe@gmail.com',
        telephone: '06 118 218 00',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nom: 'Doe',
        prenom: 'Jane',
        naissance: new Date('1987-12-15'),
        email: 'jane.doe@gmail.com',
        telephone: '06 118 218 25',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nom: 'Doe',
        prenom: 'Eduard',
        naissance: new Date('2006-02-14'),
        email: 'eduard.doe@gmail.com',
        telephone: '06 118 218 14',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('client', null, {});
  }
};
