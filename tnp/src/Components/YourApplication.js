import React from 'react'
import { Nav, NavLink, Card, CardBody, CardHeader, NavItem, Button } from 'reactstrap';
import axios from 'axios';
import {useState, useEffect} from 'react';
function YourApplication() {
    const [listofapp, setList] = useState([]);
    const [reg_num, setRegNum] = useState('');
    const rtrievelist = () => {
        let list = []
        axios.post('http://localhost:3002/student/listapp', {
            registration_num : localStorage.getItem("user")
        }).then((response) => {
            response.data.map((e,key) => {
                list.push(e)
            })
            setList(list);
        })
    }
    useEffect(() => {
        rtrievelist();
    })
    const arr = [
        {
            name: "Wipro",
            status: "Accepted"
        },
        {
            name: "Infosys",
            status: "Accepted"
        },
        {
            name: "TCS",
            status: "In Queue"
        },
        {
            name: "Infosys",
            status: "Accepted"
        },
        {
            name: "Infosys",
            status: "Accepted"
        },
        {
            name: "Infosys",
            status: "Accepted"
        },
        {
            name: "Infosys",
            status: "Accepted"
        },
        {
            name: "Infosys",
            status: "Accepted"
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
                        listofapp.map((e,key) => {
                            return(
                                <div className="col-3">
                                    <Card className="shadow p-3 mb-5 bg-white rounded">
                                        <CardHeader><h4 className="h4">{e.name}</h4></CardHeader>
                                        <CardBody><h6 className="h6">{e.status}</h6></CardBody>
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

export default YourApplication
