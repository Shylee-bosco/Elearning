import axios from "axios"
import { detailsAdmin } from "./adminDetailsAction"

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
