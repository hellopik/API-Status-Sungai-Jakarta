# API-Status-Sungai-Jakarta
Unofficial API Service for Tinggi Pintu Air di Jakarta beserta statusnya.


Working Example :
1. https://banjeer.herokuapp.com/gettinggiair
2. https://banjeer.herokuapp.com/gettinggiair/kode_lokasi_pengamatan , misalnya untuk Pintu Air Manggarai urlnya menjadi https://banjeer.herokuapp.com/gettinggiair/MGGRI

Kode Lokasi Pengamatan :
![alt text](https://github.com/hellopik/API-Status-Sungai-Jakarta/blob/master/kode%20lokasi%20pengamatan.PNG?raw=true)

Ketika dilakukan hit terhadap endpoint yang ada, maka akan dilakukan proses web scraping ke alamat http://poskobanjirdsda.jakarta.go.id/ dan akan mengembalikan return response berbentuk json array, contohnya sebagai berikut :

```json
[
    {
        "lokasi_pengamatan": "Bendung. Katulampa (Hulu)",
        "sungai": "Ciliwung",
        "tinggi_air": "18",
        "tgl_data": "05/10/2020",
        "jam_data": "09:00",
        "status": "Normal"
    },
    {
        "lokasi_pengamatan": "PS. Depok",
        "sungai": "Ciliwung",
        "tinggi_air": "110",
        "tgl_data": "05/10/2020",
        "jam_data": "09:00",
        "status": "Normal"
    },
    {
        "lokasi_pengamatan": "PA. Manggarai",
        "sungai": "Ciliwung",
        "tinggi_air": "772",
        "tgl_data": "05/10/2020",
        "jam_data": "09:00",
        "status": "Siaga 3"
    },
    {
        "lokasi_pengamatan": "PS. Krukut Hulu",
        "sungai": "Krukut",
        "tinggi_air": "40",
        "tgl_data": "05/10/2020",
        "jam_data": "09:00",
        "status": "Normal"
    },
    {
        "lokasi_pengamatan": "Pompa Cideng",
        "sungai": "Cideng Siantar",
        "tinggi_air": "18",
        "tgl_data": "05/10/2020",
        "jam_data": "09:00",
        "status": "Normal"
    },
    {
        "lokasi_pengamatan": "P.A. Karet",
        "sungai": "Banjir Kanal Barat",
        "tinggi_air": "473",
        "tgl_data": "05/10/2020",
        "jam_data": "09:00",
        "status": "Siaga 3"
    },
    {
        "lokasi_pengamatan": "P.A. Marina Ancol",
        "sungai": "Laut",
        "tinggi_air": "203",
        "tgl_data": "05/10/2020",
        "jam_data": "09:00",
        "status": "Siaga 2"
    },
    {
        "lokasi_pengamatan": "Pompa Pasar Ikan",
        "sungai": "Laut",
        "tinggi_air": "199",
        "tgl_data": "05/10/2020",
        "jam_data": "09:00",
        "status": "Siaga 3"
    },
    {
        "lokasi_pengamatan": "Pompa. Pluit",
        "sungai": "Waduk Pluit",
        "tinggi_air": "-163",
        "tgl_data": "05/10/2020",
        "jam_data": "09:00",
        "status": "Normal"
    },
    {
        "lokasi_pengamatan": "PS. Pesanggrahan",
        "sungai": "Pesanggrahan",
        "tinggi_air": "140",
        "tgl_data": "05/10/2020",
        "jam_data": "09:00",
        "status": "Normal"
    },
    {
        "lokasi_pengamatan": "PS. Angke Hulu",
        "sungai": "Angke",
        "tinggi_air": "210",
        "tgl_data": "05/10/2020",
        "jam_data": "09:00",
        "status": "Siaga 3"
    },
    {
        "lokasi_pengamatan": "PS. Sunter Hulu",
        "sungai": "Sunter",
        "tinggi_air": "180",
        "tgl_data": "05/10/2020",
        "jam_data": "08:00",
        "status": "Siaga 3"
    },
    {
        "lokasi_pengamatan": "PA. Pulo Gadung",
        "sungai": "Sunter",
        "tinggi_air": "341",
        "tgl_data": "19/09/2020",
        "jam_data": "01:30",
        "status": "Normal"
    },
    {
        "lokasi_pengamatan": "Pompa Yos Sudarso 1",
        "sungai": "Sunter Timur",
        "tinggi_air": "52",
        "tgl_data": "04/10/2020",
        "jam_data": "18:20",
        "status": "Normal"
    },
    {
        "lokasi_pengamatan": "PS. Cipinang Hulu",
        "sungai": "Cipinang Hulu",
        "tinggi_air": "115",
        "tgl_data": "05/10/2020",
        "jam_data": "09:00",
        "status": "Normal"
    },
    {
        "lokasi_pengamatan": "Pompa Kali Duri (Kalijodo)",
        "sungai": "Kali Duri",
        "tinggi_air": "210",
        "tgl_data": "05/10/2020",
        "jam_data": "09:00",
        "status": "Normal"
    },
    {
        "lokasi_pengamatan": "P.A. Istiqlal",
        "sungai": "Ciliwung",
        "tinggi_air": "310",
        "tgl_data": "05/10/2020",
        "jam_data": "09:00",
        "status": "Siaga 2"
    },
    {
        "lokasi_pengamatan": "P.A. Jembatan Merah",
        "sungai": "Ciliwung",
        "tinggi_air": "200",
        "tgl_data": "05/10/2020",
        "jam_data": "09:00",
        "status": "Siaga 2"
    },
    {
        "lokasi_pengamatan": "P.A. Flusing Ancol",
        "sungai": "Ciliwung",
        "tinggi_air": "191",
        "tgl_data": "19/09/2020",
        "jam_data": "01:10",
        "status": "Siaga 2"
    },
    {
        "lokasi_pengamatan": "P.A. Hek",
        "sungai": "Kali Baru Timur",
        "tinggi_air": "200",
        "tgl_data": "05/10/2020",
        "jam_data": "08:00",
        "status": "Normal"
    }
]

```
