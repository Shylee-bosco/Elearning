import axios from "axios"

export const asyncLoginAdmin = (formData) => {
    return (dispatch) => {
        axios.post('http://dct-e-learning.herokuapp.com/api/admin/login', formData)
        .then((response) => {
            const adminResult = response.data
            if(adminResult.hasOwnProperty('errors')) {
                alert(adminResult.message)
            } else {
                alert(`Successfully Logged in`)
                dispatch(loginAdmin(adminResult))
                localStorage.setItem('token', adminResult.token)
                console.log('adminLoginResult', adminResult)
            }
        })
        .catch((err) => {
            console.log(err.message)
        })
        
         console.log('LoginForm',formData)
    }
}


export const loginAdmin = (adminDetails) => {
    return {
        type: 'LOGIN_ADMIN',
        payload: adminDetails
    }
}
