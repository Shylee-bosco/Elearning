import axios from "axios"

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

