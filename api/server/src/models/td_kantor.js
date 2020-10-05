'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class td_kantor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  td_kantor.init({
    id_barang_skvi_siinas: DataTypes.INTEGER,
    kd_kantor: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'td_kantor',
  });
  return td_kantor;
};