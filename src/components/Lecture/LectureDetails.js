import {
  Card,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import UpdateLecture from "./UpdateLecture";

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

const LectureDetails = ({ handleDelete, ele }) => {
  const classes = useStyles();
  const theme = useTheme();

  const [modalShow, setModalShow] = useState(false);

  const lectureDetails = useSelector((state) => {
    return state.lectureDetails;
  });

  console.log("LectureDetailsIn details Form", lectureDetails);

  return (
    <>
      <Container>
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              {/* <Typography component="h5" variant="h5">
                                {ele.title}
                            </Typography>   
                            <Typography variant="subtitle1" color="textSecondary">
                                <span>  </span> 
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                <span>  </span> 
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                <span>  </span> { ele.duration } <span> Months </span>
                            </Typography> */}
              <br />
              <div className={classes.controls}>
                <IconButton>
                  <EditIcon
                    color="primary"
                    onClick={() => setModalShow(true)}
                  />
                </IconButton>
                {
                  <UpdateLecture
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    // handleSave={handleSave}
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
              </div>
            </CardContent>
          </div>
        </Card>
      </Container>
    </>
  );
};

export default LectureDetails;
