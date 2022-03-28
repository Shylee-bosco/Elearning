import React from "react"
import { useState } from "react"
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from "react-redux"
import { asyncLoginStudent } from "../../redux/actions/studentDetailsAction"

const LoginStudentForm = (props) => {
    const dispatch = useDispatch()
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleInput = (e) => {
        if (e.target.name === 'email'){
            setEmail(e.target.value)
        } else if(e.target.name === 'password'){
            setPassword(e.target.value)
        } 
    }

    const handleLogin = (e) => {
        e.preventDefault()
        const formData = {
            email: email,
            password: password
        }

        const redirect = () => {
            props.history.push('/StudentIndividualDetail')
            props.handleAuth()
        }

        dispatch(asyncLoginStudent(formData), redirect())
        setEmail('')
        setPassword('')
    }

    return (
        <div>
            <h1> Student </h1>
            <h1> Login </h1>
            <Form onSubmit={handleLogin}>
                <Form.Control style={{ width: '40%' }} value={email} name='email' type='text' onChange={handleInput} placeholder='email' />
                    <br />
                <Form.Control style={{ width: '40%' }} value={password} name='password' type='password' onChange={handleInput} placeholder='password' />
                    <br />        
                <Button onClick={handleLogin} > Login </Button>
            </Form>
        </div>
    )
}

export default LoginStudentForm