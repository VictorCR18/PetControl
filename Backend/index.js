const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors());
app.use(bodyparser.json());

// conexâo com o BD

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ciroappdb',
    port: 3306
});

// Verifica a conexâo

db.connect(err => {
    if (err) {
        console.log(err, 'dberr');
    } else {
        console.log('database conncted...');
    }
})

// Pega todos os dados do BD

app.get('/q_gastos', (req, res) => {

    let qr = `SELECT * FROM q_gastos`

    db.query(qr, (err, result) => {

        if (err) {
            console.log(err, 'errs');
        } else if (result.length > 0) {
            res.send({
                message: 'all use data',
                data: result
            });
        }
    });
});


// Pega somente um dado

app.get('/q_gastos/:id', (req, res) => {

    let gID = req.params.id;

    let qr = `SELECT * FROM Q_GASTOS WHERE ID = ${gID}`;

    db.query(qr, (err, result) => {

        if (err) {

            console.log(err);

        } else if (result.length > 0) {

            res.send({
                message: 'get single data',
                data: result
            });

        } else {

            res.send({
                message: 'data not found'
            });
        }
    });



});

// inserir dados

app.post('/q_gastos', (req, res) => {
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
            console.log(result, 'result')
            res.send({
                message: 'data inserted'
            });
        }
    });

});

//atualizar um dado

app.put('/q_gastos/:id',(req, res)=>{

    console.log(req.body,'updatedata');

    let gID = req.params.id;

    let item = req.body.item;
    let pet = req.body.pet;
    let preco = req.body.preco;
   
    let qr = `update q_gastos set item = '${item}', pet = '${pet}', preco = '${preco}'
    where id = ${gID} `;

    db.query(qr, (err, result) => {

        if (err) {
            console.log(err);
        }
            res.send({
                message: 'data updated'
            });
    });

});

// Deletar um dado

app.delete('/q_gastos/:id',(req, res)=>{

    console.log(req.body,'updatedata');

    let gID = req.params.id;
   
    let qr = `delete from q_gastos where id = ${gID} `;

    db.query(qr, (err, result) => {

        if (err) {
            console.log(err);
        }
            res.send({
                message: 'data deleted'
            });
    });

});



app.listen(3000, () => {
    console.log('server running');
})