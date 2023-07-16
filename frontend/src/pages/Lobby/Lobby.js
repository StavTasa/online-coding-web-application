import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const navbarStyle = {
  backgroundColor: 'lightblue'
};

const Lobby = ({ title }) => {
  return (
    <Navbar style={navbarStyle}>
    <Container>
      <Navbar.Brand ><h1>Remote Sessions</h1> <a>online coding platforme</a></Navbar.Brand>
    </Container>
  </Navbar>
  );
}

export default Lobby;