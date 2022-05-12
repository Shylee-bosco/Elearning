import React, { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import { FormControlLabel } from "@material-ui/core";

const Home = (props) => {
    const { handleRoleChange, role } = props

    return (
        <>
            <br />
                <FormControl component="fieldset" style={{"alignContent": "center"}} >
                    <FormLabel component="legend" >Role Selection</FormLabel>
                    <RadioGroup row aria-label="role" name="role" value={role} onChange={handleRoleChange} >
                    <FormControlLabel
                        value="student"
                        control={<Radio />}
                        label="Student"
                    />
                    <FormControlLabel 
                        value="admin" 
                        control={<Radio />} 
                        label="Admin" />
                    </RadioGroup>
                </FormControl>
        </>
    )
}

export default Home
