import { createStore, combineReducers, applyMiddleware } from 'redux'
import registerAdminReducer from '../reducers/registerAdminReducer'
import thunk from 'redux-thunk'
import loginAdminReducer from '../reducers/loginAdminReducer'
import adminDetailsReducer from '../reducers/adminDetailsReducer'
import registerStudentReducer from '../reducers/registerStudentReducer'
import studentDetailsReducer from '../reducers/studentDetailsReducer'
import adminEditReducer from '../reducers/adminEditReducer'
import coursesDetailsReducer from '../reducers/CousesDetailsReducer'
import lecturesDetailsReducer from '../reducers/LectureDetailsReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        registerAdmin: registerAdminReducer,
        loginAdmin: loginAdminReducer,
        adminDetails: adminDetailsReducer,
        registerStudent : registerStudentReducer,
        studentDetails: studentDetailsReducer,
        editAdmin: adminEditReducer,
        coursesDetails: coursesDetailsReducer,
        lecturesDetails: lecturesDetailsReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore