const studentInitialvalue = []

const studentDetailsReducer = (state = studentInitialvalue, action) => {
    switch (action.type) {
        case 'LOGIN_STUDENT': {
            return {...action.payload} 
        }
        case 'STUDENT_DETAIL_ID': {
            return {...action.payload} 
           
        }
        case 'DETAILS_STUDENT': {
            return [...action.payload] 
        }
        case 'EDIT_STUDENT': {
            const result = state.map((ele) => {
                if (ele._id === action.payload._id){
                    return {
                        ...ele, ...{...action.payload}
                    }
                } else {
                    return ele
                }
            })
            return result
        }
        case 'DELETE_STUDENT': {
            const result = state.filter((ele) => {
                return ele._id!==action.payload._id
            })
            return result
        }
        default: {
            return [...state]
        }
    }
}

export default studentDetailsReducer
