import axios from "axios"
import { asyncDetailsAdmin } from "./adminDetailsAction"
import { asyncCourseDetails } from "./CourseDetailsAction"
import { asyncLectureDetails } from "./LectureDetailsAction"
import { asyncDetailsStudent } from "./studentDetailsAction"

export const asyncLoginAdmin = (formData) => {
    return (dispatch) => {
        axios.post('https://dct-e-learning-app.herokuapp.com/api/admin/login', formData)
        .then((response) => {
            const adminResult = response.data
            if(adminResult.hasOwnProperty('errors')) {
                alert(adminResult.message)
            } else {
                alert(`Successfully Logged in`)
                dispatch(loginAdmin(adminResult))
                localStorage.setItem('token', adminResult.token)
                localStorage.setItem('role', 'admin')
                dispatch(asyncCourseDetails())
                dispatch(asyncDetailsAdmin())
                dispatch(asyncDetailsStudent())
                // dispatch(isAdmin(true));
            }
        })
        .catch((err) => {
            console.log(err.message)
        })
    }
}


export const loginAdmin = (adminDetails) => {
    return {
        type: 'LOGIN_ADMIN',
        payload: adminDetails
    }
}

export const logoutAdmin = () => {
    return {
        type: 'LOGOUT_ADMIN'
    }
}
export const asyncAdminLogout =() => {
    //remove token
    //empty studentdetials
    // empty course details
  
    return (dispatch) => {
        dispatch(logoutAdmin());
    }
  }
