import axios from "axios"
import { isAdmin } from "./loginAdminAction"

export const asyncLoginStudent = (formData) => {
    return (dispatch) => {
        axios.post('https://dct-e-learning-app.herokuapp.com/api/students/login', formData)
        .then((response) => {
            const loginDetails = response.data
            if(loginDetails.hasOwnProperty('errors')) {
                alert(loginDetails.message)
            } else {
                alert(`Successfully Logged in`)
                localStorage.setItem('token', loginDetails.token)
                dispatch(isAdmin(false));
            }
        })
        .catch((err) => {
            console.log(err.message)
        })
        
         console.log('StudentLoginForm',formData)
    }
}


export const loginStudent = (loginDetails) => {
    return {
        type: 'LOGIN_STUDENT',
        payload: loginDetails
    }
}

export const asyncDetailsStudent = () => {
    return (dispatch) => {
        axios.get('https://dct-e-learning-app.herokuapp.com/api/admin/students', {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            })
            .then((response) => {
                const stuResult = response.data
                console.log('getstuResult', stuResult)
                dispatch(detailsStudent(stuResult))
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
}


export const detailsStudent = (stuResult) => {
    return {
        type: 'DETAILS_STUDENT',
        payload: stuResult
    }
}


export const asyncDetailsStudentId = (id) => {
    return (dispatch, getState) => {
        // const store = getState()
        // console.log('Store', store._id)
        axios.get(`https://dct-e-learning-app.herokuapp.com/api/students/${id}`, {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
        .then((response) => {
            
            const singleStuDetail = response.data
            //console.log('singleStuDetailIIIIId', singleStuDetail)
            dispatch(studentDetailId(singleStuDetail))
            console.log('singleStuDetail', singleStuDetail)
        })
        .catch((err) => {
            console.log(err.message)
        })
    }
}

export const studentDetailId = (singleStuDetail) => {
    return {
        type: 'STUDENT_DETAIL_ID',
        payload: singleStuDetail
    }
}



export const asyncEditStudent = (formData, id) => {
    return (dispatch) => {
        axios.put(`https://dct-e-learning-app.herokuapp.com/api/students/${id}`, formData, {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            })
            .then((response) => {
                const stuResult = response.data
                dispatch(editStudent(stuResult))
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
}

export const editStudent = (stuResult) => {
    return {
        type: 'EDIT_STUDENT',
        payload: stuResult
    }
}

export const asyncDeleteStudent = (id) => {

    return (dispatch) => {
        axios.delete(`http://dct-e-learning.herokuapp.com/api/admin/students/${id}`, {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
        })
        .then((response) => {
            const studentDetails = response.data
            if(studentDetails.hasOwnProperty('errors')) {
                alert(studentDetails.message)
            } else {
                alert(`Successfully deleted student`)
                dispatch(deleteStudent(studentDetails))
            }
        })
        .catch((err) => {
            console.log(err.message)
        })
    }
}

export const deleteStudent = (stuResult) => {
    return {
        type: 'DELETE_STUDENT',
        payload: stuResult
    }
}