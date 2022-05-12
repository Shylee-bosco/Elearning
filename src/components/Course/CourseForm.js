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
import { useDispatch } from "react-redux";
import { asyncAddCourse } from "../../redux/actions/CourseDetailsAction";

const CourseForm = (props) => {
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

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [releaseDate, setReleaseDate] = useState(new Date().toLocaleDateString('en-CA'));
  const [category, setCategory] = useState("None");
  const [validity, setValidity] = useState("");
  const [level, setLevel] = useState("");
  const [author, setAuthor] = useState("");
  const [isDelete, setIsDelete] = useState(false);
  const classes = useStyles();

  const courseCatagories = [
    "HTML",
    "CSS",
    "javascript",
    "reactjs",
    "nodejs",
    "expressjs",
    "mongodb",
  ];
  const levels = ["beginner", "intermediate", "expert"];

  const { onHide } = props;
  const dispatch = useDispatch();

  const handleInput = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "description") {
      setDescription(e.target.value);
    } else if (e.target.name === "duration") {
      setDuration(e.target.value);
    } else if (e.target.name === "category") {
      setCategory(e.target.value);
    } else if (e.target.name === "validity") {
      setValidity(e.target.value);
    } else if (e.target.name === "level") {
      setLevel(e.target.value);
    } else if (e.target.name === "author") {
      setAuthor(e.target.value);
    } else if (e.target.name === "releaseDate") {
      setReleaseDate(e.target.value);
    } else if (e.target.name === "isDelete") {
      setIsDelete(e.target.checked);
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const formData = {
      name,
      description,
      duration,
      category,
      validity,
      level,
      author: author,
      releaseDate: releaseDate,
      isDelete: isDelete
    };
    dispatch(asyncAddCourse(formData));
    onHide();
    setName("");
    setDescription("");
    setDuration("");
    setCategory("");
    setLevel("");
    setAuthor("");
    setReleaseDate("");
    setIsDelete(false);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <>
        <Modal.Header closeButton>
          <Modal.Title>Course</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Control
            className="form-control"
            value={name}
            name="name"
            type="text"
            onChange={handleInput}
            placeholder="Name"
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
          <Form.Control
            className="form-control"
            value={duration}
            name="duration"
            type="text"
            onChange={handleInput}
            placeholder="Duration"
          />
          <br /> <br />
          <TextField
            label="Release Date"
            type="date"
            defaultValue={releaseDate}
            name="releaseDate"
            onChange={handleInput}
            InputLabelProps={{
              shrink: true,
            }}
            className={classes.selectEmpty}
          />
          <br /> <br />
          <InputLabel id="demo-simple-select-required-label">
            Category
          </InputLabel>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={category}
            name="category"
            onChange={handleInput}
            className={classes.selectEmpty}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {courseCatagories.map((ele) => {
              return (
                <MenuItem key={ele} value={ele}>
                  {ele}
                </MenuItem>
              );
            })}
          </Select>
          <FormHelperText>Required</FormHelperText>
          <br /> <br />
          <Checkbox
            // defaultChecked
            name="isDelete"
            checked={isDelete}
            onChange={handleInput}
            color="default"
            inputProps={{ "aria-label": "checkbox with default color" }}
          />{" "}
          <span> Is Delete </span>
          <br /> <br />
          <Form.Control
            className="form-control"
            value={validity}
            name="validity"
            type="text"
            onChange={handleInput}
            placeholder="Validity"
          />
          <br /> <br />
          <InputLabel id="demo-simple-select-required-label">Level</InputLabel>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={level}
            name="level"
            onChange={handleInput}
            className={classes.selectEmpty}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {levels.map((ele) => {
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
            value={author}
            name="author"
            type="text"
            onChange={handleInput}
            placeholder="Author"
          />
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

export default CourseForm;
