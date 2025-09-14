const express = require('express')
// console.log(express);
const app = express();
app.listen(2999, () => {
    console.log("your server is running");
})

//CRUD OPERATIONS(CREATE,READ,UPDATE,DELETE)
//1) READ OPERATION-->GET METHOD
app.get('/', (req, res) => {
    res.send("welcome bruhhh!!!");  //default route because nothin after '/'
})
app.get('/read', (req, res) => {
    res.send("welcome bruhh--read operation using get method");
})
// 2)CREATE OPERATION-->POST METHOD
app.post('/create', (req, res) => {
    res.send("it is a post method");
})
// 3)UPDATE OOPERATION-->PUT METHOD
app.put('/update',(req,res)=>{
    res.send("it is a update method");
})
// 4)DELETE OPERATION-->DELETE METHOD
app.delete('/delete',(req,res)=>{
    res.send("it is a delete method");
})