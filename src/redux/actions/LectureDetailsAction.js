import axios from "axios"
// import swal from 'sweetalert';

const url = 'http://dct-e-learning.herokuapp.com/api/courses'

export const asyncAddLecture = (formData, id) => {
    return (dispatch) => {
        axios.post(`${url}/${id}/lectures`, formData, {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
        .then((response) => {
            const newLectureDetails = response.data
            if(newLectureDetails.hasOwnProperty('errors')) {
                alert(newLectureDetails.message)
            } else {
                alert(`Successfully added Lecture`)
                dispatch(addLecture(newLectureDetails))
            }
        })
        .catch((err) => {
            console.log(err.message)
        })
    }
}


export const addLecture = (newLectureDetails) => {
    return {
        type: 'ADD_LECTURE',
        payload: newLectureDetails
    }
}

export const asyncUpdateLecture = (id, courseId) => {

    return (dispatch) => {
        axios.put(`${url}/${courseId}/lectures/${id}`, {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
        })
        .then((response) => {
            const lectureDetails = response.data
            if(lectureDetails.hasOwnProperty('errors')) {
                alert(lectureDetails.message)
            } else {
                alert(`Successfully Updated Lecture`)
                dispatch(updateLecture(lectureDetails))
            }
        })
        .catch((err) => {
            console.log(err.message)
        })
    }
}

export const updateLecture = (lectureDetails) => {
    return {
        type: 'UPDATE_LECTURE',
        payload: lectureDetails
    }
}

export const asyncDeleteLecture = (courseId, id) => {

    return (dispatch) => {
        axios.delete(`${url}/${courseId}/lectures/${id}`, {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
        })
        .then((response) => {
            const lectureDetails = response.data
            if(lectureDetails.hasOwnProperty('errors')) {
                alert(lectureDetails.message)
            } else {
                alert(`Successfully deleted Lecture`)
                dispatch(deleteLecture(lectureDetails))
            }
        })
        .catch((err) => {
            console.log(err.message)
        })
    }
}

export const deleteLecture = (lectureDetails) => {
    return {
        type: 'DELETE_LECTURE',
        payload: lectureDetails
    }
}