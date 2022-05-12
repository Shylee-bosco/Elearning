import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";
import LectureDetails from "./LectureDetails";
import { asyncDeleteLecture, asyncLectureDetails } from "../../redux/actions/LectureDetailsAction";
import { asyncDetailsAdmin } from "../../redux/actions/adminDetailsAction";

const LecturesContainer = (props) => {
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

  const detailsLecture = useSelector((state) => {
    return state.lecturesDetails;
  });

  const adminDetails = useSelector((state) => {
    return state.adminDetails;
  });

  useEffect(() => {
    dispatch(asyncLectureDetails(adminDetails._id))
  },[])

  console.log('detailsLectures-----', detailsLecture)


  const handleDelete = (courseId, id) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete?`);
    if (confirmDelete) {
      dispatch(asyncDeleteLecture(courseId, id));
    }
  };
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing="5">
          {detailsLecture.length > 0 &&
            detailsLecture.map((ele) => (
              <Grid key={ele} item>
                {console.log(ele.course)}
                  <LectureDetails
                    lectureId={ele._id}
                    ele={ele}
                    handleDelete={() => {
                      handleDelete(ele.course, ele._id);
                    }}
                    handleUpdate={handleUpdate}
                  />
              </Grid>
              ))}
            <Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LecturesContainer;
