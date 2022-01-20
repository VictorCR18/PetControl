var express = require('express');

var db = require('../database/index.js')

class Q_gastosController {

    getAllData = (req, res) => {
        let qr =    `select q_gastos.id, q_gastos.item, q_gastos.preco, pets.nome
                    from q_gastos
                    inner join pets
                    on q_gastos.pet_id = pets.id`

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

        let qr = `select *
        from q_gastos
        inner join pets 
        on q_gastos.pet_id = pets.id WHERE q_gastos.id = ${gID}`;


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
        let preco = req.body.preco;
        let nome = req.body.nome;


        let qr = `SELECT * FROM pets WHERE nome = "${nome}"`

        db.query(qr, (err, result) => {
            if (err) {
                console.log(err);
                return
            }
            let qrTwo = `
                INSERT INTO q_gastos (item, preco, pet_id) 
                VALUES ('${item}', '${preco}', '${result[0].id}')`

            db.query(qrTwo, (err, result) => {
                if (err) {
                    console.log(err);
                } else {

                    res.status(200).json(result);
                }
            });

        });


    }


    getUpdateData = (req, res) => {
        console.log(req.body, 'updatedata');

        let gID = req.params.id;

        let item = req.body.item;
        let nome = req.body.nome;
        let preco = req.body.preco;

        let qr = `SELECT * FROM pets WHERE nome = "${nome}"`

        db.query(qr, (err, result) => {
            if (err) {
                console.log(err);
                return
            }
            let qrTwo = `update q_gastos set item = '${item}', pet_id = ${result[0].id}, preco = '${preco})' where id = ${gID}`

            db.query(qrTwo, (err, result) => {
                if (err) {
                    console.log(err);
                } else {

                    res.status(200).json(result);
                }
            });

        })
    }

    getDeleteData = (req, res) => {
        console.log(req.body, 'deleteddata');
        //

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