import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useStyles } from "./utils";
import Snackbar from '@mui/material/Snackbar';

const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };
const AddUserVehicle = () => {
  const classes = useStyles();
  const userId = localStorage.getItem("userId");
  const [inputs, setInputs] = useState({
    carModel: "",
    carPrice: null,
    userPhoneNumber: null,
    carPictures: [],
    carImageUrls: [],

  });
  const [isNotificationOpen, setIsNotificationOpen] = React.useState(false);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const addVehicleInfo = async () => {
    console.log('add vehicle fun called', inputs);
    try {
      const res = await axios
        .post("http://localhost:5000/api/v1/vehicle", {
          model: inputs.carModel,
          price: inputs.carPrice,
          userPhoneNumber: inputs.userPhoneNumber,
          imageUrls: inputs.carImageUrls,
          user: userId,
        })
      const data = res.data;
      setIsNotificationOpen(true);
      console.log('api response:', data);
    }
    catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // if (inputs.carPictures.length < 1) return;
    const newImageUrls = [];
    console.log('use effect is called and carPictures:', inputs.carPictures)
    inputs?.carPictures?.length > 0 &&
      inputs.carPictures.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    console.log('image urls list:', newImageUrls);
    setInputs({ ...inputs, carImageUrls: newImageUrls });

  }, [inputs.carPictures]);


  const fileSelectedHandler = (e) => {
    setInputs({ ...inputs, carPictures: [...e.target.files] })
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsNotificationOpen(false);
  };


  return (
    <div>
      <Snackbar
        open={isNotificationOpen}
        autoHideDuration={5000}
        onClose={handleClose}
        message="vehicle has been successfully added"
      />
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
            Create Your Vehicle
          </Typography>
          <InputLabel className={classes.font} sx={labelStyles}>
            Car Model
          </InputLabel>
          <TextField
            className={classes.font}
            name="carModel"
            onChange={handleChange}
            value={inputs.carModel}
            margin="auto"
            variant="outlined"
          />
          <InputLabel className={classes.font} sx={labelStyles}>
            Car Price
          </InputLabel>
          <TextField
            type="number"
            className={classes.font}
            name="carPrice"
            onChange={handleChange}
            value={inputs.carPrice}
            margin="auto"
            variant="outlined"
          />
          <InputLabel className={classes.font} sx={labelStyles}>
            User Phone#
          </InputLabel>
          <TextField
            className={classes.font}
            name="userPhoneNumber"
            onChange={handleChange}
            value={inputs.userPhoneNumber}
            margin="auto"
            variant="outlined"
          />
          <InputLabel className={classes.font} sx={labelStyles}>
            Car Pictures
          </InputLabel>
          <input
            type="file"
            accept="image/*"
            multiple
            className={classes.font}
            name="carPrice"
            onChange={fileSelectedHandler}
          />
          {inputs.carImageUrls && inputs.carImageUrls.map((imageSrc) => {

            <img src={imageSrc} alt="not fount" width={"250px"} />
          })}
          <div style={{ textAlign: "center" }}>
            <Button
              sx={{ mt: 2, borderRadius: 4 }}
              variant="contained"
              onClick={addVehicleInfo}
            >
              Add Vehicle
            </Button>
          </div>
        </Box>
      </form>
    </div>
  );
};

export default AddUserVehicle;
