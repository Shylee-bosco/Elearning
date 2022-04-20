const initialCoursesValue = []

const coursesDetailsReducer = (store = initialCoursesValue, action) => {
     switch (action.type) {
          case "ADD_COURSE": {
               return [...store, { ...action.payload }]
          }
          case "DELETE_COURSE": {
               const result = store.filter(ele => ele._id !== action.payload._id)
               return result
          }
          case 'UPDATE_COURSE': {
               const result = store.map((ele) => {
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
          default: {
               return [...store]
          }
     }
}

export default coursesDetailsReducer