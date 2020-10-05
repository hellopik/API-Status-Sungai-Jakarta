import config from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import router from './server/routes/Routes';
const cheerio = require("cheerio");
import extractTinggiAir from './server/controllers/extractTinggiAir.js'
import ambilHtml from './server/controllers/ambilHtml.js'

config.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 8000;

app.use('/api/v1/', router);
app.get('/getTinggiAir/', async function(req, res){
  try {
    const url =
    "http://poskobanjirdsda.jakarta.go.id/";
    const html = await ambilHtml(url);
    const $ =  cheerio.load(html);
    const hasilPencarian = await $("body")
    .find(".dxbs-gridview > .panel > table > tbody > tr "); 
    const tinggiAir = hasilPencarian.map((idx, el) => {
        const elementSelector = $(el);
        return extractTinggiAir(elementSelector);
    })
    var tampilkan = [];
    for (var i = 1; i < tinggiAir.length; i++) {
      tampilkan.push(tinggiAir[i])
    }
    for (var i = 0; i < tampilkan.length; i++) {
      if(tampilkan[i].status == "images/icon/icon-normal.png"){
        tampilkan[i].status = "Normal"
      } else if (tampilkan[i].status == "images/icon/icon-siaga3.png"){
        tampilkan[i].status = "Siaga 3"
      } else if (tampilkan[i].status == "images/icon/icon-siaga2.gif"){
        tampilkan[i].status = "Siaga 2"
      } else if (tampilkan[i].status == "images/icon/icon-siaga1.gif"){
        tampilkan[i].status = "Siaga 1"
      } else {
        tampilkan[i].status = "Tidak terdefinisi"
      }
      }  
    res.status(200).send(tampilkan)
    console.log(typeof tampilkan[2].status)
  } catch (error) {
    res.send(error.message)    
  }
})

// Ketika tidak disebutkan endpoint tertentu
app.get('*', (req, res) => res.status(200).send({
  message: 'Mau make API apa kah ?',
}));

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

export default app;