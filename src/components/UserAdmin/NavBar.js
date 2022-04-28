import React, { useState } from "react";
import { Link, Route, withRouter } from "react-router-dom";
import Register from './AdminRegisterForm'
import LoginAdminForm from "./LoginAdminForm";
import coursesContainer from '../Course/CoursesContainer';
import PersonalInfo from '../UserAdmin/AdminDetails'
import StudentRegistration from '../UserAdmin/StudentRegisterForm'
import StudentInformation from '../UserAdmin/StudentDetails'
import { Nav, Bars, NavMenu} from "./UserAdminStyle";
import { FormControl, FormLabel, FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import {  } from "react-bootstrap";
import Home from "../UserAdmin/Home";
import StudentIndividualDetail from "../Student/StudentIndividualDetail";
import StudentLogin from '../Student/LoginStudentForm'
import LecturesContainer from "../Lecture/LecturesContainer";
import EnrolledCoursesContainer from "../EnrolledCouses/EnrolledCoursesContainer";

const NavBar = (props) => {
    const { userLoggedIn, handleAuth } = props
    const [ role, setRole ] = useState('student');

    const handleRoleChange = (e) => {
      const result = (e.target.value)
      setRole(result)
    };

    
    return(
        <div>
            <Nav variant="tabs" className="justify-content-center">
                <Bars />
                {
                    userLoggedIn ? (
                        <>
                            { role === 'admin' && 
                                <> 
                                    <NavMenu><Link to='/studentRegisteration'>Student Registration</Link></NavMenu>
                                    <NavMenu><Link to='/studentInformation'>Student Information</Link></NavMenu>
                                    <NavMenu><Link to='/info'>Personal Information</Link></NavMenu>
                                </> 
                                }
                                <NavMenu><Link to='/coursesContainer'>Courses</Link></NavMenu>
                                <NavMenu><Link to='/enrolledCoursesContainer'>Enrolled Courses</Link></NavMenu>
                                <NavMenu><Link to='/lecturesContainer'>Lectures</Link></NavMenu>
                                { role === 'student' && <NavMenu><Link to='/studentDetails'>Student Details</Link></NavMenu> }
                                
                                <NavMenu><Link onClick={() => {
                                    localStorage.removeItem('token');
                                    alert('successfully logged out');
                                    handleAuth();
                                    props.history.push('/');
                                }} > 
                                Logout
                                </Link></NavMenu>   
                        </>           
                    ) : (
                        <>
                            { role === 'admin' && <> <NavMenu><Link to='/register'>Register</Link></NavMenu> 
                            <NavMenu><Link to='/loginAdmin'>Login</Link></NavMenu></>}
                           {
                            role !== 'admin' && <NavMenu><Link to='/studentLogin'>Login</Link></NavMenu>
                           } 
                            
                            
                        </>    
                    )
                }
              
            </Nav>

            <br />
                { !userLoggedIn && <Home role={role} handleRoleChange={handleRoleChange}  /> }
                <br /> <br />
                <Route path='/register' component={Register} />
                <Route path='/loginAdmin' render={(props) => {
                    return <LoginAdminForm 
                        {...props}
                        handleAuth={handleAuth}
                    />
                }} />
                <Route path='/studentRegisteration' component={StudentRegistration} />
                <Route path='/studentInformation' component={StudentInformation} />
                <Route path='/coursesContainer' component={coursesContainer} /> 
                <Route path='/enrolledCoursesContainer' component={EnrolledCoursesContainer} /> 
                <Route path='/lecturesContainer' component={LecturesContainer} />
                <Route path='/info' component={PersonalInfo} />
                <Route path='/studentDetails' component={StudentIndividualDetail} />
                <Route path='/studentLogin' render={(props) => {
                    return <StudentLogin 
                        {...props}
                        handleAuth={handleAuth}
                    />
                }}/>
            
        </div>
        
    )
}

export default withRouter(NavBar) 