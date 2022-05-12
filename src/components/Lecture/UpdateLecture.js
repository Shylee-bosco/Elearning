import {
  Checkbox,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { asyncUpdateLecture } from "../../redux/actions/LectureDetailsAction";

const UpdateLecture = (props) => {

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
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
      minWidth: 200,
    },
    dateSelected: {
      marginTop: theme.spacing(2),
      minWidth: 200,
    },
  }));

  const dispatch = useDispatch();
  const { onHide, lectureId } = props;

  const {  title,
    description,
    assetType,
    assetURL,
    comments,
    students,
    isDelete,
    courseName,
    course,
    _id
 } = props.details
 
 console.log(props.details,'-------')
  const [ updateTitle, setUpdateTitle] = useState(title);
  const [ updateDescription, setUpdateDescription] = useState(description);
  const [ updateAssetType, setUpdateAssetType] = useState(assetType);
  const [ updateAssetURL, setUpdateAssetURL] = useState(assetURL);
  const [ updateComments, setUpdateComments] = useState(comments);
  const [ updateStudents, setUpdateStudents] = useState(students);
  const [ updateIsDelete, setUpdateIsDelete] = useState(isDelete);

  const classes = useStyles();

  const assetTypes = ["video", "audio", "text", "pdf", "img"];

  const handleInput = (e) => {
    if (e.target.name === "title") {
      setUpdateTitle(e.target.value);
    } else if (e.target.name === "description") {
      setUpdateDescription(e.target.value);
    } else if (e.target.name === "assetType") {
      setUpdateAssetType(e.target.value);
    } else if (e.target.name === "assetURL") {
      setUpdateAssetURL(e.target.value);
    } else if (e.target.name === "comments") {
      setUpdateComments(e.target.value);
    } else if (e.target.name === "students") {
      setUpdateStudents(e.target.value);
    } else if (e.target.name === "isDelete") {
      setUpdateIsDelete(e.target.checked);
    }
  } 
  const handleUpdate = () => {
    const formData = {
      title: updateTitle,
      description: updateDescription,
      assetType: updateAssetType,
      assetURL: updateAssetURL,
      comments: updateComments,
      students: updateStudents,
      isDelete: updateIsDelete,
      course: courseName,
    };

    dispatch(asyncUpdateLecture(formData, lectureId, _id));
    onHide();
  }  
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <>
          <Modal.Header closeButton>
            <Modal.Title>Update Lecture</Modal.Title>
          </Modal.Header>

          <Modal.Body>
          <Form.Control
            className="form-control"
            value={updateTitle}
            name="title"
            type="text"
            onChange={handleInput}
            placeholder="Title"
          />
          <br /> <br />
          <Form.Control
            className="form-control"
            value={updateDescription}
            name="description"
            type="textarea"
            onChange={handleInput}
            placeholder="Description"
          />
          <br /> <br />
          <InputLabel id="demo-simple-select-required-label">
            Asset Type
          </InputLabel>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={updateAssetType}
            name="assetType"
            onChange={handleInput}
            className={classes.selectEmpty}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {assetTypes.map((ele) => {
              return (
                <MenuItem key={ele} value={ele}>
                  {ele}
                </MenuItem>
              );
            })}
          </Select>
          <FormHelperText>Required</FormHelperText>
          <br /> <br />
          <Form.Control
            className="form-control"
            value={updateAssetURL}
            name="assetURL"
            type="text"
            onChange={handleInput}
            placeholder="Asset URL"
          />
          <br /> <br />
          <Form.Control
            as="textarea"
            rows={3}
            value={updateComments}
            name="comments"
            onChange={handleInput}
            placeholder="Comments"
          />
          <br /> <br />
          <Form.Control
            className="form-control"
            value={updateStudents}
            name="students"
            type="text"
            onChange={handleInput}
            placeholder="Students"
          />
          <br /> <br />
          <Checkbox
            // defaultChecked
            name="isDelete"
            onChange={handleInput}
            color="default"
            checked={updateIsDelete}
            inputProps={{ "aria-label": "checkbox with default color" }}
          />{" "}
          <span> Is Delete </span>
          <br /> <br />
        </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={() => {
                handleUpdate();
              }}
            >
              {" "}
              Update changes{" "}
            </Button>
          </Modal.Footer>
        </>
      </Modal>
    </>
  );
};

export default UpdateLecture
