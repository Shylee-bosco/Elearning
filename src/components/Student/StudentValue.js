import React, { useState } from "react"
import EditStudentModal from "./EditStudentModal"
import { Button } from "react-bootstrap";

const StudentValue = ({ ele, handleSave, handleDelete, handleEnroll }) => {
     const [modalShow, setModalShow] = useState(false);

     console.log('page', ele)
    return (
        <>
            <tr>
                <td> { ele.name } </td>
                <td> { ele.email } </td>
                <td> <Button onClick={() => setModalShow(true)} > Edit </Button> </td>
                { 
                
                    <EditStudentModal
                        id={ele._id}
                        name={ele.name}
                        email={ele.email}
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        handleSave={handleSave}
                        
                    />
                }
                
                <td> <Button onClick={() => {
                    handleDelete()
                }}> Delete </Button> </td>

                <td>
                <Button variant="contained" color="success" onClick={() => {
                  handleEnroll()
                }}>
                    Enroll
                </Button>
                </td>
            </tr> 
        </>

    )
}

export default StudentValue
