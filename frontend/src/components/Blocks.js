import React from 'react';
import {Card, Button, CardGroup, Row, Col } from 'react-bootstrap';

const Blocks = () => {
  return (
    <div class="container" >
    <Row xs={1} md={2} className="g-4" style={{marginLeft: "14rem"}} >

        <Card border="info" style={{ width: '25rem', height: '23rem'}}>
        <Card.Header>Code block 1</Card.Header>
        <Card.Body>
          <Card.Title>Calculator in JS</Card.Title>
          <Card.Text>
            This code block is for calculator implementation in JS.
            <br/>
            Mentor can watch the procces live and student can edit the code.
            <br/>
            Enjoy!
          </Card.Text>
          <Button variant="info" style={{marginTop: "70px"}}>Go to code block</Button>
        </Card.Body>
      </Card>
      
      <Card border="info" style={{ width: '25rem', height: '23rem', marginLeft: '2rem'}}>
        <Card.Header>Code block 2</Card.Header>
        <Card.Body>
          <Card.Title>Basic Client Server App in JS</Card.Title>
          <Card.Text>
            This code block is for client server app implementation in JS.
            <br/>
            Mentor can watch the procces live and student can edit the code.
            <br/>
            Enjoy!
          </Card.Text>
          <Button variant="info" style={{marginTop: "70px"}}>Go to code block</Button>
        </Card.Body>
      </Card>
      </Row>

      <Row xs={1} md={2} className="g-4" style={{marginTop:"1rem", marginLeft: "14rem"}}>
      <Card border="info" style={{ width: '25rem', height: '23rem'}}>
        <Card.Header>Code block 3</Card.Header>
        <Card.Body>
          <Card.Title>Algorithm Question in JS</Card.Title>
          <Card.Text>
            This code block is for Algorithm Coding Question in JS.
            <br/>
            Mentor can watch the procces live and student can edit the code.
            <br/>
            Enjoy!
          </Card.Text>
          <Button variant="info" style={{marginTop: "70px"}}>Go to code block</Button>
        </Card.Body>
      </Card>
      <Card border="info" style={{ width: '25rem', height: '23rem', marginLeft: '2rem'}}>
        <Card.Header>Code block 4</Card.Header>
        <Card.Body>
          <Card.Title>Medium Code Question in JS</Card.Title>
          <Card.Text>
            This code block is for Medium Level Code Question in JS.
            <br/>
            Mentor can watch the procces live and student can edit the code.
            <br/>
            Enjoy!
          </Card.Text>
          <Button variant="info" style={{marginTop: "70px"}}>Go to code block</Button>
        </Card.Body>
      </Card>
      
    </Row>
    
    </div>
  );
}

export default Blocks;