import React from "react";
import { Form } from "react-bootstrap";

const RegistrationForm = (handleRegister, handleInput, username, name, email, password, website, showAllFields, handleEdit) => {

    return (
        <Form onSubmit={handleRegister} className='registerForm' handleEdit={handleEdit} >
                { showAllFields && <> <Form.Control style={{ width: '40%' }} value={username} name='username' type='text' onChange={handleInput} placeholder='Username' />
                <br /> </> }
                { showAllFields && <> <Form.Control style={{ width: '40%' }} value={email} name='email' type='text' onChange={handleInput} placeholder='Email' />
                <br /> </> }
                { showAllFields && <> <Form.Control style={{ width: '40%' }} value={password} name='password' type='password' onChange={handleInput} placeholder='Password' />
                <br /> </> } 
                { showAllFields && <> <Form.Control style={{ width: '40%' }} value={name} name='academyName' type='text' onChange={handleInput} placeholder='Academy Name' />
                <br /> </> }
                { showAllFields && <> <Form.Control style={{ width: '40%' }} value={website} name='website' type='text' onChange={handleInput} placeholder='Website' />
                <br />    </> }     
        </Form>
    )
}

export default RegistrationForm