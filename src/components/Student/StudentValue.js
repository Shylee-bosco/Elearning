import React, { useState } from "react"
import EditStudentModal from "./EditStudentModal"
import { Button } from "react-bootstrap";

const StudentValue = ({ ele, handleSave, handleDelete }) => {
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
            </tr> 
        </>

    )
}

export default StudentValue