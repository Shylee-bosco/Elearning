import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch } from "react-redux";
import { asyncEditAdmin } from "../../redux/actions/adminDetailsAction";

const EditAdminModal = (props) => {
  const { onHide } = props
  const dispatch = useDispatch()
  const [ username, setUsername ] = useState(props.username)
  const [ email, setEmail ] = useState(props.email)
  const [ name, setName ] = useState(props.name)
  const [ website, setWebsite ] = useState(props.website)


const handleInput = (e) => {
    if (e.target.name === 'username'){
        setUsername(e.target.value)
    } else if(e.target.name === 'email'){
        setEmail(e.target.value)
    } else if(e.target.name === 'name'){
        setName(e.target.value)
    } else if(e.target.name === 'website'){
        setWebsite(e.target.value)
    }
}

const handleSave = (e) => {
  e.preventDefault()
  const formData = {
    username: username,
    email: email,
    academy: {
        name:name,
        website: website
    }
}
  dispatch(asyncEditAdmin(formData))
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
                  <Modal.Title>Edit Admin</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                  <Form.Control className="form-control" value={username} name='username' type='text' onChange={handleInput} placeholder='Username' />
                      <br /> <br /> 
                  <Form.Control className="form-control" value={email} name='email' type='text' onChange={handleInput} placeholder='email' />
                      <br /> <br />
                  <Form.Control className="form-control" value={name} name='name' type='text' onChange={handleInput} placeholder='name' />
                      <br />  <br />
                  <Form.Control className="form-control" value={website} name='website' type='text' onChange={handleInput} placeholder='website' />
                      <br />   <br />      
              </Modal.Body>
              <Modal.Footer>
                    <Button variant="primary" onClick={handleSave} > Save changes </Button> 
              </Modal.Footer>
              </>
      </Modal>
    )
  }

  export default EditAdminModal
