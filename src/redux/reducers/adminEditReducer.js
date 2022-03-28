const adminInitialvalue = {}

const adminEditReducer = (state = adminInitialvalue, action) => {
    switch (action.type) {
        case 'EDIT_ADMIN': {
            return {...action.payload} 
        }
    
        default: {
            return {...state}
        }
    }
}

export default adminEditReducer
