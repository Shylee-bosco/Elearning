import axios from "axios"

export const asyncRegisterStudent = (formData) => {
    
    return (dispatch) => {
        axios.post('http://dct-e-learning.herokuapp.com/api/admin/students', formData,  {
            headers: {
                'Authorization': localStorage.getItem('token')
                }
            })
        .then((response) => {
            const stuResult = response.data
            if(stuResult.hasOwnProperty('errors')) {
                alert(stuResult.message)
            } else {
                alert(`Successfully created student account `)
                dispatch(setStudent(stuResult))
            }
       })
        .catch((err) => {
            console.log(err.message)
        })
        
         console.log('RegisterStudentForm',formData)
    }
}


export const setStudent = (stuDetails) => {
    return {
        type: 'SET_STUDENT',
        payload: stuDetails
    }
}

