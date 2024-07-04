const express = require("express");
const userRouter = require("./routes/user-routes");
const vehicleRouter = require("./routes/vehicle-routes");
require("./config/db");
const cors = require("cors");

const app = express();
//it alow backend to communicate with frontend
app.use(cors());

app.set("view engine", "ejs");
//it allows to take raw body in json
app.use(express.json());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/vehicle", vehicleRouter);

app.use("/api/v1", (req, res, next) => {
  res.send("Route doesnot exist");
});

//define port

app.listen(5000, () => console.log("app started at 5000..."));

//routes
//controller
//models
//services
