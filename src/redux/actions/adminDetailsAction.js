import axios from "axios"

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
