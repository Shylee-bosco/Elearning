const adminInitialvalue = {}

const adminDetailsReducer = (state = adminInitialvalue, action) => {
    switch (action.type) {
        case 'SET_ADMIN': {
            return { ...action.payload }
        }
        case 'DETAILS_ADMIN': {
            return { ...action.payload } 
        }
        case 'LOGIN_ADMIN': {
            return { ...action.payload }
        }
        case 'LOGOUT_ADMIN': {
            return adminInitialvalue
        }
        case 'EDIT_ADMIN': {
            return {...action.payload} 
        }
        default: {
            return {...state}
        }
    }
}

export default adminDetailsReducer
