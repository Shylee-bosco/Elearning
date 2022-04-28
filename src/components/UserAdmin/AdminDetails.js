import { SatelliteTwoTone } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { asyncEditAdmin } from "../../redux/actions/adminEditAction";
import { asyncLoginAdmin } from "../../redux/actions/loginAdminAction";
import { asyncDetailsStudent } from "../../redux/actions/studentDetailsAction";
import EditAdminModal from '../UserAdmin/EditAdminModal'

const AdminDetails = (props) => {
    const { id: slNo, username, email, password, role, name: academyName, website: academyWebsite, show, onHide , handleSave} = props
    const dispatch = useDispatch()
    const [modalShow, setModalShow] = useState(false);

    const adminDetails = useSelector((state) => { 
        return state.adminDetails
    })
    const isAdmin = useSelector((state) => { 
        return state.isAdmin
    })
    console.log("isAdmin",isAdmin);
    // useEffect(() => {
    //     dispatch(asyncDetailsStudent())
    // }, [])
    
    // useEffect(() => {
    //     dispatch(asyncEditAdmin())
    // }, [])

    useEffect(() => {
        dispatch(asyncLoginAdmin())
    }, [])

    return (
        <div class="container">
            
            <h4> PERSONAL INFORMATION </h4> 
            {
                    Object.keys(adminDetails).length > 0 ? 
                    <>
                        <h5> User Name - { adminDetails.username } </h5> 
                        <h5> Email - {adminDetails.email} </h5>
                        <h5> Role - {adminDetails.role} </h5>
                        <h5> Academy Name - {adminDetails.academy.name} </h5>
                        <h5> Academy Website - {adminDetails.academy.website} </h5>
                        <Button onClick={() => setModalShow(true)}> Edit </Button>
                        <EditAdminModal
                            username={adminDetails.username}
                            email={adminDetails.email}
                            password={adminDetails.password}
                            role={adminDetails.role}
                            name = {adminDetails.academy.name}
                            website = {adminDetails.academy.website}
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            handleSave={handleSave}
                        />
                    </> :
                        <> No Details </>
            }
           
        </div>
    )
}

export default AdminDetails