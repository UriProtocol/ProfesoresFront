import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {

  function handleProfesores(){
    <Link></Link>
  }

  return (
    <Container>
      <Row>
        <h1 className='text-center my-5'>Home</h1>
      </Row>
      <Row>
        <Col className='d-flex justify-content-center'>
          <Button as={Link} to='/profesores/ingresar'>Profesores</Button>
        </Col>
        <Col className='d-flex justify-content-center'>
          <Button>Alumnos</Button>
        </Col>
        <Col className='d-flex justify-content-center'>
          <Button>Administrativos</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
