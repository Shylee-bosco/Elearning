const registerInitialValue = {}

const registerAdminReducer = (state = registerInitialValue, action) => {
    switch (action.type) {
        case 'SET_ADMIN': {
            return { ...action.payload }
        }
        
        default: {
            return {...state}
        }
    }
}

export default registerAdminReducer