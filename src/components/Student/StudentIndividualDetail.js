import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncDetailsStudentId, asyncLoginStudent } from "../../redux/actions/studentDetailsAction";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

  const createData = (name, email, role) => {
    return { name, email, role };
  }
  
  

  const StudentIndividualDetail = (props) => {
    const dispatch = useDispatch()
    const classes = useStyles();

    const studentDetails = useSelector((state) => { 
        return state.studentDetails
        
    })

    const rows = [
        createData(studentDetails.name, studentDetails.email, studentDetails.role),
      ];
    

    useEffect(() => {
        dispatch(asyncDetailsStudentId())

    }, [])

    return (
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell> NAME </StyledTableCell>
              <StyledTableCell align="centre">EMAIL</StyledTableCell>
              <StyledTableCell align="centre">ROLE</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="centre">{row.email}</StyledTableCell>
                <StyledTableCell align="centre">{row.role}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}

export default StudentIndividualDetail