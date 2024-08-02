'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Client);
      this.belongsTo(models.Produit);
    }
  };
  Vente.init({
    date_vente: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Vente',
    tableName: 'vente'
  });
  return Vente;
};