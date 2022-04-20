import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";
import LectureDetails from "./LectureDetails";
import { asyncDeleteLecture } from "../../redux/actions/LectureDetailsAction";
import AddLecture from "./AddLecture";

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

  const lectureDetails = useSelector((state) => {
    return state.lecturesDetails;
  });

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete?`);
    if (confirmDelete) {
      dispatch(asyncDeleteLecture(id));
    }
  };
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing="5">
          {lectureDetails.length > 0 &&
            lectureDetails.map((ele) => (
              <Grid key={ele} item>
                <LectureDetails
                  ele={ele}
                  handleDelete={() => {
                    handleDelete(ele._id);
                  }}
                  handleUpdate={handleUpdate}
                />
              </Grid>
            ))}
          <Grid>
            <AddLecture />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LecturesContainer;
