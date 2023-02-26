import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Form, Button} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleRight, faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";


// Variable para inicializar el valor de la variable data3
const initialState = {
    campo1: '',
    campo2: '',
    campo3: '',
    campo4: '',
    campo5: ''
}

const Seccion3 = () => {

    //Obteniendo la id del almacenamiento local
    const id = JSON.parse(localStorage.getItem('id'))

    useEffect(() =>{
        //Checando si existe el elemento 'data' en el almacenamiento local, en caso de que no exista, le asigna el valor de initialState
        if(localStorage.getItem('data3')){
            setData3(JSON.parse(localStorage.getItem('data3')))
        }else{
            localStorage.setItem('data3', JSON.stringify(initialState))
        }

    }, [])

    //Creando la instancia del hook useNavigate
    const navigate = useNavigate()

    //Creando el hook donde se almacenarán los datos de los inputs
    const [data3, setData3] = useState(initialState)

    //Guardar el valor de los inputs en la variable data3
    function handleChange(e) {
        const {name, value} = e.target
        setData3({...data3, [name]: value})
    }

    //Guardar el valor de la variable data3 en el almacenamiento local
    function handleSubmit(){
        localStorage.setItem('data3', JSON.stringify(data3));
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
        setData3(initialState)
        localStorage.setItem('data3', JSON.stringify(initialState))
    }

    //Destructuración de la variable data3
    const {campo1, campo2, campo3, campo4, campo5} = data3

  return (
    <Container className='mt-5'>
        <Row>
          <Col>
            <ToastContainer /> 
          </Col>
        </Row>
        <Row>
            <Col className='d-grid align-items-center justify-content-start fs-5'><div className='regresar' onClick={() => navigate(`/profesores/curriculum/${id}/escolaridades`)}><FontAwesomeIcon icon={faAngleLeft} size='xl'/></div></Col>
            <Col xs={8}>
                <h1 className='text-center'>Seccion3</h1>
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
                        {/* Reiniciando el valor de la variable data3 */}
                        <Button variant='danger' onClick={handleCancelar} >Cancelar</Button> 
                    </div>
                </Form>
            </Col>

            <Col className='d-grid align-items-center justify-content-end fs-5'><div className='siguiente' onClick={() => navigate(`/profesores/curriculum/${id}/seccion4`)}><FontAwesomeIcon icon={faAngleRight} size='xl'/></div></Col>
        </Row>
    </Container>
  )
}

export default Seccion3
