const adminInitialvalue = {}

const adminDetailsReducer = (state = adminInitialvalue, action) => {
    switch (action.type) {
        case 'DETAILS_ADMIN': {
            return {...action.payload} 
        }
        // case 'LOGIN_ADMIN': {
        //     return { ...action.payload }
        // }
        // case 'LOGOUT_ADMIN': {
        //     return adminInitialvalue
        // }
        default: {
            return {...state}
        }
    }
}

export default adminDetailsReducer
