import axios from "axios"
import isAdminFlag from "../reducers/commonReducer"
import isAdmin from "../reducers/commonReducer"
import { logoutAdmin } from "./adminDetailsAction"

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
                localStorage.setItem('role', 'admin')
                dispatch(isAdminFlag(false));
            }
        })
        .catch((err) => {
            console.log(err.message)
        })
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
        axios.get(`https://dct-e-learning-app.herokuapp.com/api/students/${id}`, {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
        .then((response) => {
            
            const singleStuDetail = response.data
            dispatch(studentDetailId(singleStuDetail))
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
        axios.delete(`https://dct-e-learning-app.herokuapp.com/api/admin/students/${id}`, {
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
                localStorage.setItem('role', 'student')
                localStorage.setItem('token', studentDetails.token)
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

export const logoutStudent = () => {
    return {
        type: 'LOGOUT_STUDENT'
    }
}


export const asyncStudentLogout =() => {
  //remove token
  //empty studentdetials
  // empty course details

  return (dispatch) => {
      dispatch(logoutStudent());
  }
}
