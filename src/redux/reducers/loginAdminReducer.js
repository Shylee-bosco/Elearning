const loginInitialValue = {}

const loginAdminReducer = (state = loginInitialValue, action) => {
    switch (action.type) {
        case 'LOGIN_ADMIN': {
            return { ...action.payload }
        }
    

        default: {
            return {...state}
        }
    }
}

export default loginAdminReducer