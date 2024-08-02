'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  };
  Client.init({
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    naissance: DataTypes.DATE,
    email: DataTypes.STRING,
    telephone: DataTypes.STRING,
    fullname: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.prenom} ${this.nom}`;
      },
      set(value) {
        throw new Error(`Cette action n'est pas autorisé`);
      }
    }
  }, {
    sequelize,
    modelName: 'Client',
    tableName: 'client'
  });
  return Client;
};