import axios from "axios"

export const asyncRegisterStudent = (formData) => {
    
    return (dispatch) => {
        axios.post('https://dct-e-learning-app.herokuapp.com/api/admin/students', formData,  {
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
    }
}


export const setStudent = (stuDetails) => {
    return {
        type: 'SET_STUDENT',
        payload: stuDetails
    }
}
