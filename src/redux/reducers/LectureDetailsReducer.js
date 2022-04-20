const initialLecturesValue = []

const lectureDetailsReducer = (store = initialLecturesValue, action) => {
     switch (action.type) {
          case "ADD_LECTURE": {
               return [...store, { ...action.payload }]
          }
          case "DELETE_LECTURE": {
               const result = store.filter(ele => ele._id !== action.payload._id)
               return result
          }
          case 'UPDATE_LECTURE': {
               const updatedLecture = store.map(ele => {
                    if (ele._id === action.payload._id) {
                         return { ...action.payload }
                    } else {
                         return ele
                    }
               })
               return updatedLecture
           }
          default: {
               return [...store]
          }
     }
}

export default lectureDetailsReducer