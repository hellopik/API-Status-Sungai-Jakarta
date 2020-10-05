'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class td_barang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  td_barang.init({
    id_barang_skvi_siinas: DataTypes.INTEGER,
    kd_komoditi: DataTypes.STRING,
    hs_code: DataTypes.STRING,
    ur_barang: DataTypes.STRING,
    spesifikasi: DataTypes.STRING,
    jml_satuan: DataTypes.INTEGER,
    kd_satuan: DataTypes.STRING,
    harga_satuan: DataTypes.INTEGER,
    harga_total: DataTypes.STRING,
    kd_Valuta: DataTypes.STRING,
    tarif_bm: DataTypes.INTEGER,
    nilai_bm: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'td_barang',
  });
  return td_barang;
};