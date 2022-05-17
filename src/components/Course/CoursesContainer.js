import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AddCourse from "./AddCourse";
import { useDispatch, useSelector } from "react-redux";
import { asyncCourseDetails, asyncDeleteCourse, asyncUpdateCourse } from "../../redux/actions/CourseDetailsAction";
import CourseDetails from "./CourseDetails";
import { asyncLectureDetails } from "../../redux/actions/LectureDetailsAction";

const CoursesContainer = (props) => {
  const { handleUpdate } = props;
  
  const dispatch = useDispatch();

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

  //   const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const coursesDetails = useSelector((state) => {
    return state.coursesDetails;
  });

  const adminDetails = useSelector((state) => {
    return state.adminDetails;
  });

  const lectureDetails = useSelector((state) => {
    return state.lecturesDetails;
  });

  console.log('lectureDetails', lectureDetails)
  useEffect(() => {
    dispatch(asyncCourseDetails())
    dispatch(asyncLectureDetails(adminDetails._id))
  },[])

  
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete?`);
    if (confirmDelete) {
      dispatch(asyncDeleteCourse(id));
    }
  };

  return (
    <Grid container className={classes.root} spacing={2} >
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing="5">
          {coursesDetails.length > 0 &&
            coursesDetails.map((ele) => (
              <Grid key={ele} item>
                <CourseDetails
                  ele={ele}
                  handleDelete={() => {
                    handleDelete(ele._id);
                  }}
                  handleUpdate={handleUpdate}
                  lectureDetails={lectureDetails}
                />
              </Grid>
            ))}
            { adminDetails.role === 'admin' && 
                <Grid>
                  <AddCourse />
                </Grid>
            }
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CoursesContainer;
