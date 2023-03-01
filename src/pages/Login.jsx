import React, {useState} from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'


const initialState = {
    clave: '',
    password: ''
}

const Login = () => {
    
    const [profesor, setProfesor] = useState(initialState)

    function handleChange(e){
        const {name, value} = e.target

        setProfesor({...profesor, [name]: value})
    }

    function handleSubmit(e){
        e.preventDefault()
        alert(`Clave: ${clave}, Contraseña: ${password}`)
    }

    const {clave, password} = profesor


  return (
    <>
    <Container className='my-5'>
        <Row>
            <Col></Col>
            <Col>
            <h1 className='text-center mb-4'>Inicio de sesión</h1>
            <Form className='p-4 rounded shadow' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formClave">
                <Form.Label>Clave:</Form.Label>
                <Form.Control type="text" placeholder="Ingresa tu clave" name="clave" value={clave} onChange={handleChange} className=' shadow-sm'/>
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" placeholder="Ingresa tu contraseña" name="password" value={password} onChange={handleChange} className=' shadow-sm'/>
                </Form.Group>
                
                <Container className='text-center'>
                    <Button variant="primary" type="submit" size='lg'>Ingresar</Button>
                </Container>
            </Form>
            </Col>
            <Col></Col>
        </Row>
    </Container>
    </>
  )
}

export default Login
