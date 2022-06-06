import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import getById from './GetSelectors/getById';

const Detalle = () => {
     //usenavigate 
        const navigate = useNavigate()

    //El use Params acceder a la informacion que le estoy pasando para la ruta <Route>
    //obtengo el valor del objeto
    const {id} = useParams()
    console.log(id)

    //traer la data Movies
    const movie = getById(id)
    console.log(movie)
    //desestructuro la movie 

    const {name, description}= movie[0]
    console.log(name, description)

    //Esto es para el manejo del Modal
     const [show, setShow] = useState(true);
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

    // usar la navegacion de la  ruta para volver a la  pagina anterior
    const handleReturn =()=>{
        navigate(-1)

    }

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
            <img src={`../assets/movies/${id}.jpg`} alt=""/>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <img src={`../assets/movies/${id}.jpg`} alt="" width="100%" height=""/>
                <p>{description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleReturn}>
                        Atras..
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Detalle;