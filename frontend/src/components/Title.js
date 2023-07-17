import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Title = ({ title }) => {
  return (
    <Card className="text-center" border="light">
      <Card.Body>
        <Card.Title as="h3">{ title }</Card.Title>
        <Card.Text>
 
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Title;