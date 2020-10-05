const { default: Service } = require("../services/Service");
const cheerio = require("cheerio");

import Util from '../utils/Utils';
import ambilHtml from './ambilHtml.js'

const util = new Util();


class Controller {
    static async addData(req, res) {
        if (!req.body.header.id_skvi_siinas || !req.body.header.npwp_perusahaan ) {
            util.setError(400,'Gak Lengkap bro');
            return util.send(res)
        }
        const newData = req.body.header;
        const newBarang = req.body.detail_barang;
        try {
            const createdData = await Service.addData(newData)
            var assignedBarang = newBarang.map(e => ({ ...e, id_barang_skvi_siinas: newData.id_skvi_siinas })); 
            for (var i = 0; i < newBarang.length; i++) {
                const createdBarang = await Service.addBarang(assignedBarang[i])
                const newKantor = newBarang[i].barang_kantor
                var assignedKantor = newKantor.map(e => ({...e, kd_kantor: newBarang[i].hs_code }))
                for (var a = 0; a < newKantor.length; a++) {
                    const createdKantor = await Service.addKantor(assignedKantor[a])
                }
            } 
            util.setSuccess(201,'Sukses!')
            return util.send(res)
        } catch (error) {
            util.setError(400, error.message);
            return util.send(res);
        }
    }   
}

export default Controller