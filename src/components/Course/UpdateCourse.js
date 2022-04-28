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
import { asyncUpdateCourse } from "../../redux/actions/CourseDetailsAction";

const UpdateCourse = (props) => {
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

  const {
    name,
    description,
    duration,
    category,
    validity,
    level,
    author,
    releaseDate,
    isDelete,
    _id,
  } = props.details;
  const { onHide } = props;
  const classes = useStyles();
  const theme = useTheme();
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

  const dispatch = useDispatch();

  const [updateName, setupdateName] = useState(name);
  const [updateDescription, setUpdateDescription] = useState(description);
  const [updateDuration, setUpdateDuration] = useState(duration);
  const [updateReleaseDate, setUpdateReleaseDate] = useState(releaseDate);
  const [updateCategory, setUpdateCategory] = useState(category);
  const [updateValidity, setUpdateValidity] = useState(validity);
  const [updateLevel, setUpdateLevel] = useState(level);
  const [updateAuthor, setUpdateAuthor] = useState(author);
  const [updateIsDelete, setUpdateIsDelete] = useState(isDelete);

  const handleInput = (e) => {
    if (e.target.name === "name") {
      setupdateName(e.target.value);
    } else if (e.target.name === "description") {
      setUpdateDescription(e.target.value);
    } else if (e.target.name === "duration") {
      setUpdateDuration(e.target.value);
    } else if (e.target.name === "category") {
      setUpdateCategory(e.target.value);
    } else if (e.target.name === "validity") {
      setUpdateValidity(e.target.value);
    } else if (e.target.name === "level") {
      setUpdateLevel(e.target.value);
    } else if (e.target.name === "author") {
      setUpdateAuthor(e.target.value);
    } else if (e.target.name === "releaseDate") {
      setUpdateReleaseDate(e.target.value);
    } else if (e.target.name === "isDelete") {
      setUpdateIsDelete(e.target.checked);
    }
  };

  const handleUpdate = () => {
    const formData = {
      name: updateName,
      description: updateDescription,
      duration: updateDuration,
      category: updateCategory,
      validity: updateValidity,
      level: updateLevel,
      author: updateAuthor,
      releaseDate: updateReleaseDate,
      isDelete: updateIsDelete
    };
    dispatch(asyncUpdateCourse(formData, _id));
    onHide();
  };

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
            <Modal.Title>Update Course</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Control
              className="form-control"
              value={updateName}
              name="name"
              type="text"
              onChange={handleInput}
              placeholder="Name"
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
            <Form.Control
              className="form-control"
              value={updateDuration}
              name="duration"
              type="text"
              onChange={handleInput}
              placeholder="Duration"
            />
            <br /> <br />
            <TextField
              label="Release Date"
              type="date"
              defaultValue={updateReleaseDate}
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
              value={updateCategory}
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
              onChange={handleInput}
              color="default"
              checked={updateIsDelete}
              inputProps={{ "aria-label": "checkbox with default color" }}
            />{" "}
            <span> Is Delete </span>
            <br /> <br />
            <Form.Control
              className="form-control"
              value={updateValidity}
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
              value={updateLevel}
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
              value={updateAuthor}
              name="author"
              type="text"
              onChange={handleInput}
              placeholder="Author"
            />
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

export default UpdateCourse;
