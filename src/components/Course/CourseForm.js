import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

const CourseForm = (props) => {


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
                  <Modal.Title>Course</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                  {/* <Form.Control className="form-control" value={name} name='name' type='text' onChange={handleInput} placeholder='Username' />
                      <br /> <br /> 
                  <Form.Control className="form-control" value={description} name='description' type='textarea' onChange={handleInput} placeholder='email' />
                      <br /> <br />
                  <Form.Control className="form-control" value={duration} name='duration' type='text' onChange={handleInput} placeholder='name' />
                      <br />  <br />
                  <Form.Control className="form-control" value={releaseDate} name='releaseDate' type='text' onChange={handleInput} placeholder='website' />
                      <br />   <br /> 
                           
                    <Form.Control className="form-control" value={isDelete} name='isDelete' type='text' onChange={handleInput} placeholder='website' />
                    <br />   <br />      
                    <Form.Control className="form-control" value={category} name='category' type='text' onChange={handleInput} placeholder='website' />
                    <br />   <br />      
                    <Form.Control className="form-control" value={validity} name='validity' type='text' onChange={handleInput} placeholder='website' />
                    <br />   <br />      
                    <Form.Control className="form-control" value={level} name='level' type='text' onChange={handleInput} placeholder='website' />
                    <br />   <br />      
                    <Form.Control className="form-control" value={author} name='author' type='text' onChange={handleInput} placeholder='website' /> */}
                    <br />   <br /> 
              </Modal.Body>
              <Modal.Footer>
                    <Button variant="primary" onClick={handleSave} > Save changes </Button> 
              </Modal.Footer>
              </>
      </Modal>
    )
}

export default CourseForm