const loginInitialValue = {}

const loginAdminReducer = (state = loginInitialValue, action) => {
    switch (action.type) {
        case 'LOGIN_ADMIN': {
            return { ...action.payload }
        }
        case 'LOGOUT_ADMIN': {
            return loginInitialValue
        }
        default: {
            return {...state}
        }
    }
}

export default loginAdminReducer
