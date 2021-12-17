import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Input, Label, Form, FormGroup, Nav, NavLink } from 'reactstrap';
import { useState, useEffect } from  'react';
import axios from 'axios';
function Login() {
    const [username, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [st, setSt] = useState('');
    const handleLogin = (event) => {
        //console.log(username+' '+password)
        event.preventDefault();
        axios.post('http://localhost:3002/login', {
            user: username,
            pass: password
        }).then((response) => {
            //console.log(response);
            setSt(response.data);
        })
    }
    useEffect(() => {
        if(st === 'err'){
            alert("Enter valid credentials!!!");
        }
        else if(st === "admin"){
            localStorage.setItem("user", username);
            localStorage.setItem("password", password);
            window.open('http://localhost:3000/addstudent')
        }
        else if(st === "student"){
            localStorage.setItem("user", username);
            localStorage.setItem("password", password);
            window.open('http://localhost:3000/home');

        }
        else if(st === "company"){
            localStorage.setItem("user", username);
            localStorage.setItem("password", password);//listofapp
            window.open('http://localhost:3000/listofapp');

        }
        setSt('');
    }, [st]);
    return (
        <div>
            <Nav style={{backgroundColor:"#189AB4"}}>
                <NavLink><h2 className="h2" style={{color:"white"}}>Training & Placement Cell</h2></NavLink>
            </Nav>
            <div className="container">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="row justify-content-center">
                <div className="col-10 col-md-6">
                    <Form className="shadow p-3 mb-5 bg-white rounded">
                        <FormGroup>
                            <div className="row justify-content-center">
                                <div className="col-6 col-md-3">
                                    <Label>Username : </Label>
                                 </div>
                                 <div className="col-6 col-md-7">
                                     <Input placeholder="Username" type="text" onChange={(event) => {
                                        setUser(event.target.value)}} />
                                 </div>
                            </div>
                        </FormGroup>
                        <FormGroup>
                        <div className="row justify-content-center">
                                <div className="col-6 col-md-3">
                                    <Label>Password : </Label>
                                 </div>
                                 <div className="col-6 col-md-7">
                                     <Input placeholder="Password" type="password" onChange={(event) => setPassword(event.target.value)} />
                                 </div>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <div className="row justify-content-center">
                                <div className="col-6">
                                    <Button onClick={handleLogin}>Login</Button>
                                </div>
                            </div>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Login
