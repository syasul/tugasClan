const Item = require('../models/Item');

exports.index = (req, res) => {
    Item.findAll((err, results) => {
        if (err) {
            console.error('Error mengambil item:', err);
            res.status(500).send('Kesalahan Server Internal');
        } else {
            res.render('index', { items: results });
        }
    });
};

exports.create = (req, res) => {
    const { nama, deskripsi } = req.body;
    Item.create({ nama, deskripsi }, (err, result) => {
        if (err) {
            console.error('Error membuat item:', err);
            res.status(500).send('Kesalahan Server Internal');
        } else {
            console.log('Item telah dibuat:', result.insertId);
            res.redirect('/');
        }
    });
};

exports.show = (req, res) => {
    const itemId = req.params.id;
    Item.findById(itemId, (err, results) => {
        if (err) {
            console.error('Error mengambil item:', err);
            res.status(500).send('Kesalahan Server Internal');
        } else if (results.length === 0) {
            res.status(404).send('Item tidak ditemukan');
        } else {
            res.render('show', { item: results[0] });
        }
    });
};

exports.update = (req, res) => {
    const itemId = req.params.id;
    const { nama, deskripsi } = req.body;
    Item.update(itemId, { nama, deskripsi }, (err) => {
        if (err) {
            console.error('Error memperbarui item:', err);
            res.status(500).send('Kesalahan Server Internal');
        } else {
            res.redirect('/');
        }
    });
};

exports.delete = (req, res) => {
    const itemId = req.params.id;
    Item.delete(itemId, (err) => {
        if (err) {
            console.error('Error menghapus item:', err);
            res.status(500).send('Kesalahan Server Internal');
        } else {
            res.redirect('/');
        }
    });
};
