import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardHeader, Button, Input, Label, Form, FormGroup, Nav, NavLink, NavItem } from 'reactstrap';
import axios from 'axios';
import {useState, useEffect} from 'react';
function CompanyApplication() {
    //const [listofapp, setList] = useState([]);
    const [list, setLis] = useState([]);
    let listofapp = [] 
    const retrieveList = () => {
        axios.post('http://localhost:3002/company/listofstudents', {
            name: localStorage.getItem("user")
        }).then((response) => {
            //console.log(response);
            response.data.map((e,key) => {
                listofapp.push(e);
            })
            setLis(listofapp);
        })
    }
    useEffect(() => {
        retrieveList();
    });
    // console.log(listofapp);
    const arr = [
        {
            name : "ABCD",
            status: "In queue"
        },
        {
            name: "PQR",
            status : "In Queue"
        },
        {
            name: "DEF",
            status : "In Queue"
        },
        {
            name: "IGK",
            status : "In Queue"
        }
    ]
    const [stat, setStat] = useState("");
    return (
        <div>
            <Nav style={{backgroundColor:"#189AB4"}}>
                <NavLink><h2 className="h2" style={{color:"white"}}>Training & Placement Cell</h2></NavLink>
                <NavItem><h1 className="h1 mx-auto" style={{paddingLeft:"150px", color:"white"}}>{localStorage.getItem("user")}</h1></NavItem>
                <NavItem><NavLink style={{color:"white"}} href="#" onClick={() => {
                    localStorage.setItem("user", "");
                    localStorage.setItem("password", "");
                    window.open('/login');
                    window.close();
                }}>Log out</NavLink></NavItem>
            </Nav>
            <br></br>
            <div className="container">
                <div className="row">
                    {
                        list.map((e,key) => {
                            // console.log(e.registration_num+' '+e.status);
                            return(
                                <div className="col-3">
                                    <Card className="shadow p-3 mb-5 bg-white rounded" key={key}>
                                        <CardHeader><h4 className="h4">{e.registration_num}</h4></CardHeader>
                                        <CardBody>
                                            <p className="p">{e.status}</p>
                                            <div className="row">
                                                <div className="col-10 col-md-3">
                                                    <Label>Change status : </Label>
                                                </div>
                                                <div className="col-10 col-md-8">
                                                    <Input placeholder="Change status" onChange={(e) => setStat(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-5">
                                                    <Button onClick={() => {
                                                        axios.post('http://localhost:3002/company/student', {
                                                            name: localStorage.getItem("user"),
                                                            registration_num: e.registration_num,
                                                            status: stat
                                                        })
                                                    }}>Change</Button>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default CompanyApplication
