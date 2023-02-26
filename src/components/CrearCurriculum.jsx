import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleRight, faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';



const initialState = {
  data: {
    campo1: '',
    campo2: '',
    campo3: '',
    campo4: '',
    campo5: ''
  },
  escolaridades: {
    centroEducativo: '',
    ubicacionCentro: '',
    titulo: '',
    campoEstudio: '',
    graduacion: ''
  },
  data3: {
    campo1: '',
    campo2: '',
    campo3: '',
    campo4: '',
    campo5: ''
  },
  data4: {
    campo1: '',
    campo2: '',
    campo3: '',
    campo4: '',
    campo5: ''
  },
}

const CrearCurriculum = () => {

  //Obteniendo la id del almacenamiento local
  const id = JSON.parse(localStorage.getItem('id'))

  const [curriculum, setCurriculum] = useState(initialState)

  //Obteniendo los datos del almacenamiento local
  useEffect(() =>{
    const data = JSON.parse(localStorage.getItem('data'))
    const escolaridades = JSON.parse(localStorage.getItem('escolaridades'))
    const data3 = JSON.parse(localStorage.getItem('data3'))
    const data4 = JSON.parse(localStorage.getItem('data4'))

    setCurriculum({data: {...data}, escolaridades: {...escolaridades}, data3: {...data3}, data4: {...data4} })
  }, [])

  async function handleSubmit() {
    const {centroEducativo, ubicacionCentro, titulo, graduacion, campoEstudio} = curriculum.escolaridades

    const formData = new FormData()

    formData.append("clave", id)
    formData.append("centroEducativo", centroEducativo)
    formData.append("ubicacionCentro", ubicacionCentro)
    formData.append("titulo", titulo)
    formData.append("fechaGraduacion", graduacion)
    formData.append("campoEstudio", campoEstudio)

    await axios.post("http://localhost:5000/curriculum/agregar", formData).then(response =>{
      
    }).catch(err =>{
      console.log(err)
    })

    await axios.patch("http://127.0.0.1:5000/curriculum/profesor", {clave: id, bool: 1}).then(response =>{
      notify(response.status)

    }).catch(err =>{
      console.log(err)
    })

    function notify(num) {
      if(num===200){
        toast.success(
          'Curriculum creado',
          {
            position: toast.POSITION.TOP_CENTER,
            onClose:() =>{
              navigate('/profesores')
            },
            autoClose:800,
          },

        )
      }
    }
  
  }


  //Creando la instancia del hook useNavigate
  const navigate = useNavigate()

  return (
    <Container className='mt-5 text-center'>
      <Row>
        <Col>
          <ToastContainer /> 
        </Col>
      </Row>
      <Row>
      <Col className='d-grid align-items-center justify-content-start fs-5'><div className='regresar' onClick={() => navigate(`/profesores/curriculum/${id}/seccion4`)}><FontAwesomeIcon icon={faAngleLeft} size='xl'/></div></Col>
        <Col xs={8} >
          <h1>¿Crear currículum?</h1>
          <Container className='border my-4 p-4'>
            <Row className='mx-auto justify-content-center'>
              <Row>
                <h3 className='text-center'>Seccion1</h3>
              </Row>
              <Row className='justify-content-center border rounded'>
                <Row>
                  <Col><b>campo1: </b><p>{curriculum.data.campo1}</p></Col>
                  <Col><b>campo2: </b><p>{curriculum.data.campo2}</p></Col>
                  <Col><b>campo3: </b><p>{curriculum.data.campo3}</p></Col>
                  
                </Row>
                <Row>
                  <Col><b>campo4: </b><p>{curriculum.data.campo4}</p></Col>
                  <Col><b>campo5: </b><p>{curriculum.data.campo5}</p></Col>
                </Row>
              </Row>
            </Row>

            <Row className='mx-auto justify-content-center'>
              <Row>
                <h3 className='text-center'>Escolaridades</h3>
              </Row>
              <Row className='justify-content-center border rounded'>
                <Row>
                  <Col><b>Centro educativo: </b><p>{curriculum.escolaridades.centroEducativo}</p></Col>
                  <Col xs={6}><b>Ubicación del centro educativo: </b><p>{curriculum.escolaridades.ubicacionCentro}</p></Col>
                  <Col><b>Título: </b><p>{curriculum.escolaridades.titulo}</p></Col>
                  
                </Row>
                <Row>
                  <Col><b>Campo de estudio: </b><p>{curriculum.escolaridades.campoEstudio}</p></Col>
                  <Col><b>Año de Graduación: </b><p>{curriculum.escolaridades.graduacion}</p></Col>
                </Row>
              </Row>
            </Row>

            <Row className='mx-auto justify-content-center'>
              <Row>
                <h3 className='text-center'>Seccion3</h3>
              </Row>
              <Row className='justify-content-center border rounded'>
                <Row>
                  <Col><b>campo1: </b><p>{curriculum.data3.campo1}</p></Col>
                  <Col><b>campo2: </b><p>{curriculum.data3.campo2}</p></Col>
                  <Col><b>campo3: </b><p>{curriculum.data3.campo3}</p></Col>
                  
                </Row>
                <Row>
                  <Col><b>campo4: </b><p>{curriculum.data3.campo4}</p></Col>
                  <Col><b>campo5: </b><p>{curriculum.data3.campo5}</p></Col>
                </Row>
              </Row>
            </Row>

            <Row className='mx-auto justify-content-center'>
              <Row>
                <h3 className='text-center'>Seccion4</h3>
              </Row>
              <Row className='justify-content-center border rounded'>
                <Row>
                  <Col><b>campo1: </b><p>{curriculum.data4.campo1}</p></Col>
                  <Col><b>campo2: </b><p>{curriculum.data4.campo2}</p></Col>
                  <Col><b>campo3: </b><p>{curriculum.data4.campo3}</p></Col>
                  
                </Row>
                <Row>
                  <Col><b>campo4: </b><p>{curriculum.data4.campo4}</p></Col>
                  <Col><b>campo5: </b><p>{curriculum.data4.campo5}</p></Col>
                </Row>
              </Row>
            </Row>
          </Container>
          <div className='mb-5'>
            <Button variant='success' onClick={handleSubmit} size='xl' className='me-4'>Crear</Button>
            <Button variant='danger' size='xl' onClick={() => navigate('/profesores')}>Deshacer</Button>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}

export default CrearCurriculum
