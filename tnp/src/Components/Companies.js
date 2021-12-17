import React from 'react'
import {Card, CardBody, Button, CardHeader, Nav, NavLink, NavItem } from 'reactstrap';
import axios from 'axios';
import {useState, useEffect} from 'react';
function Companies() {
    const [listofcomp, setList] = useState([]);

    const retrievecomp = () => {
        let ar = []
        axios.get('http://localhost:3002/company').then((response) => {
            response.data.map((e,key) => {
                ar.push(e);
            });
            setList(ar);
        })
    }
    useEffect(() => {
        retrievecomp();
    })
    // console.log(listofcomp);
    const arr = [
        {
            name : "Wipro"
        },
        {
            name : "Infosys"
        },
        {
            name: "TCS",
        },
        {
            name: "TCS",
        },
        {
            name: "TCS",
        },
        {
            name: "TCS",
        },
        {
            name: "TCS",
        },
        {
            name: "TCS",
        },
        {
            name: "TCS",
        },
        {
            name: "TCS",
        },
        {
            name: "TCS",
        },
        {
            name: "TCS",
        },
        {
            name: "TCS",
        },
        {
            name: "TCS",
        },
        {
            name: "TCS",
        },
        {
            name: "TCS",
        }
    ]
    return (
        <div>
            <Nav style={{backgroundColor:"#189AB4"}}>
                <NavLink><h2 className="h2" style={{color:"white"}}>Training & Placement Cell</h2></NavLink>
                <NavItem><h1 className="h1 mx-auto" style={{paddingLeft:"150px", color:"white"}}>{localStorage.getItem("user")}</h1></NavItem>
            </Nav>
            <Nav style={{color:"black", backgroundColor:"#189AB4"}}>
            <NavItem><NavLink style={{color:"white"}} href="/home">Home</NavLink></NavItem>
                <NavItem><NavLink style={{color:"white"}} href="/yourapp">My Applications</NavLink></NavItem>
                <NavItem><NavLink style={{color:"white"}} href="/listofcomp">Openings</NavLink></NavItem>
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
                        listofcomp.map((e,key) => {
                            return(
                                <div className="col-3">
                                    <Card className="shadow p-3 mb-5 ml-5 pl-5 bg-white rounded">
                                    <CardHeader>
                                        <h3>{e.NAME}</h3>
                                    </CardHeader>
                                    <CardBody>
                                        <h6 className="h6"> {e.description} </h6>
                                        <Button onClick={() => {
                                            axios.post('http://localhost:3002/student/application', {
                                                name : e.NAME,
                                                registration_num : localStorage.getItem("user")
                                            });
                                        }}>Apply</Button>
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

export default Companies
