import axios from "axios"

export const asyncLoginStudent = (formData) => {
    return (dispatch) => {
        axios.post('http://dct-e-learning.herokuapp.com/api/students/login', formData)
        .then((response) => {
            const studentDetails = response.data
            if(studentDetails.hasOwnProperty('errors')) {
                alert(studentDetails.message)
            } else {
                alert(`Successfully Logged in`)
                dispatch(loginStudent(studentDetails))
                console.log('studentLoginResult', studentDetails)
            }
        })
        .catch((err) => {
            console.log(err.message)
        })
        
         console.log('StudentLoginForm',formData)
    }
}


export const loginStudent = (studentDetails) => {
    return {
        type: 'LOGIN_STUDENT',
        payload: studentDetails
    }
}

export const asyncDetailsStudent = () => {
    return (dispatch) => {
        axios.get('https://dct-e-learning.herokuapp.com/api/admin/students', {
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
    return (dispatch) => {
        axios.get(`https://dct-e-learning.herokuapp.com/api/students/${id}`, {
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
        axios.put(`https://dct-e-learning.herokuapp.com/api/students/${id}`, formData, {
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