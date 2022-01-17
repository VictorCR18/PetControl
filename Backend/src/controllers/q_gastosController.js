var express = require('express');

var db = require('../database/index.js')

class Q_gastosController {
    
    getAllData = (req, res) => {
        let qr = `SELECT * FROM q_gastos`

        db.query(qr, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.status(200).json(result);
            }
        })
    }

    getSingleData = (req, res) => {
        let gID = req.params.id;

        let qr = `SELECT * FROM Q_GASTOS WHERE ID = ${gID}`;

        db.query(qr, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.status(200).json(result);
            }
        });
    }

    getCreateData = (req, res) => {
        console.log(req.body, 'createdata');

        let item = req.body.item;
        let pet = req.body.pet;
        let preco = req.body.preco;

        let qr = `insert into q_gastos (item, pet, preco)
             values ('${item}','${pet}','${preco}')`;

        db.query(qr, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.status(200).json(result);
            }
        });
    }

    getUpdateData = (req, res) => {
        console.log(req.body, 'updatedata');

        let gID = req.params.id;

        let item = req.body.item;
        let pet = req.body.pet;
        let preco = req.body.preco;

        let qr = `update q_gastos set item = '${item}', pet = '${pet}', preco = '${preco}'
    where id = ${gID} `;

        db.query(qr, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.status(200).json(result);
            }
        });
    }

    getDeleteData = (req, res) => {
        console.log(req.body, 'updatedata');

        let gID = req.params.id;

        let qr = `delete from q_gastos where id = ${gID} `;
        db.query(qr, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.status(200).json(result);
            }
        });
    }
}

module.exports = Q_gastosController;