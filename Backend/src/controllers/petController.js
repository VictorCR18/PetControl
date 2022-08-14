var express = require('express');

var db = require('../database/index.js')

class PetController {

    getAllPets = (req, res) => {

        let qr = `SELECT * FROM pets`

        db.query(qr, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.status(200).json(result);
            }
        })
    }


    getSinglePet = (req, res) => {
        let gID = req.params.id;

        let qr = `SELECT * FROM PETS WHERE ID = ${gID}`;

        db.query(qr, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.status(200).json(result);
            }
        });
    }

    getCreatePet = (req, res) => {
        console.log(req.body, 'createdata');

        let nome = req.body.nome;
        let especie = req.body.especie;


        let qr = `INSERT INTO pets (id, nome, especie)
     VALUES (NULL, '${nome}', '${especie}')`;

        db.query(qr, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.status(200).json(result);
            }
        });
    }

    getUpdatePet = (req, res) => {
        console.log(req.body, 'updatedata');

        let gID = req.params.id;

        let nome = req.body.nome;
        let especie = req.body.especie;

        let qr = `update pets set nome = '${nome}', especie = '${especie}'
        where id = ${gID} `;

        db.query(qr, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.status(200).json(result);
            }
        });
    }

    getDeletePet = (req, res) => {

        console.log(req.body, 'deletedata');

        let gID = req.params.id;

        let qr = `delete from pets where id = ${gID} `;
        db.query(qr, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.status(200).json(result);
            }
        });
    }

}

module.exports = PetController;
