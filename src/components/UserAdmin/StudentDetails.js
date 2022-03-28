import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { asyncDeleteStudent, asyncDetailsStudent, asyncEditStudent } from "../../redux/actions/studentDetailsAction";
import StudentValue from '../Student/StudentValue'

const StudentDetails = (props) => {
    const dispatch = useDispatch()
    
    const studentDetails = useSelector((state) => { 
        return state.studentDetails
    })

    useEffect(() => {
        dispatch(asyncDetailsStudent())
    }, [])
    
    useEffect(() => {
        dispatch(asyncEditStudent())
    }, [])

    const handleDelete = (id) => {
        const confirmDelete = window.confirm(`Are you sure you want to delete?`)
        if (confirmDelete){
            dispatch(asyncDeleteStudent(id))   
        }
    }
    
    return (
        <div>
            <h2> STUDENTS INFORMATION </h2> 
            {
                studentDetails.length > 0 ? 
                <table class="table table-hover"> 
                    <thead class="table-light">
                        <tr>
                            <th> Student Name </th>
                            <th> Student email </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            studentDetails.map((ele,i) => {
                                return (
                                    <StudentValue key={i} ele={ele} handleDelete={() => {
                                        handleDelete(ele._id)}}/>  
                                )
                            })
                        }
                    </tbody>
                </table> :
                <h2> No Students available</h2>
            }
            {/* {   
                <EditStudentModal
                    name={name}
                    email={email}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    handleSave={handleSave}
                    
                />
            } */}
        </div>
    )
}

export default StudentDetails