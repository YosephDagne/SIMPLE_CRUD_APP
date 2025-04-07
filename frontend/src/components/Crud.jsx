import React, { useState, useEffect, Fragment } from "react";
import { Button, Modal, Row, Col, Container, Form } from "react-bootstrap";

const Crud = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isActive, setIsActive] = useState(0);

  const [editId, setEditId] = useState("");
  const [editName, setEditName] = useState("");
  const [editAge, setEditAge] = useState("");
  const [editIsActive, setEditIsActive] = useState(0);

  const empdata = [
    { id: 1, name: "John", age: 25, isActive: 1 },
    { id: 2, name: "Jane", age: 30, isActive: 1 },
    { id: 3, name: "Doe", age: 35, isActive: 1 },
  ];

  const [data, setData] = useState([]);
  useEffect(() => {
    setData(empdata);
  }, []);

  const handleEdit = (id) => {
    handleShow();
    const emp = data.find((item) => item.id === id);
    if (emp) {
      setEditId(emp.id);
      setEditName(emp.name);
      setEditAge(emp.age);
      setEditIsActive(emp.isActive);
    }
  };

  const handleDelete = (id) => {};

  const handleUpdate = () => {
    //alert();
  };

  return (
    <Fragment>
      <Container className="my-4">
        {/* Form for Add Employee */}
        <Row className="align-items-end mb-3">
          <Col md={3}>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={name}
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </Col>
          <Col md={3}>
            <Form.Control
              type="text"
              placeholder="Enter Age"
              className="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </Col>
          <Col md={2}>
            <Form.Check
              type="checkbox"
              label="isActive"
              className="d-flex align-items-center"
              checked={isActive === 1 ? true : false}
              onChange={(e) => setIsActive(e.target.checked ? 1 : 0)}
            />
          </Col>
          <Col md={2}>
            <Button variant="success" onClick={handleShow} className="w-100">
              Add Employee
            </Button>
          </Col>
        </Row>
      </Container>

      <div className="container mt-5">
        <h2 className="mb-4">Employee List</h2>
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Age</th>
              <th>Is Active</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data && data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.isActive ? "Yes" : "No"}</td>
                  <td>
                    <Button
                      variant="primary"
                      size="sm"
                      className="me-2"
                      onClick={() => handleEdit(item.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No Data Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Col md={12}>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  className="form-control"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={12}>
                <Form.Control
                  type="text"
                  placeholder="Enter Age"
                  className="form-control"
                  value={editAge}
                  onChange={(e) => setEditAge(e.target.value)}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={12}>
                <Form.Check
                  type="checkbox"
                  label="isActive"
                  className="d-flex align-items-center"
                  checked={editIsActive === 1 ? true : false}
                  onChange={(e) => setEditIsActive(e.target.checked ? 1 : 0)}
                />
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default Crud;
