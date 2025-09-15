const express = require('express')
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
app.use(cors());        // establish relation between frontend ports and backend ports 
app.use(express.json()); // accept json stringyfy format data

//connecting db with backend
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mysql@@#14369',
    database: 'todo'
})
db.connect((err) => {
    if (err) {
        console.log("error occured", err);
        return
    }
    console.log("connected succesfully  with database");
})

// READ THE DATA FROM DATABASE

app.get('/', (req, res) => {
    console.log("Default route");
    db.query('select * from todoItems', (err, result) => {
        if (err) {
            console.log("error found", err);
            return
        }
        console.log("data from database", result);
        res.send(result);

    })
})
// CREATE OR WRITE THE DATA INTO DATABASE
app.post('/add-item', (req, res) => {
    console.log(req.body);
    db.query(`insert into todoItems(itemDescription) values('${req.body.text}')`, (err, result) => {
        if (err) {
            console.log("error found", err);
            return
        }
        console.log("created succesfully");
    })
    res.send("added succesfully");
})
// UPDATE DATA IN DATABASE
app.put('/edit-item', (req, res) => {
    console.log("line 48:", req.body);
    db.query(`update todoItems set itemDescription="${req.body.itemDescription}" where ID=${req.body.ID}`, (err, result) => {
        if (err) {
            console.log("error found", err);
            return
        }
        console.log("updated succesfully");

    })
    res.send("updated succesfully");
})
// DELETE DATA FROM DATABASE
app.delete('/delete-item', (req, res) => {
    console.log("line 64:", req.body);
    db.query(`delete from todoItems where ID=${req.body.ID}`, (err, result) => {
        if (err) {
            console.log("error found", err);
            return
        }
        console.log("deletion completed succesfully");
    })
    res.send("deletion complted succesfully");
})
app.listen(3000, () => {
    console.log("server started running at port 3000");
})