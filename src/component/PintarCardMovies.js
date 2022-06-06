import React from 'react';
import { Button, Card } from 'react-bootstrap';

const PintarCardMovies = ({id, name}) => {
    return (
        <div>
        <center>
        <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`./assets/movies/${id}.jpg`} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Button variant="primary">Detalle</Button>
                </Card.Body>
            </Card>
        </center>
            
        </div>
    );
};

export default PintarCardMovies;