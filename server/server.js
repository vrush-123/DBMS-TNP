const express = require('express');
const mysql = require('mysql2');

const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.json());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Pratik@123",
    database: "trainingandplacementcell"
});

app.post('/create/student', (req, res) => {
    const name = req.body.name
    const dept_name = req.body.dept_name
    const cgpa = req.body.cgpa
    const registration_num = req.body.registration_num
    const email_id = req.body.email_id
    const password = req.body.password

    db.query('INSERT INTO STUDENTS (name, dept_name, cgpa, registration_num, email_id,password) VALUES (?,?,?,?,?,?)', [name, dept_name, cgpa, registration_num, email_id, password], (err, result) => {
        if(err) {
            console.log(err)
        }
        else{
            //res.send("Values inserted");
        }
    });
    
    db.query(`CREATE TABLE ${registration_num} (name VARCHAR(45), status VARCHAR(45))`, (err, result) => {
        if(err){
            console.log(err);
        }
        else{
            res.send('Table of student created');
        }
    })
});
app.post('/login', (req,res) => {
    const user = req.body.user;
    const pass = req.body.pass;
    if(user === 'admin' && pass == 'admin@123'){
        res.send('admin');
    }
    else if(user[0] === '1' || user[0] === '2'){
        db.query("SELECT password FROM STUDENTS WHERE registration_num = '"+user+"'", (err, result) => {
            if(err){
                // console.log(user+' '+pass);
            }
            if(result[0].password === pass){
                res.send('student');
            }
            else{
                res.send(result);
            }
        });
    }
    else{
        db.query("SELECT password FROM COMAPNY WHERE name = '"+user+"'",(err,result) => {
            if(err){
                // console.log(user+' '+pass);
            }
            else{
                console.log(result[0])
                if(pass === result[0].password){
                    res.send('company');
                }
                else{
                    res.send('err');
                }
            }
        })
    }
});
app.post('/student/listapp', (req,res) => {
    const reg_num = req.body.registration_num

    db.query('SELECT * FROM '+reg_num, (err, result) => {
        if(err){
            console.log(err);
        }
        else{
            // console.log(result);
            res.send(result);
        }
    })
})

app.post('/create/company', (req,res) => {
    const name = req.body.name
    const password = req.body.password
    const description = req.body.description
    const reg_num = req.body.registration_num
    let d = name;
    db.query('INSERT INTO comapny (name, password, description) VALUES(?,?,?)',[name, password, description], (err, result) => {
        if(err){
            console.log(err);
        }
        else{
            // res.send("Values inserted successsfully");
        }
    });
    db.query(`CREATE TABLE ${d} (registration_num VARCHAR(45), status VARCHAR(45))`, (err, result) => {
        if(err){
            console.log(err);
        }
        else{
            res.send("Table created successfully");
        }
    })
});

app.get('/student', (req,res) => {
    const reg_num = req.body.registration_num
    db.query('SELECT * FROM '+reg_num, (err,result) =>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
})

app.post('/student/application', (req,res) => {
    const name = req.body.name
    const reg_num = req.body.registration_num

    db.query(`INSERT INTO ${name} (registration_num, status) VALUES (?,?)`, [reg_num, 'In queue'], (err, result) => {
        if(err){
            console.log(err);
        }
        else{
            //res.send('Application posted');
        }
    })
    db.query(`INSERT INTO ${reg_num} (name, status) VALUES (?,?)`, [name, 'In queue'], (err, result) => {
        if(err){
            console.log(err);
        }
        else{
            res.send('Application posted successfully');
        }
    })
});

app.post('/company/listofstudents', (req,res) => {
    const name = req.body.name
    //console.log("name "+name);
    db.query("SELECT * FROM "+name, (err, result) => {
        if(err){
            console.log(err);
        }
        else{
            // console.log(result);
            res.send(result);
        }
    })
})

app.post('/company/student', (req, res) => {
    const reg_num = req.body.registration_num
    const name = req.body.name
    const status = req.body.status
    db.query("UPDATE "+name+" SET status = '"+status+"' WHERE registration_num = '"+reg_num+"'", (err, result) => {
        if(err){
            console.log(err);
        }
        else{
            // res.send("Status updated");//registration_num
        }
    })
    db.query("UPDATE "+reg_num+" SET status = '"+status+"' WHERE name = '"+name+"'", (err, result) => {
        if(err){
            console.log(err);
        }
        else{
            res.send("Status updated");
        }
    })
});

app.get('/company', (req,res) => {

    db.query('SELECT NAME FROM COMAPNY', (err, result) => {
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
});
app.listen(3002, () => {
    console.log("listening  ");
});
