const { default: db } = require("../src/models");

class Service {
    static async ambilHtml(url) {
        try {
            const { data } = await axios.get(url);
            return data;
        } catch {
            console.error(
                'ERROR BOS'
            );
        }
    }
    static async addData(newData) {
        try {
            return await db.td_header.create(newData);
        } catch (error) {
            throw error;
        }
        };
    static async addBarang(newBarang) {
            try {
                return(
                    await db.td_barang.create(newBarang)
                )
            } catch (error) {
                throw error;
            }
            }
    static async addKantor(newKantor) {
            try {
                return(
                    await db.td_kantor.create(newKantor)
                )
            } catch (error) {
                throw error;
            }
            }                    
}

export default Service