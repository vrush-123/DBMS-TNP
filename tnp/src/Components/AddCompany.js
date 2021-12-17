import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Input, Label, Form, FormGroup, Nav, NavLink, NavItem } from 'reactstrap';
import {useState} from 'react';
import axios, { Axios } from 'axios';
function AddCompany() {
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const [description, setDesc] = useState("");
    const handleAddcomp = () => {
        axios.post('http://localhost:3002/create/company', {
            name: name,
            password: password,
            description: description
        }).then();
    }
    return (
        <div>
            <Nav style={{backgroundColor:"#189AB4"}}>
                <NavLink><h2 className="h2" style={{color:"white"}}>Training & Placement Cell</h2></NavLink>
                <NavItem><h1 className="h1 mx-auto" style={{paddingLeft:"150px", color:"white"}}>{localStorage.getItem("user")}</h1></NavItem>
            </Nav>
            <Nav style={{color:"black", backgroundColor:"#189AB4"}}>
            <NavItem><NavLink style={{color:"white"}} href="/addcompany">Add company</NavLink></NavItem>
                <NavItem><NavLink active style={{color:"white"}} href="/addstudent">Add Student</NavLink></NavItem>
                <NavItem><NavLink style={{color:"white"}} href="#" onClick={() => {
                    localStorage.setItem("user", "");
                    localStorage.setItem("password", "");
                    window.open('/login');
                    window.close();
                }}>Log out</NavLink></NavItem>
            </Nav>
            <div className="component">
            <br></br>
            <br></br>
            <br></br>
            <div className="row justify-content-center">
                <div className="col-10 col-md-6">
                    <Form className="shadow p-3 mb-5 bg-white rounded">
                        <FormGroup>
                            <div className="row justify-content-center">
                                <div className="col-6 col-md-3">
                                    <Label>Company Name : </Label>
                                 </div>
                                 <div className="col-6 col-md-7">
                                     <Input placeholder="Name" type="text" onChange={(e) => setName(e.target.value)} />
                                 </div>
                            </div>
                        </FormGroup>
                        <FormGroup>
                        <div className="row justify-content-center">
                                <div className="col-6 col-md-3">
                                    <Label>Password : </Label>
                                 </div>
                                 <div className="col-6 col-md-7">
                                     <Input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
                                 </div>
                            </div>
                        </FormGroup>
                        <FormGroup>
                        <div className="row justify-content-center">
                                <div className="col-6 col-md-3">
                                    <Label>Description : </Label>
                                 </div>
                                 <div className="col-6 col-md-7">
                                     <Input placeholder="Description" type="text" onChange={(e) => setDesc(e.target.value)} />
                                 </div>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <div className="row justify-content-center">
                                <div className="col-6">
                                    <Button onClick={handleAddcomp}>Add Company</Button>
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

export default AddCompany
