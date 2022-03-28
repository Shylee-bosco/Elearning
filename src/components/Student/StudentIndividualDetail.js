import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncDetailsStudentId, asyncLoginStudent } from "../../redux/actions/studentDetailsAction";

const StudentIndividualDetail = () => {
    const dispatch = useDispatch()

    const studentDetailId = useSelector((state) => { 
        return state.studentDetails
        
    })

    console.log("studentDetailId", studentDetailId)

    useEffect(() => {
        dispatch(asyncDetailsStudentId())

    }, [])

    useEffect(() => {
        dispatch(asyncLoginStudent())  
    }, [])

    return (
        <>
        {
            <h1> Student Detail</h1>
        }
        </>
    )
}

export default StudentIndividualDetail