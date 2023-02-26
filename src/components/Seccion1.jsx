import React, { useEffect, useState } from 'react'
import { Container, Col, Row, Form, Button} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleRight, faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, useParams } from "react-router-dom";


// Variable para inicializar el valor de la variable data
const initialState = {
    campo1: '',
    campo2: '',
    campo3: '',
    campo4: '',
    campo5: ''
}

const Seccion1 = () => {

    //Obteniendo la id de la URL
    const {id} = useParams()

    //Guardando el valor de la id en el almacenamiento local al iniciar la página
    useEffect(() => {
        localStorage.setItem('id', JSON.stringify(id))
        //Checando si existe el elemento 'data' en el almacenamiento local, en caso de que no exista, le asigna el valor de initialState
        if(localStorage.getItem('data')){
            setData(JSON.parse(localStorage.getItem('data')))
        }else{
            localStorage.setItem('data', JSON.stringify(initialState))
        }

    }, [id])
    

    //Creando la instancia del hook useNavigate
    const navigate = useNavigate()

    //Creando el hook donde se almacenarán los datos de los inputs
    const [data, setData] = useState(initialState)

    //Guardar el valor de los inputs en la variable data
    function handleChange(e) {
        const {name, value} = e.target
        setData({...data, [name]: value})
    }

    //Guardar el valor de la variable data en el almacenamiento local
    function handleSubmit(){
        localStorage.setItem('data', JSON.stringify(data));
        toast.success(
            'Datos guardados',
            {
              position: toast.POSITION.TOP_CENTER,
              autoClose:300,
            },
          )
    }

    //Reiniciar el valor de la variable data y el campo data en el almacenamiento local
    function handleCancelar() {
        setData(initialState)
        localStorage.setItem('data', JSON.stringify(initialState))
    }

    //Destructuración de la variable data
    const {campo1, campo2, campo3, campo4, campo5} = data

  return (
    <Container className='mt-5'>
        <Row>
          <Col>
            <ToastContainer /> 
          </Col>
        </Row>
        <Row>
            <Col className='d-grid align-items-center justify-content-start fs-5'><div className='regresar' onClick={() => navigate(`/profesores`)}><FontAwesomeIcon icon={faAngleLeft} size='xl'/></div></Col>
            <Col xs={8}>
                <h1 className='text-center'>Seccion1</h1>
                <Form className='border rounded p-4 mt-4 text-start'>
                    <Form.Group controlId='campo1' className='mb-3'>
                        <Form.Label className='ms-1'>Campo 1:</Form.Label>
                        <Form.Control type='text' placeholder='Ej: Universidad Tecnológica de Durango' name='campo1' value={campo1}  onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group controlId='campo2' className='mb-3'>
                        <Form.Label className='ms-1'>Campo 2:</Form.Label>
                        <Form.Control type='text' placeholder='Ej: Durango' name='campo2' value={campo2} onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group controlId='campo3' className='mb-3'>
                        <Form.Label className='ms-1'>Campo 3:</Form.Label>
                        <Form.Control type='text' placeholder='Ej: Ingeniero en Desarrollo de Software' name='campo3' value={campo3} onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group controlId='campo4' className='mb-3'>
                        <Form.Label className='ms-1'>Campo 4:</Form.Label>
                        <Form.Control type='text' placeholder='Ej: Tecnologías de la Información' name='campo4' value={campo4} onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group controlId='campo5'>
                        <Form.Label className='ms-1'>Campo 5:</Form.Label>
                        <Form.Control type='text' placeholder='Ej: 2016' name='campo5' value={campo5} onChange={handleChange}/>
                    </Form.Group>
                    <div className='d-flex justify-content-center gap-4 mt-4'>
                        <Button variant='primary' onClick={handleSubmit} >Aceptar</Button>
                        {/* Reiniciando el valor de la variable data */}
                        <Button variant='danger' onClick={handleCancelar} >Cancelar</Button> 
                    </div>
                </Form>
            </Col>

            <Col className='d-grid align-items-center justify-content-end fs-5'><div className='siguiente' onClick={() => navigate(`/profesores/curriculum/${id}/escolaridades`)}><FontAwesomeIcon icon={faAngleRight} size='xl'/></div></Col>
        </Row>
    </Container>
  )
}

export default Seccion1
