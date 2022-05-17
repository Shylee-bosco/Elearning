import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import adminDetailsReducer from '../reducers/adminDetailsReducer'
import registerStudentReducer from '../reducers/registerStudentReducer'
import studentDetailsReducer from '../reducers/studentDetailsReducer'
import coursesDetailsReducer from '../reducers/CousesDetailsReducer'
import lecturesDetailsReducer from '../reducers/LectureDetailsReducer'
// import loginAdminReducer from '../reducers/loginAdminReducer'
// import registerAdminReducer from '../reducers/registerAdminReducer'
// import adminEditReducer from '../reducers/adminEditReducer'
// import commonReducer from '../reducers/commonReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        adminDetails: adminDetailsReducer,
        registerStudent : registerStudentReducer,
        studentDetails: studentDetailsReducer,
        coursesDetails: coursesDetailsReducer,
        lecturesDetails: lecturesDetailsReducer,
        // isAdmin: commonReducer,
        // editAdmin: adminEditReducer,
        // registerAdmin: registerAdminReducer,
        // loginAdmin: loginAdminReducer,
    }), applyMiddleware(thunk))
    return store
}

export default configureStore
