import React from 'react';
import './Header.css'
import Nav from 'react-bootstrap/Nav'
import logo from '../../images/logo.png'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div>
            <div className="header">
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                        <img src={logo} alt=""/>
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">BuX Courses</Nav.Link>
                        <Nav.Link href="#features">How to use BuX</Nav.Link>
                        <Nav.Link href="#pricing">FAQ</Nav.Link>
                        <Nav.Link href="#aboutUs">About Us</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search for a course" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                        <Button variant="outline-info">Sign In</Button>
                    </Form>
                </Navbar>
                <div></div>
                </div>

        </div>
    );
};

export default Header;
