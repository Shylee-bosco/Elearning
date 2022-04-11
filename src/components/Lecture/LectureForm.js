import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

const LectureForm = (props) => {
    const {
        title,
        description,
        assetType,
        assetURL,
        comments,
        students,
        course,
        isDelete,
    } = props

    const handleInput = (e) => {

    }

    const handleSave = () => {

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
                  <Modal.Title>Lecture</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                  <Form.Control className="form-control" value={title} name='title' type='text' onChange={handleInput} placeholder='Title' />
                      <br /> <br /> 
                  <Form.Control className="form-control" value={description} name='description' type='textArea' onChange={handleInput} placeholder='Description' />
                      <br /> <br />
                  <Form.Control className="form-control" value={assetType} name='assetType' type='text' onChange={handleInput} placeholder='name' />
                      <br />  <br />
                  <Form.Control className="form-control" value={assetURL} name='assetURL' type='text' onChange={handleInput} placeholder='website' />
                      <br />   <br /> 
                           
                    <Form.Control className="form-control" value={assetURL} name='assetURL' type='text' onChange={handleInput} placeholder='website' />
                    <br />   <br />      
                    <Form.Control className="form-control" value={students} name='students' type='text' onChange={handleInput} placeholder='website' />
                    <br />   <br />      
                    <Form.Control className="form-control" value={course} name='course' type='text' onChange={handleInput} placeholder='website' />
                    <br />   <br />      
                    <Form.Control className="form-control" value={isDelete} name='isDelete' type='text' onChange={handleInput} placeholder='website' />
                    <br />   <br /> 
              </Modal.Body>
              <Modal.Footer>
                    <Button variant="primary" onClick={handleSave} > Save changes </Button> 
              </Modal.Footer>
              </>
      </Modal>
    )
}

export default LectureForm