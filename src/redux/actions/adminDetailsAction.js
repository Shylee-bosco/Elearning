import axios from "axios"
import { asyncCourseDetails } from "./CourseDetailsAction"
import { asyncLectureDetails } from "./LectureDetailsAction"
import { asyncDetailsStudent } from "./studentDetailsAction"

export const asyncDetailsAdmin = () => {
    return (dispatch) => {
        axios.get('https://dct-e-learning-app.herokuapp.com/api/admin/account', {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            })
            .then((response) => {
                const adminResult = response.data
                dispatch(detailsAdmin(adminResult))
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
}


export const detailsAdmin = (adminResult = {}) => {
    return {
        type: 'DETAILS_ADMIN',
        payload: adminResult
    }
}

export const asyncLoginAdmin = (formData) => {
    return (dispatch) => {
        axios.post('https://dct-e-learning-app.herokuapp.com/api/admin/login', formData)
        .then((response) => {
            const adminResult = response.data
            console.log('adminResult', adminResult)
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

export const asyncEditAdmin = (formData) => {
    return (dispatch) => {
        axios.put('https://dct-e-learning-app.herokuapp.com/api/admin', formData, {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            })
            .then((response) => {
                const adminResult = response.data
                dispatch(detailsAdmin(adminResult))
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
}


// export const editAdmin = (adminResult = {}) => {
//     return {
//         type: 'EDIT_ADMIN',
//         payload: adminResult
//     }
// }

export const asyncRegisterAdmin = (formData) => {
    
    return (dispatch) => {
        axios.post('https://dct-e-learning-app.herokuapp.com/api/admin/register', formData)
        .then((response) => {
            const adminResult = response.data
            if(adminResult.hasOwnProperty('errors')) {
                alert(adminResult.message)
            } else {
                alert(`Successfully created admin for ${adminResult.academy.name}`)
                dispatch(setAdmin(adminResult))              
            }
       })
        .catch((err) => {
            console.log(err.message)
        })
    }
}


export const setAdmin = (adminDetails) => {
    return {
        type: 'SET_ADMIN',
        payload: adminDetails
    }
}
