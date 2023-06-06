const express = require('express');
const app = express();
const router = require('./src/routes/routes');

// Konfigurasi aplikasi
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(router);

// Mulai server
app.listen(3000, () => {
    console.log('Server berjalan di port 3000');
});
