import React, { useState } from 'react'
import BarraSuperior from './BarraSuperior'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProfesoresAgregar = () => {
  const initialState = {
    clave: '',
    nombre: '',
    apellidos: '',
    fNacimiento: '',
    email: '',
    sexo: '',
    estadoCivil: '',
    tCasa: '',
    CURP: '',
    tCelular: '',
    calle: '',
    colonia: '',
    CP: '',
    municipio: '',
    estado: '',
    // estatus: ''
  }
  const [datos, setDatos] = useState(initialState)
  const {clave, nombre, apellidos, fNacimiento, email, sexo, estadoCivil, tCasa, curp, tCelular, calle, colonia, cp, municipio, estado} = datos
  const handleChange = e =>{
    let {name, value} = e.target
    setDatos({...datos, [name]:value})
  }
  const handleSubmit = e =>{
    e.preventDefaul()
    console.warn('submit')
  }

  return (
    <>
      <BarraSuperior />
      <Container style={{paddingLeft: '6rem', paddingRight: '6rem'}}>
        <Form className='mt-4 mb-4' onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formClave">
            <Form.Label>Clave:</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu clave" name='clave' value={clave} onChange={handleChange} required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formNombres">
            <Form.Label>Nombres:</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu nombre" name='nombres' value={nombre} onChange={handleChange} required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formApellidos">
            <Form.Label>Apellidos:</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tus apellidos" name='apellidos' value={apellidos} onChange={handleChange} required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formfNacimiento">
            <Form.Label>Fecha de nacimiento:</Form.Label>
            <Form.Control type="date" placeholder="Ingresa tu fecha de nacimiento" name='fNacimiento' value={fNacimiento} onChange={handleChange} required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Correo electrónico:</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu correo electrónico" name='email' value={email} onChange={handleChange} required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formSexo">
            <Form.Label>Sexo:</Form.Label>
            <Form.Select aria-label="Default select example" name='sexo' required value={sexo} onChange={handleChange}>
              <option value="1">Masculino</option>
              <option value="2">Femenino</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formestadoCivil">
            <Form.Label>Estado civil:</Form.Label>
            <Form.Select aria-label="Default select example" name='estadoCivil' required value={estadoCivil} onChange={handleChange}>
              <option value="1">Soltero (a)</option>
              <option value="2">Casado (a)</option>
              <option value="3">Unión libre</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formsCasa">
            <Form.Label>Telefono de casa:</Form.Label>
            <Form.Control type="tel" placeholder="Ingresa tu telefono de casa" name='tCasa' value={tCasa} onChange={handleChange} pattern='[(][0-9]{3}[)][0-9]{7}' required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formsCurp">
            <Form.Label>CURP:</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu CURP" name='curp' value={curp} onChange={handleChange} pattern='^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/' required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formstCelular">
            <Form.Label>Telefono celular:</Form.Label>
            <Form.Control type="tel" placeholder="Ingresa tu telefono celular" name='tCelular' value={tCelular} onChange={handleChange} pattern='[(][0-9]{3}[)][0-9]{7}' required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formsCalle">
            <Form.Label>Calle:</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu calle" name='calle' value={calle} onChange={handleChange} required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formsColonia">
            <Form.Label>Colonia:</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu colonia" name='colonia' value={colonia} onChange={handleChange} required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formsCp">
            <Form.Label>Código Postal:</Form.Label>
            <Form.Control type="num" placeholder="Ingresa tu Código Postal" name='Cp' value={cp} onChange={handleChange} pattern='[0-9]{5}' required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formsMunicipio">
            <Form.Label>Municipio:</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu municipio" name='municipio' value={municipio} onChange={handleChange} required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formsEstado">
            <Form.Label>Estado:</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu estado" name='estado' value={estado} onChange={handleChange} required/>
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formsEstatus">
            <Form.Label>Estatus:</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu estatus" name='estatus' value={} onChange={handleChange} required/>
          </Form.Group> */}
          
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </Container>
    </>
  )
}

export default ProfesoresAgregar
