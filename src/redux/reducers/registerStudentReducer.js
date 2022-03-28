const registerInitialValue = []

const registerStudentReducer = (state = registerInitialValue, action) => {
    switch (action.type) {
        case 'SET_STUDENT': {
            return [...state, { ...action.payload }]
        }
        
        default: {
            return [...state]
        }
    }
}

export default registerStudentReducer