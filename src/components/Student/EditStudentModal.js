import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch } from "react-redux";
import { asyncEditStudent } from "../../redux/actions/studentDetailsAction";

const EditStudentModal = (props) => {
  const { onHide, name, email, id } = props
  const dispatch = useDispatch()
  const [ sName, setsName ] = useState(name)
  const [ sEmail, setsEmail ] = useState(email)

const handleInput = (e) => {
    if (e.target.name === 'name'){
        setsName(e.target.value)
    } else if(e.target.name === 'email'){
        setsEmail(e.target.value)
    }
}

const handleSave = () => {
    const formData = {
        name: sName,
        email: sEmail,
        // isAllowed: isAllowed
    }
    dispatch(asyncEditStudent(formData, id))
    onHide()
}

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <>
              <Modal.Header closeButton>
                  <Modal.Title>Edit Student</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                  <Form.Control className="form-control" value={sName} name='name' type='text' onChange={handleInput} placeholder='name' />
                      <br /> <br /> 
                  <Form.Control className="form-control" value={sEmail} name='email' type='text' onChange={handleInput} placeholder='email' />
                      <br /> <br />    
              </Modal.Body>
              <Modal.Footer>
                    <Button variant="primary" onClick={() => {
                        handleSave()}} > Save changes </Button> 
              </Modal.Footer>
              </>
      </Modal>
    )
  }

  export default EditStudentModal
