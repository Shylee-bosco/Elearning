import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Checkbox,
  FormHelperText,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { asyncAddLecture } from "../../redux/actions/LectureDetailsAction";

const LectureForm = (props) => {

  const { courseName, id } = props

  const useStyles = makeStyles((theme) => ({
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

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assetType, setAssetType] = useState("None");
  const [assetURL, setAssetURL] = useState("");
  const [comments, setComments] = useState([]);
  const [students, setStudents] = useState([]);
  // const [course, setCourse] = useState(courseName);
  const [isDelete, setIsDelete] = useState(false);

  const classes = useStyles();

  const assetTypes = ["video", "audio", "text", "pdf", "img"];

  const { onHide } = props;
  const dispatch = useDispatch();

  const handleInput = (e) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "description") {
      setDescription(e.target.value);
    } else if (e.target.name === "assetType") {
      setAssetType(e.target.value);
    } else if (e.target.name === "assetURL") {
      setAssetURL(e.target.value);
    } else if (e.target.name === "comments") {
      setComments(e.target.value);
    } else if (e.target.name === "students") {
      setStudents(e.target.value);
    } else if (e.target.name === "isDelete") {
      setIsDelete(e.target.checked);
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const formData = {
      title: title,
      description: description,
      assetType: assetType,
      assetURL: assetURL,
      comments: [],
      students: [],
      course: courseName,
      isDelete: isDelete,
    };

  //   const redirect = () => {
  //     props.push('/lecturesContainer')
  // }

    dispatch(asyncAddLecture(formData, id));
    onHide();
    setTitle("");
    setDescription("");
    setAssetType("");
    setAssetURL("");
    setComments("");
    setStudents("");
    setIsDelete(false);
  };

  const coursesDetails = useSelector((state) => {
    return state.coursesDetails;
  });

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <>
        <Modal.Header closeButton>
          <Modal.Title>Add Lecture</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Control
            className="form-control"
            value={title}
            name="title"
            type="text"
            onChange={handleInput}
            placeholder="Title"
          />
          <br /> <br />
          <Form.Control
            className="form-control"
            value={description}
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
            value={assetType}
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
            value={assetURL}
            name="assetURL"
            type="text"
            onChange={handleInput}
            placeholder="Asset URL"
          />
          <br /> <br />
          <Form.Control
            as="textarea"
            rows={3}
            value={comments}
            name="comments"
            onChange={handleInput}
            placeholder="Comments"
          />
          <br /> <br />
          <Form.Control
            className="form-control"
            value={students}
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
            inputProps={{ "aria-label": "checkbox with default color" }}
          />{" "}
          <span> Is Delete </span>
          <br /> <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleAdd}>
            {" "}
            ADD{" "}
          </Button>
        </Modal.Footer>
      </>
    </Modal>
  );
};

export default LectureForm;
