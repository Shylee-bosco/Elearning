import {
  Card,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import UpdateLecture from "./UpdateLecture";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

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

const LectureDetails = ({ handleDelete, ele, lectureId }) => {
  
  const classes = useStyles();
  const theme = useTheme();
  
  
  const [modalShow, setModalShow] = useState(false);

  const lnk = ele.assetURL

  const adminDetails = useSelector((state) => {
    return state.adminDetails;
  });
  
  return (
    <>
      <Container>
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                      {ele.title}
                  </Typography>   
              <br />
              <div className={classes.controls}>
                {
                  adminDetails.role === 'admin' && 
                  <>
                  <IconButton>
                  <EditIcon
                    color="primary"
                    onClick={() => setModalShow(true)}
                  />
                </IconButton>
                {
                  <UpdateLecture
                    lectureId={lectureId}
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
                </>
                }
                
                <IconButton>
                  <PlayArrowIcon
                    color={"success"}
                    onClick={() => window.open(encodeURI(lnk), "_blank")}
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
