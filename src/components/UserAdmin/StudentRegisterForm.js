import React from "react"
import { useState } from "react"
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from "react-redux"
import { asyncRegisterStudent } from "../../redux/actions/registerStudentAction"

const StudentRegisterForm = (props) => {
    const dispatch = useDispatch()
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ isAllowed, setIsAllowed ] = useState(true)

    const handleInput = (e) => {
        if(e.target.name === 'name'){
            setName(e.target.value)
        } else if(e.target.name === 'email'){
            setEmail(e.target.value)
        } else if(e.target.name === 'password'){
            setPassword(e.target.value)
        } 
    }

    const handleRegister = (e) => {
        e.preventDefault()
        const formData = {
            name: name,
            email: email,
            password: password,
            isAllowed: isAllowed
        }
       
        const redirect = () => {
            props.history.push('/studentInformation')
        }

            dispatch(asyncRegisterStudent(formData), redirect())
            setName('')
            setEmail('')
            setPassword('')
            setIsAllowed(true)
    }

    return (
        <div class="form-floating mb-3">
            <h1> Student Registeration </h1>
            <Form onSubmit={handleRegister} className='registerForm'>
                 <Form.Control style={{ width: '40%' }} value={name} name='name' type='text' onChange={handleInput} placeholder='name' />
                    <br /> 
                <Form.Control style={{ width: '40%' }} value={email} name='email' type='text' onChange={handleInput} placeholder='email' />
                    <br /> 
                <Form.Control style={{ width: '40%' }} value={password} name='password' type='password' onChange={handleInput} placeholder='password' />
                    <br />        
                <Button onClick={handleRegister} variant="primary" > Register </Button>
            </Form>
        </div>
    )
}

export default StudentRegisterForm