import {
  Button,
  ButtonBase,
  Card,
  CardContent,
  Container,
  IconButton,
  Tooltip,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import UpdateCourse from "./UpdateCourse";
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import LectureForm from "../Lecture/LectureForm";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  addIcon: {
    height: 100,
    width: 100,
  },
}));

const CourseDetails = ({ handleDelete, ele, handleUpdate }) => {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();

  const [modalShow, setModalShow] = useState(false);
  const [modalShowLecture, setModalShowLecture] = useState(false);

  const coursesDetails = useSelector((state) => {
    return state.coursesDetails;
  });

  const adminDetails = useSelector((state) => {
    return state.adminDetails;
  });

  const studentDetails = useSelector((state) => {
    return state.studentDetails;
  });
  
//   const isAdmin = useSelector((state) => { 
//     return state.isAdmin
// })
// console.log("isAdmin",isAdmin);

  const handleEnroll = () => {
    
  }
  return (
    <>
      <Container>
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    {ele.name}
                  </Typography>
                  {/* <Typography variant="subtitle1" color="textSecondary">
                    <span> Description: </span> {ele.description}
                  </Typography> */}
                  <Typography variant="subtitle1" color="textSecondary">
                    <span> Duration: </span> {ele.duration}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    <span> Release Date: </span> {ele.releaseDate}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    <span> Category: </span> {ele.category}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    <span> Validity: </span> {ele.validity} <span> Months </span>
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    <span> Level: </span> {ele.level}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    <span> Author: </span> {ele.author}
                  </Typography>
                  <br />
              { adminDetails.role === 'admin' && <div className={classes.controls}>
                <IconButton>
                  <EditIcon
                    color="primary"
                    onClick={() => setModalShow(true)}
                  />
                </IconButton>
                {
                  <UpdateCourse
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    details={ele}
                  />
                }
                <IconButton>
                  <DeleteOutlinedIcon
                    color="secondary"
                    onClick={() => {
                      handleDelete();
                    }}
                  />
                </IconButton>
                <Tooltip title="Add a Lecture">

                
                <IconButton>
                  <NoteAddIcon 
                    onClick={() => setModalShowLecture(true)}
                  />
                 
                </IconButton>
                </Tooltip>
                {
                  <LectureForm
                    id={adminDetails._id}
                    show={modalShowLecture}
                    onHide={() => setModalShowLecture(false)}
                    // details={ele}
                    courseName={ele.name}
                    
                  />
                }
                <Button variant="contained" color="success" onClick={() => {
                  handleEnroll()
                }}>
                    Enroll
                </Button>
              </div> 
            }
            </CardContent>
          </div>
        </Card>
      </Container>
    </>
  );
};

export default CourseDetails;
