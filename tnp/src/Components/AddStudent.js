import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Input, Label, Form, FormGroup, Nav, NavLink, NavItem } from 'reactstrap';

import {useState} from 'react';
import axios from 'axios';
function AddStudent() {
    const [name, setName] = useState("");
    const [dept_name, setDeptname] = useState("");
    const [cgpa, setCgpa] = useState("");
    const [reg_num, setRegistration] = useState("");
    const [emailid, setEmailid] = useState("");
    const [password, setPassword] = useState("");

    const handleAddstudent = () => {
        axios.post('http://localhost:3002/create/student', {
            name: name,
            dept_name: dept_name,
            cgpa: cgpa,
            registration_num: reg_num,
            email_id: emailid,
            password: password
        })
    }
    return (
        <div>
            <Nav style={{backgroundColor:"#189AB4"}}>
                <NavLink><h2 className="h2" style={{color:"white"}}>Training & Placement Cell</h2></NavLink>
                <NavItem><h1 className="h1 mx-auto" style={{paddingLeft:"150px", color:"white"}}>{localStorage.getItem("user")}</h1></NavItem>
            </Nav>
            <Nav style={{color:"black", backgroundColor:"#189AB4"}}>
            <NavItem><NavLink active style={{color:"white"}} href="/addcompany">Add company</NavLink></NavItem>
                <NavItem><NavLink  style={{color:"white"}} href="/addstudent">Add Student</NavLink></NavItem>
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
                                    <Label>Name : </Label>
                                 </div>
                                 <div className="col-6 col-md-7">
                                     <Input placeholder="Name" type="text" onChange={(e) => setName(e.target.value)} />
                                 </div>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <div className="row justify-content-center">
                                <div className="col-6 col-md-3">
                                    <Label>Department Name : </Label>
                                 </div>
                                 <div className="col-6 col-md-7">
                                     <Input placeholder="Department Name" type="text" onChange={(e) => setDeptname(e.target.value)} />
                                 </div>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <div className="row justify-content-center">
                                <div className="col-6 col-md-3">
                                    <Label>CGPA : </Label>
                                 </div>
                                 <div className="col-6 col-md-7">
                                     <Input placeholder="CGPA" type="text" onChange={(e) => setCgpa(e.target.value)} />
                                 </div>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <div className="row justify-content-center">
                                <div className="col-6 col-md-3">
                                    <Label>Registration Number : </Label>
                                 </div>
                                 <div className="col-6 col-md-7">
                                     <Input placeholder="Registration Number" type="text" onChange={(e) => setRegistration(e.target.value)} />
                                 </div>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <div className="row justify-content-center">
                                <div className="col-6 col-md-3">
                                    <Label>Email id : </Label>
                                 </div>
                                 <div className="col-6 col-md-7">
                                     <Input placeholder="Email id" type="text" onChange={(e) => setEmailid(e.target.value)} />
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
                                <div className="col-6">
                                    <Button onClick={handleAddstudent}>Add Student</Button>
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

export default AddStudent
