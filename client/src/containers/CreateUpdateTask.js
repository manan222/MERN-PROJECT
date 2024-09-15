import { Box, Button, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useStyles } from "../componets/utils";
import Snackbar from '@mui/material/Snackbar';
import { useLocation, useNavigate, useParams } from "react-router-dom";




const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };
const CreateUpdateTask = () => {
  const classes = useStyles();
  const params = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [dateHandler, setDateHandler] = useState(false);
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    priority: "",
    status: "",
    deadline: ""

  });
  const [isNotificationOpen, setIsNotificationOpen] = React.useState(false);

  const handleChange = (e) => {
    console.log('handle change date value:', e.target.value);
    setDateHandler(true);

    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // getFormattedDate(e.target.value);
  };
  const handleTask = async () => {
    if (params.id) {
      try {
        console.log('handling task------>', inputs.deadline)
        const res = await axios
          .put(`http://localhost:5000/api/v1/tasks/${params.id}`, {
            title: inputs.title,
            description: inputs.description,
            priority: inputs.priority,
            status: inputs.status,
            deadline: inputs.deadline
          })
        const data = res.data;
        if (data.message.includes('Task updated successfully')) {
          setIsNotificationOpen(true);
          navigate('/');
        }

      }
      catch (error) {
        console.log('Error fetching data:', error);
      }
    }
    else {
      try {
        const res = await axios
          .post("http://localhost:5000/api/v1/tasks", {
            title: inputs.title,
            description: inputs.description,
            priority: inputs.priority,
            status: inputs.status,
            deadline: inputs.deadline
          })
        const data = res.data;
        if (data.message.includes('Task saved successfully')) {
          setIsNotificationOpen(true);
          navigate('/');
        }

      }
      catch (error) {
        console.log('Error fetching data:', error);
      }
    }

  };


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsNotificationOpen(false);
  };



  const statusOptions = ['To Do', 'In Progress', 'Completed'];
  const priorityOptions = ['Low', 'Medium', 'High'];

  useEffect(() => {
    if (params.id && state) {
      setInputs({
        title: state.currentRow.title,
        description: state.currentRow.description,
        status: state.currentRow.status,
        priority: state.currentRow.priority,
        deadline: state.currentRow.deadline
      })
    }

  }, [params]);

  useEffect(() => {
    console.log('deadline----->', inputs.deadline);
  }, [inputs])

  const getFormattedDate = (dateStr) => {
    if (dateHandler) {
      console.log('formatted date--->', dateStr);
      return dateStr
    }
    else if (dateStr) {
      console.log('date str', dateStr);
      const date = dateStr.split('T')[0];
      console.log('date', date);
      return date;
    }
    else {
      return ""
    }
  }


  return (
    <div>
      {params.id ?
        <Snackbar
          open={isNotificationOpen}
          autoHideDuration={5000}
          onClose={handleClose}
          message="Task has been updated successfully"
        />
        :
        <Snackbar
          open={isNotificationOpen}
          autoHideDuration={5000}
          onClose={handleClose}
          message="Task has been added successfully"
        />
      }
      <form>
        <Box
          borderRadius={10}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin={"auto"}
          marginTop={3}
          display="flex"
          flexDirection={"column"}
          width={"80%"}
        >
          <Typography
            className={classes.font}
            padding={3}
            color="grey"
            variant="h2"
            textAlign={"center"}
          >
            {params.id ? 'Update Task' : "Create Task"}
          </Typography>
          <InputLabel className={classes.font} sx={labelStyles}>
            Task Title
          </InputLabel>
          <TextField
            className={classes.font}
            name="title"
            onChange={handleChange}
            value={inputs.title}
            margin="auto"
            variant="outlined"
          />
          <InputLabel className={classes.font} sx={labelStyles}>
            Task Description
          </InputLabel>
          <TextField
            type="text"
            className={classes.font}
            name="description"
            onChange={handleChange}
            value={inputs.description}
            margin="auto"
            variant="outlined"
          />
          <InputLabel className={classes.font} sx={labelStyles}>
            Task Priority
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={inputs.priority}
            label="priority"
            name='priority'
            onChange={handleChange}
            style={{ width: "100%" }}
            defaultValue={inputs.priority}
          >
            {priorityOptions.map(priority => {
              return <MenuItem value={priority}>{priority}</MenuItem>
            })}
          </Select>
          <InputLabel className={classes.font} sx={labelStyles}>
            Task status
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={inputs.status}
            defaultValue={inputs.status}
            name='status'
            label="status"
            onChange={handleChange}
            style={{ width: "100%" }}
          >
            {statusOptions.map(status => {
              return <MenuItem value={status}>{status}</MenuItem>
            })}
          </Select>
          <InputLabel className={classes.font} sx={labelStyles}>
            Task deadline
          </InputLabel>
          <input type='date' id='deadline' name='deadline'
            value={getFormattedDate(inputs.deadline)}
            onChange={handleChange} />
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Button
              variant="contained"
              onClick={handleTask}
            >
              {params.id ? 'Update Task' : "Add Task"}
            </Button>
            <Button variant='contained' color='error' onClick={() => navigate('/')} style={{ marginLeft: "7px", borderRadius: "4", mt: 2 }}>Cancel</Button>
          </div>
        </Box>
      </form>
    </div>
  );
};

export default CreateUpdateTask;
