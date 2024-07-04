import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const naviagte = useNavigate();
  const dispath = useDispatch();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (errorMessage?.length > 0) {
      setTimeout(() => {
        setErrorMessage("");
        setInputs({
          name: "",
          email: "",
          password: "",
        });
      }, 3000);
    }
  }, [errorMessage]);
  const [isSignup, setIsSignup] = useState(false);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = (type) => {
    const url = `http://localhost:5000/api/v1/users/${type}`;
    return axios
      .post(url, {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
      })
      .catch((err) => console.log("error while login", err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      sendRequest("signup").then((response) => {
        if (response?.user?._id) {
          console.log("needs to create account");
          dispath(authActions.login());
          naviagte("/user/vehicle");
        } else {
          console.log("error", response);
          setErrorMessage(response.data.message);
        }
      });
    } else {
      sendRequest("login").then((response) => {
        console.log("login response--->", response);
        if (response?.data?.user?._id) {
          localStorage.setItem("userId", response.data.user._id);
          localStorage.setItem("userName", response.data.user.name);
          localStorage.setItem("userEmail", response.data.user.email);
          dispath(authActions.login());
          naviagte("/user/vehicle");
        } else {
          setErrorMessage(response.data.message);
        }
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          maxWidth={400}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin="auto"
          marginTop={5}
          borderRadius={5}
        >
          <Typography variant="h2" padding={3} textAlign="center">
            {isSignup ? "Sign up" : "Login"}
          </Typography>
          {isSignup && (
            <TextField
              name="name"
              onChange={handleChange}
              value={inputs.name}
              placeholder="Name"
              margin="normal"
            />
          )}{" "}
          <TextField
            name="email"
            onChange={handleChange}
            value={inputs.email}
            type={"email"}
            placeholder="Email"
            margin="normal"
          />
          <TextField
            name="password"
            onChange={handleChange}
            value={inputs.password}
            type={"password"}
            placeholder="Password"
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ borderRadius: 3, marginTop: 3 }}
            color="warning"
          >
            Submit
          </Button>
          {errorMessage?.length > 0 && (
            <Typography
              variant="span"
              sx={{ borderRadius: 3, marginTop: 3, color: "red" }}
            >
              {errorMessage}
            </Typography>
          )}
          <Button
            onClick={() => setIsSignup(!isSignup)}
            sx={{ borderRadius: 3, marginTop: 3 }}
          >
            Change To {isSignup ? "Login" : "Signup"}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Login;
