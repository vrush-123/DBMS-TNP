import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Input, Label, Form, FormGroup, Nav, NavLink, NavItem } from 'reactstrap';

function StudentDrawer() {
    return (
        <div>
            <Nav style={{backgroundColor:"red"}}>
                <NavLink><h2 className="h2" style={{color:"white"}}>Training & Placement Cell</h2></NavLink>
                <NavItem>Home</NavItem>
                <NavItem>My Applications</NavItem>
                <NavItem>Openings</NavItem>
            </Nav>

        </div>
    )
}

export default StudentDrawer
