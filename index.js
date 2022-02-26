
const express = require('express')
var mysql = require('mysql'); 
const app = express()
const PORT = 8080

var usuarios = require('./usuarios.js');

app.use( express.json() )   // middleware, necesario para usar req.body
app.use('/usuarios', usuarios);

// setup database
db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
})

app.listen(
    PORT,
    () => console.log(`encendido en http://localhost:${PORT}`)
)

app.get('/test', (req, res) => {
    res.status(200).send({
        uno: '1',
        dos: '2'
    })
})

app.post('/tshirt/:id', (req, res) => {

    const { id } = req.params
    const { logo } = req.body

    if( ! logo ){
       res.status(418).send({ message: 'necesitamos un logo!' }) 
    }

    res.send({
        tshirt: ` playera con tu ${logo} y id: ${id}`
    })
} )