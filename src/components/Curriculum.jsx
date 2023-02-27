import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const Curriculum = ({curriculum}) => {
  return (
    <Container className='border my-4 p-4'>
            <Row className='mx-auto justify-content-center'>
              <Row>
                <h3 className='text-center'>Datos generales</h3>
              </Row>
              <Row className='justify-content-center border rounded'>
                <Row>
                  <Col><b>Nombre(s): </b><p>{curriculum.infoGeneral.nombres}</p></Col>
                  <Col><b>Apellido(s): </b><p>{curriculum.infoGeneral.apellidos}</p></Col>
                  <Col><b>Calle: </b><p>{curriculum.infoGeneral.calle}</p></Col>
                  <Col><b>Colonia: </b><p>{curriculum.infoGeneral.colonia}</p></Col>
                </Row>
                <Row>
                  <Col><b>Código Postal: </b><p>{curriculum.infoGeneral.cp}</p></Col>
                  <Col><b>Email: </b><p>{curriculum.infoGeneral.email}</p></Col>
                  <Col><b>Sexo: </b><p>{curriculum.infoGeneral.sexo}</p></Col>
                  <Col><b>Fecha de Nacimiento: </b><p>{curriculum.infoGeneral.fNacimiento}</p></Col>
                </Row>
                <Row>
                  <Col><b>Teléfono de Casa: </b><p>{curriculum.infoGeneral.tCasa}</p></Col>
                  <Col><b>Telefono Celular: </b><p>{curriculum.infoGeneral.tCelular}</p></Col>
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
                <h3 className='text-center'>Experiencia</h3>
              </Row>
              <Row className='justify-content-center border rounded'>
                <Row>
                  <Col><b>Puesto de trabajo: </b><p>{curriculum.experiencia.puesto}</p></Col>
                  <Col><b>Empleador: </b><p>{curriculum.experiencia.empleador}</p></Col>
                  <Col><b>Localidad: </b><p>{curriculum.experiencia.localidad}</p></Col>                 
                </Row>
                <Row>
                  <Col><b>Fecha de Inicio: </b><p>{curriculum.experiencia.fInicio}</p></Col>
                  <Col><b>Fecha de Salida: </b><p>{curriculum.experiencia.fFinal}</p></Col>
                </Row>
                <Row>
                  <Col><b>Descripción: </b><p>{curriculum.experiencia.descripcion}</p></Col>
                </Row>
              </Row>
            </Row>

            <Row className='mx-auto justify-content-center'>
              <Row>
                <h3 className='text-center'>Otros</h3>
              </Row>
              <Row className='justify-content-center border rounded'>
                <Row>
                  <Col><b>Competencias: </b><p>{curriculum.otros.competencias}</p></Col>
                  <Col><b>Actividades Extra: </b><p>{curriculum.otros.actExtra}</p></Col>
                  <Col><b>Pasatiempos: </b><p>{curriculum.otros.hobbies}</p></Col>
                </Row>
                <Row>
                  <Col><b>Cursos: </b><p>{curriculum.otros.cursos}</p></Col>
                  <Col><b>Redes Sociales: </b><p>{curriculum.otros.redSociales}</p></Col>
                  <Col><b>Idiomas: </b><p>{curriculum.otros.idiomas}</p></Col>
                </Row>
                <Row>
                  <Col><b>Valores: </b><p>{curriculum.otros.valores}</p></Col> 
                </Row>
              </Row>
            </Row>
          </Container>
  )
}

export default Curriculum
