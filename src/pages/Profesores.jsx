import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profesores = () => {

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
    setShow(false)
  }
  const handleEliminar = () =>{
    setShow(true)
  }

  return (
    <>
      <Container className="mt-5">
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
                      <Button variant="danger" size="sm" className="ms-2" onClick={handleEliminar}>
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
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Chave-nome</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Tem certeza de que deseja excluir este registro?
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
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
