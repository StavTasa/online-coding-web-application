import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const navbarStyle = {
  backgroundColor: 'lightblue'
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle}>
    <Container>
      <Navbar.Brand ><h1>{ title }</h1> </Navbar.Brand>
    </Container>
  </Navbar>
  );
}

export default Header;