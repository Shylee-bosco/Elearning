import axios from "axios"
import { asyncCourseDetails } from "./CourseDetailsAction"
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
                console.log('adminLoginResult', adminResult)
                dispatch(asyncCourseDetails())
                dispatch(asyncDetailsStudent())
                dispatch(isAdmin(true));
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

export const isAdmin = (state=false) => {
    return state
}