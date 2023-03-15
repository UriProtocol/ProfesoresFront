import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import {toast, ToastContainer} from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


const initialState = {
    fecha: new Date().toISOString().slice(0, 10),
    clases: 0,
    duracion: 0,
    materias: '',
    grupos: 0,
    alumnos: 0,
    horario: 'Matutino',
    preparacion: 0,
    revision: 0,
    investigacion: 0,
    administrativas: 0
}

const ActividadesAgregar = () => {

    const {clave} = useParams()

    const navigate = useNavigate()

    const [datos, setDatos] = useState(initialState)

    function handleChange(e){

        const {name, value} = e.target

        setDatos({...datos, [name]: value})

    }

    function handleCancelar(){
        setDatos(initialState)
    }
    async function handleSubmit(e){
        e.preventDefault()

        const {fecha, clases, duracion, materias, grupos, alumnos, horario, preparacion, revision, investigacion, administrativas} = datos


        const formData = new FormData()

        formData.append('fecha', fecha)
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


        await axios.post(`http://127.0.0.1:5000/actividades/agregar/${clave}`, formData).then(response =>{
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
                    navigate('/profesores')
                  },
                  autoClose:500,
                },
      
              )
            }
          }
    }


    const {fecha, clases, duracion, materias, grupos, alumnos, horario, preparacion, revision, investigacion, administrativas} = datos

  return (
    <Container>
        <Row>
            <ToastContainer />
        </Row>
        <Row>
            <Col></Col>
            <Col xs={8}>
                <Form className='border p-4 rounded my-5 shadow' onSubmit={handleSubmit}>
                    <h2 className='mb-4 text-center'>Registrar actividades</h2>
                    <Form.Group>
                        <Form.Label>Fecha: </Form.Label>
                        <Form.Control type='date' value={fecha} onChange={handleChange} name='fecha' readOnly></Form.Control>
                    </Form.Group>
                    <Row className='gap-4 mt-3'>
                        <Col>
                            <Form.Group>
                                <Form.Label>Número de clases: </Form.Label>
                                <Form.Control type='number' value={clases} onChange={handleChange} name='clases' placeholder='2'></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Duración (minutos): </Form.Label>
                                <Form.Control type='number' value={duracion} onChange={handleChange} name='duracion' placeholder='120'></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className='gap-4 mt-3'>
                        <Col xs={8}>
                            <Form.Group>
                                <Form.Label>Materia(s): </Form.Label>
                                <Form.Control type='text' value={materias} onChange={handleChange} name='materias' placeholder='Matemáticas, Ciencias, Español...' maxLength='70'></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Grupo(s): </Form.Label>
                                <Form.Control type='number' value={grupos} onChange={handleChange} name='grupos' placeholder='2'></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className='gap-4 mt-3'>
                        <Col>
                            <Form.Group>
                                <Form.Label>Alumnos: </Form.Label>
                                <Form.Control type='number' value={alumnos} onChange={handleChange} name='alumnos' placeholder='50'></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Horario: </Form.Label>
                                <Form.Select value={horario} onChange={handleChange} name='horario'>
                                    <option value="Matutino">Matutino</option>
                                    <option value="Vespertino">Vespertino</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className='gap-4 mt-3'>
                        <Col>
                            <Form.Group>
                                <Form.Label>Preparación (minutos): </Form.Label>
                                <Form.Control type='number' value={preparacion} onChange={handleChange} name='preparacion' placeholder='45'></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Revisión (minutos): </Form.Label>
                                <Form.Control type='number' value={revision} onChange={handleChange} name='revision' placeholder='30'></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Act. de investigación (minutos): </Form.Label>
                                <Form.Control type='number' value={investigacion} onChange={handleChange} name='investigacion' placeholder='20'></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className='mt-3'>
                        <Form.Label>Act. administrativas (minutos): </Form.Label>
                        <Form.Control type='number' value={administrativas} onChange={handleChange} name='administrativas' placeholder='25'></Form.Control>
                    </Form.Group>
                    <Row className='mt-4 text-center'>
                        <Col><Button variant='secondary' onClick={()=> navigate('/profesores')}>Volver</Button></Col>
                        <Col><Button variant='danger' onClick={handleCancelar}>Cancelar</Button></Col>
                        <Col><Button variant="success" type='submit'>Registrar</Button></Col>
                    </Row>
                </Form>
            </Col>
            <Col></Col>
        </Row>

    </Container>
  )
}

export default ActividadesAgregar
