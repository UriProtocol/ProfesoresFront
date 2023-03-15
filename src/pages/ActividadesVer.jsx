import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'
import {toast, ToastContainer} from 'react-toastify'

const initialState = [
    {
        id: '',
        fecha: '',
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
]


const ActividadesVer = () => {

    const navigate = useNavigate()

    const {clave} = useParams()

    useEffect(() => {
        getRegistros()
    }, [])

    const [datos, setDatos] = useState(initialState)
    

    async function getRegistros(){
        await axios.get(`http://127.0.0.1:5000/actividades/ver/${clave}`).then(response =>{
            const respuesta = response.data.result
            setDatos(respuesta.reverse())
        }).catch(error => console.log(error))
    }

    async function handleEliminar(id){
        await axios.delete(`http://127.0.0.1:5000/actividades/eliminar/${id}`).then(response =>{
            notify(response.status)
            getRegistros()
        }).catch(error => console.log(error))
    }

    function notify(num) {
        if(num===200){
          
          toast.error(
              'Registro eliminado',
            {
              position: toast.POSITION.TOP_CENTER,
              autoClose:800,
              theme: 'colored',
              autoClose:500,
            },
    
          )
        }else if(num===404){
          toast.warning(
            'No se ha encontrado el registro',
            {
              position: toast.POSITION.TOP_CENTER,
              autoClose:500,
            },
    
          )
        }
      }

    console.log(datos)

  return (
    <Container>
        <Row>
            <ToastContainer />
        </Row>
        <Row>
            <Col></Col>
            <Col xs={6} className='mb-5 text-center'>
                <h1 className='text-center mt-5 mb-3'>Historial de actividades</h1>
                {datos.map(d =>{
                    return (
                        <Container className='my-4 py-4 px-5 border rounded shadow text-start'>
                            <h2 className='text-center mb-4'>{d.fecha}</h2>
                            <p><b>Clases impartidas: </b>{d.clases}</p>
                            <p><b>Duración: </b>{d.duracion}</p>
                            <p><b>Materia(s) impartidas: </b>{d.materias}</p>
                            <p><b>Grupo(s): </b>{d.grupos}</p>
                            <p><b>Alumno(s): </b>{d.alumnos}</p>
                            <p><b>Horario: </b>{d.horario}</p>
                            <p><b>Preparación (minutos): </b>{d.preparacion}</p>
                            <p><b>Revisión (minutos): </b>{d.revision}</p>
                            <p><b>Investigación (minutos): </b>{d.investigacion}</p>
                            <p><b>Actividades administrativas (minutos): </b>{d.administrativas}</p>

                            <Row className='mt-5 text-center'>
                                <Col><Button variant='danger' onClick={()=> handleEliminar(d.id)}>Eliminar</Button></Col>
                                <Col><Button variant='primary' onClick={()=> navigate(`/profesores/actividades/modificar/${d.id}`)}>Modificar</Button></Col>
                            </Row>
                        </Container>
                    )
                })}
                <Button variant='secondary' size='lg' onClick={()=> navigate('/profesores')}>Volver</Button>
            </Col>
            <Col></Col>
        </Row>
    </Container>
  )
}

export default ActividadesVer
