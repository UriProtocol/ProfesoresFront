import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profesores = () => {

  const initialState = {
    show: false,
    clave: '',
    nombres: '',
    apellidos: ''
 }

  const [datos, setDatos] = useState([]);
  const [show, setShow] = useState(false)

  useEffect(() => {
    traerDatos();
  }, []);

  const navigate = useNavigate();

  const traerDatos = async () => {
    await axios
      .get("http://localhost:5000/profesores")
      .then((response) => setDatos(response.data.result))
      .catch((error) => console.log(error));
  };
  const handleClose = () =>{
    setShow(initialState)
  }
  const handleEliminar = (clave, nombre, apellidos) =>{
    const showState = {
      show: true,
      clave,
      nombre,
      apellidos
    }
    setShow(showState)
  }

  const handleEliminar2 = (clave) => {
    axios.get(`http://localhost:5000/profesor/eliminar/${ clave }`)
    .then(function(response){
      if(response.data.result.affectedRows>0){
        notify(response.status)
        traerDatos();
        setShow(initialState)
      }
    })
    .catch(function(error) {
      console.log(error)
    })
  }

  function notify(num) {
    if(num===200){
      toast.error(
        'Profesor eliminado',
        {
          position: toast.POSITION.TOP_CENTER,
          onClose:() =>{
          },
          autoClose:800,
          theme: 'colored'
        },

      )
    }
  }



  return (
    <>
      <Container className="mt-5">
      <Row>
          <Col>
            <ToastContainer /> 
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Clave</th>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Curp</th>
                  <th>Tel. Movil</th>
                  <th>Estatus</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {datos.map((prof) => (
                  <tr key={prof.clave}>
                    <td>{prof.clave}</td>
                    <td>{prof.nombres + " " + prof.apellidos}</td>
                    <td>{prof.email}</td>
                    <td>{prof.curp}</td>
                    <td>{prof.tcelular}</td>
                    <td>{prof.estatus}</td>
                    <td>
                      <Button
                        onClick={() =>
                          navigate(`/profesores/modificar/${prof.clave}`)
                        }
                        variant="primary"
                        size="sm"
                      >
                        Modificar
                      </Button>{" "}
                      <Button variant="danger" size="sm" className="ms-2" onClick={() => handleEliminar(prof.clave, prof.nombres, prof.apellidos)}>
                        Eliminar
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col>
            <Modal show={show.show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{`${show.clave}-${show.nombre} ${show.apellidos}`}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Tem certeza de que deseja excluir este registro?
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => handleEliminar2(show.clave)}>
                  Fechar
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Guardar mudanças
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profesores;
