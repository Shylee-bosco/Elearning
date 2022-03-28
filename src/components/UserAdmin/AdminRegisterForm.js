import React from "react"
import { useState } from "react"
import { Form, Button } from 'react-bootstrap'
import { asyncRegisterAdmin } from '../../redux/actions/registerAdminAction'
import { useDispatch } from "react-redux"
import RegistrationForm from "../CommonComponents/RegistrationForm"

const AdminRegisterForm = (props) => {
    // const { isEdit = true, handleSave } = props
    const dispatch = useDispatch()
    // const [ showRegisterBtn, setShowRegisterBtn ] = useState(false)
    const [ username, setUsername ] = useState(props.username)
    const [ email, setEmail ] = useState(props.email)
    const [ password, setPassword ] = useState(props.password)
    const [ name, setName ] = useState(props.name)
    const [ website, setWebsite ] = useState(props.website)

    const handleInput = (e) => {
        if (e.target.name === 'username'){
            setUsername(e.target.value)
        } else if(e.target.name === 'email'){
            setEmail(e.target.value)
        } else if(e.target.name === 'password'){
            setPassword(e.target.value)
        } else if(e.target.name === 'name'){
            setName(e.target.value)
        } else if(e.target.name === 'website'){
            setWebsite(e.target.value)
        }
    }

    const handleRegister = (e) => {
        e.preventDefault()
        const formData = {
            username: username,
            email: email,
            password: password,
            academy: {
                name: name,
                website: website
            }
        }
       
        const redirect = () => {
            props.history.push('/login')
        }
    
        dispatch(asyncRegisterAdmin(formData), redirect())
        setUsername('')
        setEmail('')
        setPassword('')
        setName('')
        setWebsite('')
    }

    return (
        <div>
            <h1> Register </h1>
            <Form onSubmit={handleRegister} className='registerForm'>
                <Form.Control style={{ width: '40%' }} value={username} name='username' type='text' onChange={handleInput} placeholder='Username' />
                    <br /> <br /> 
                <Form.Control style={{ width: '40%' }} value={email} name='email' type='text' onChange={handleInput} placeholder='email' />
                    <br /> <br />
                <Form.Control style={{ width: '40%' }} value={password} name='password' type='password' onChange={handleInput} placeholder='password' /> 
                    <br />  <br />
                <Form.Control style={{ width: '40%' }} value={name} name='name' type='text' onChange={handleInput} placeholder='name' />
                    <br />  <br />
                <Form.Control style={{ width: '40%' }} value={website} name='website' type='text' onChange={handleInput} placeholder='website' />
                    <br />   <br />      
               <Button variant="primary" onClick={handleRegister} > Register </Button> 
            </Form>
        </div>
    )
}

export default AdminRegisterForm