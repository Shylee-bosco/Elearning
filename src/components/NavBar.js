import React, { useState } from "react";
import { Link, Route, withRouter } from "react-router-dom";
import Register from './UserAdmin/AdminRegisterForm'
import LoginAdminForm from "../components/UserAdmin/LoginAdminForm";
import coursesContainer from '../components/Course/CoursesContainer';
import PersonalInfo from '../components/UserAdmin/AdminDetails'
import StudentRegistration from '../components/UserAdmin/StudentRegisterForm'
import StudentInformation from '../components/UserAdmin/StudentDetails'
import { Nav, Bars, NavMenu} from "../components/UserAdmin/UserAdminStyle";
import {  } from "react-bootstrap";
import Home from "./Home";
import StudentIndividualDetail from "../components/Student/StudentIndividualDetail";
import StudentLogin from '../components/Student/LoginStudentForm'
import LecturesContainer from "../components/Lecture/LecturesContainer";
import EnrolledCoursesContainer from "../components/EnrolledCouses/EnrolledCoursesContainer";
import { useDispatch } from "react-redux";
import { asyncAdminLogout } from "../redux/actions/adminDetailsAction";
import { asyncStudentLogout } from "../redux/actions/studentDetailsAction";

const NavBar = (props) => {
    const { userLoggedIn, handleAuth } = props
    const [ role, setRole ] = useState('');
    const dispatch = useDispatch()

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
                                    dispatch(asyncStudentLogout());
                                    dispatch(asyncAdminLogout());
                                    localStorage.removeItem('token');
                                    localStorage.removeItem('role')
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
