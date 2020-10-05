'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class td_header extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  td_header.init({
    id_skvi_siinas: DataTypes.INTEGER,
    npwp_perusahaan: DataTypes.STRING,
    nm_perusahaan: DataTypes.STRING,
    no_skvi: DataTypes.STRING,
    tgl_skvi: DataTypes.STRING,
    kd_kpa: DataTypes.STRING,
    kd_sektor: DataTypes.STRING,
    pagu_anggaran: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'td_header',
  });
  return td_header;
};