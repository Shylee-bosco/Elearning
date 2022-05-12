import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import AddIcon from "@material-ui/icons/Add";
import { Container } from "@material-ui/core";
import CourseForm from "./CourseForm";
import { useSelector } from "react-redux";

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

const AddCourse = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [modalShow, setModalShow] = useState(false);

  const adminDetails = useSelector((state) => {
    return state.adminDetails;
  });

  return (
    <Container>
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
                <AddIcon
                  className={classes.addIcon}
                  onClick={() => setModalShow(true)}
                />
                <br />
                <span> Add A New Course </span>
            <CourseForm show={modalShow} onHide={() => setModalShow(false)} />
          </CardContent>
        </div>
      </Card>
    </Container>
  );
};

export default AddCourse;
