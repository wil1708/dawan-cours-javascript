'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Produit.init({
    type: DataTypes.STRING,
    libelle: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    prix: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Produit',
  });
  return Produit;
};