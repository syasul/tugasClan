const db = require('../config/db');

class Item {
    static findAll(callback) {
        db.query('SELECT * FROM tb_barang', callback);
    }

    static create(data, callback) {
        db.query('INSERT INTO tb_barang SET ?', data, callback);
    }

    static findById(id, callback) {
        db.query('SELECT * FROM tb_barang WHERE id = ?', [id], callback);
    }

    static update(id, data, callback) {
        db.query('UPDATE tb_barang SET ? WHERE id = ?', [data, id], callback);
    }

    static delete(id, callback) {
        db.query('DELETE FROM tb_barang WHERE id = ?', [id], callback);
    }
}

module.exports = Item;
