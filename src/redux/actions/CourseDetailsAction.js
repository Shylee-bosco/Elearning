import axios from "axios"
// import swal from 'sweetalert';

const url = 'https://dct-e-learning-app.herokuapp.com/api/'

export const asyncAddCourse = (formData) => {
    return (dispatch) => {
        axios.post(`${url}courses`, formData, {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
        .then((response) => {
            const newCourseDetails = response.data
            if(newCourseDetails.hasOwnProperty('errors')) {
                alert(newCourseDetails.message)
            } else {
                alert(`Successfully added course`)
                dispatch(addCourse(newCourseDetails))
            }
        })
        .catch((err) => {
            console.log(err.message)
        })
    }
}


export const addCourse = (newCourseDetails) => {
    return {
        type: 'ADD_COURSE',
        payload: newCourseDetails
    }
}

export const asyncCourseDetails = () => {
    return (dispatch) => {
        axios.get(`${url}courses`, {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
        .then((response) => {
            const coursesDetail = response.data
            dispatch(courseDetails(coursesDetail))
        })
        .catch((err) => {
            console.log(err.message)
        })
    }
}


export const courseDetails = (coursesDetail) => {
    return {
        type: 'COURSE_DETAILS',
        payload: coursesDetail
    }
}

export const asyncUpdateCourse = (formdata, id) => {

    return (dispatch) => {
        axios.put(`${url}courses/${id}`, formdata, {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
        })
        .then((response) => {
            const courseDetails = response.data
            if(courseDetails.hasOwnProperty('errors')) {
                alert(courseDetails.message)
            } else {
                alert(`Successfully Updated course`)
                dispatch(updateCourse(courseDetails))
            }
        })
        .catch((err) => {
            console.log(err.message)
        })
    }
}

export const updateCourse = (courseDetails) => {
    return {
        type: 'UPDATE_COURSE',
        payload: courseDetails
    }
}

export const asyncDeleteCourse = (id) => {

    return (dispatch) => {
        axios.delete(`${url}courses/${id}`, {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
        })
        .then((response) => {
            const courseDetails = response.data
            if(courseDetails.hasOwnProperty('errors')) {
                alert(courseDetails.message)
            } else {
                alert(`Successfully deleted course`)
                dispatch(deleteCourse(courseDetails))
            }
        })
        .catch((err) => {
            console.log(err.message)
        })
    }
}

export const deleteCourse = (courseDetails) => {
    return {
        type: 'DELETE_COURSE',
        payload: courseDetails
    }
}