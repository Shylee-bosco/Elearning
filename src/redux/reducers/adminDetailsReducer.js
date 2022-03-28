const adminInitialvalue = {}

const adminDetailsReducer = (state = adminInitialvalue, action) => {
    switch (action.type) {
        case 'DETAILS_ADMIN': {
            return {...action.payload} 
        }
    
        default: {
            return {...state}
        }
    }
}

export default adminDetailsReducer
