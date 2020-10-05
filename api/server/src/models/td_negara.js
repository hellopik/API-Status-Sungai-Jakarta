'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class td_negara extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  td_negara.init({
    id_barang_skvi_siinas: DataTypes.INTEGER,
    kd_negara: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'td_negara',
  });
  return td_negara;
};