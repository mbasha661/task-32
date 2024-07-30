import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import UseLogout from '../hook/UseLogout'
import './NavBar.css';

function NavBar() {
  let Logout =UseLogout()
  let navigate=useNavigate()
  return <div className="nav-wraper">
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#login">Blog App</Navbar.Brand>
        <Nav className="me-auto">
        {/* <Nav.Link onClick={()=>navigate("/login")}>LogIn</Nav.Link>
        <Nav.Link onClick={()=>navigate("/signup")}>SignUp</Nav.Link> */}
          <Nav.Link onClick={()=>navigate("/home")}>Home</Nav.Link>
          <Nav.Link onClick={()=>navigate("/manage")}>Manage</Nav.Link>
          <Nav.Link onClick={()=>navigate("/create")}>Create</Nav.Link>
          <Nav.Link className="nav-link-no-decoration"><Logout/></Nav.Link>

        </Nav> 
      </Container>
    </Navbar>
  </div>
}

export default NavBar