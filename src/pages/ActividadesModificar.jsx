import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import {toast, ToastContainer} from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'

const initialState ={
    id: "",
    fecha: "",
    clases: 0,
    materias: "",
    grupos: 0,
    alumnos: 0,
    horario: "Matutino",
    duracion: 0,
    preparacion: 0,
    revision: 0,
    investigacion: 0,
    administrativas: 0,
    clave_profesor: ""
}

const ActividadesModificar = () => {

    const navigate = useNavigate()

    const {id} = useParams()

    const [datos, setDatos] = useState(initialState)

    useEffect(() => {
      
        getDatos()

      }, [])

    function getDatos(){
        axios.get(`http://127.0.0.1:5000/actividades/ver/registro/${id}`).then(response => setDatos(response.data.result[0])).catch(err => console.error(err))
    }

    function handleChange(e){
        const {name, value} = e.target

        setDatos({...datos, [name]: value})
    }

    function handleCancelar(){
        getDatos()
    }

    async function handleSubmit(e){
        e.preventDefault()

        const {clases, materias, grupos, alumnos, horario, duracion, preparacion, revision, investigacion, administrativas} = datos



        const formData = new FormData()

        formData.append('clases', clases)
        formData.append('duracion', duracion)
        formData.append('materias', materias)
        formData.append('grupos', grupos)
        formData.append('alumnos', alumnos)
        formData.append('horario', horario)
        formData.append('preparacion', preparacion)
        formData.append('revision', revision)
        formData.append('investigacion', investigacion)
        formData.append('administrativas', administrativas)


        await axios.patch(`http://127.0.0.1:5000/actividades/modificar/${id}`, formData).then(response =>{
            // console.log(response)
            notify(response.status)
            console.log(formData)
          }).catch(err =>{
            console.log(err)
          })

        function notify(num) {
        if(num===200){
            toast.success(
            'Registro agregado',
            {
                position: toast.POSITION.TOP_CENTER,
                onClose:() =>{
                handleCancelar()
                navigate(`/profesores/actividades/ver/${clave_profesor}`)
                },
                autoClose:500,
            },
    
            )
        }
        }

    }

    console.log(id)
    console.log(datos)

    const {fecha, clases, materias, grupos, alumnos, horario, duracion, preparacion, revision, investigacion, administrativas, clave_profesor} = datos
    

  return (
    <Container>
        <Row>
            <ToastContainer />
        </Row>
        <Row>
            <Col></Col>
            <Col xs={8}>
                <Container className='my-5 border rounded shadow'>
                    <h1 className='text-center mt-5'>Actualizar registro</h1>
                    <Form className='p-5' onSubmit={handleSubmit}>
                        <Form.Group>
                            <Row className='align-items-center'>
                                <Col xs={3} ><Form.Label>Fecha:</Form.Label></Col>
                                <Col xs={9}><Form.Control type='text' value={fecha} name="fecha" readOnly></Form.Control></Col>
                            </Row>
                            <Row className='mt-3 align-items-center'>
                                <Col xs={3} ><Form.Label>Clases impartidas:</Form.Label></Col>
                                <Col xs={9}><Form.Control type='number' value={clases} name="clases" onChange={handleChange}></Form.Control></Col>
                            </Row>
                            <Row className='mt-3 align-items-center'>
                                <Col xs={3} ><Form.Label>Duración:</Form.Label></Col>
                                <Col xs={9}><Form.Control type='number' value={duracion} name="duracion" onChange={handleChange}></Form.Control></Col>
                            </Row>
                            <Row className='mt-3 align-items-center'>
                                <Col xs={3} ><Form.Label>Materias impartidas:</Form.Label></Col>
                                <Col xs={9}><Form.Control type='text' value={materias} name="materias" onChange={handleChange}></Form.Control></Col>
                            </Row>
                            <Row className='mt-3 align-items-center'>
                                <Col xs={3} ><Form.Label>Grupos:</Form.Label></Col>
                                <Col xs={9}><Form.Control type='number' value={grupos} name="grupos" onChange={handleChange}></Form.Control></Col>
                            </Row>
                            <Row className='mt-3 align-items-center'>
                                <Col xs={3} ><Form.Label>Alumnos:</Form.Label></Col>
                                <Col xs={9}><Form.Control type='number' value={alumnos} name="alumnos" onChange={handleChange}></Form.Control></Col>
                            </Row>
                            <Row className='mt-3 align-items-center'>
                                <Col xs={3} ><Form.Label>Horario:</Form.Label></Col>
                                <Col xs={9}>
                                    <Form.Select value={horario} name="horario" onChange={handleChange}>
                                        <option value="Matutino">Matutino</option>
                                        <option value="Vespertino">Vespertino</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                            <Row className='mt-3 align-items-center'>
                                <Col xs={3} ><Form.Label>Preparación:</Form.Label></Col>
                                <Col xs={9}><Form.Control type='number' value={preparacion} name="preparacion" onChange={handleChange}></Form.Control></Col>
                            </Row>
                            <Row className='mt-3 align-items-center'>
                                <Col xs={3} ><Form.Label>Revisión:</Form.Label></Col>
                                <Col xs={9}><Form.Control type='number' value={revision} name="revision" onChange={handleChange}></Form.Control></Col>
                            </Row>
                            <Row className='mt-3 align-items-center'>
                                <Col xs={3} ><Form.Label>Investigación:</Form.Label></Col>
                                <Col xs={9}><Form.Control type='number' value={investigacion} name="investigacion" onChange={handleChange}></Form.Control></Col>
                            </Row>
                            <Row className='mt-3 mb-4 align-items-center'>
                                <Col xs={3} ><Form.Label>Actividades administrativas:</Form.Label></Col>
                                <Col xs={9}><Form.Control type='number' value={administrativas} name="administrativas" onChange={handleChange}></Form.Control></Col>
                            </Row>
                            <Row className='mt-5 text-center'>
                                <Col><Button variant='secondary' onClick={()=> navigate('/profesores')}>Volver</Button></Col>
                                <Col><Button variant='danger' onClick={handleCancelar}>Cancelar</Button></Col>
                                <Col><Button variant='success' type='submit'>Aceptar</Button></Col>
                            </Row>
                            
                        </Form.Group>
                    </Form>
                </Container>
            </Col>
            <Col></Col>
        </Row>
    </Container>
  )
}

export default ActividadesModificar
