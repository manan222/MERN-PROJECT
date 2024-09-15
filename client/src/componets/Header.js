import React from "react";
import { Link } from "react-router-dom";
import { authActions, setDarkmode } from "../store";
import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useState } from "react";
import { lightTheme, darkTheme } from "../utils/theme";

const Header = () => {
  const dispath = useDispatch();
  const isDark = useSelector((state) => state.theme.isDarkmode);
  const theme = isDark ? darkTheme : lightTheme;

  const userId = localStorage.getItem("userId");
  const [value, setValue] = useState(0);
  const tabs = [
    { to: "/user/vehicle", label: "Add Vehicle" },
  ];

  return (
    <AppBar position="sticky" sx={{ background: `${theme.bg}` }}>
      <Toolbar>
        <Typography variant="h4">Task Management</Typography>
        {userId && (
          <Box display="flex" marginLeft={"auto"} marginRight="auto">
            <Tabs
              value={value}
              onChange={(e, val) => {
                console.log("tab index--->", val);
                setValue(value);
              }}
            >
              {tabs.map((tab) => {
                return (
                  <Tab
                    sx={{ color: "white" }}
                    // className={classes.font}
                    LinkComponent={Link}
                    to={tab.to}
                    label={tab.label}
                  />
                );
              })}
            </Tabs>
          </Box>
        )}
        <Box display="flex" marginLeft="auto">
          <div style={{ marginTop: "15px" }}>
            {localStorage.getItem("userName")}
          </div>
          {userId && (
            <Button
              onClick={() => dispath(authActions.logout())}
              LinkComponent={Link}
              to="/login"
              variant="contained"
              sx={{ margin: 1, borderRadius: 10 }}
              color="warning"
            >
              Logout
            </Button>
          )}
          <div
            onClick={(e) => {
              e.preventDefault();
              dispath(setDarkmode(!isDark));
            }}
            style={{
              alignContent: "center",
              padding: "10px 0",
              cursor: "pointer",
            }}
          >
            {isDark ? <LightModeIcon /> : <DarkModeIcon />}
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
