var express = require('express');
var router = express.Router();

router.get('/index', function(req, res){

    let sql = `SELECT * FROM usuarios`;
    db.query(sql, function(err, data, fields) {
        if (err) throw err;
        res.json({
        status: 200,
        data,
        message: "Lectura de usuarios exitosa"
        })
    })

});

router.get('/:id', function(req, res){

    const { id } = req.params
    let sql = `SELECT * FROM usuarios WHERE ID = ${id}`;

    db.query(sql, function(err, data, fields) {
        if (err) throw err;
        res.json({
        status: 200,
        data,
        message: "Lectura de usuario exitosa"
        })
    })

 });

router.post('/:id', function(req, res){

    const { id } = req.params
    let sql = `SELECT * FROM usuarios WHERE ID = ${id}`;

    db.query(sql, function(err, data, fields) {
        if (err) throw err;

        // leer y cargardatos de usuario

        res.json({
        status: 200,
        data,
        message: "Lectura de usuario exitosa"
        })
    })

   res.send('POST route on things.');
});

//export this router to use in our index.js
module.exports = router;