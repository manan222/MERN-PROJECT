import {
  Button,
  Checkbox,
  Grid,
  Input,
  MenuItem,
  Radio,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

const useStyle = makeStyles({
  grid: {
    marginTop: "1% !important",
    marginLeft: "3% !important",
    marginRight: "3%",
    marginBottom: "1%",
  },
  error: {
    color: "red",
  },
});
export const JobForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    profilePhoto: "",
    resumee: "",
    country: "",
    location: "",
    address: "",
    phoneNumber: "",
    address2: "",
    dateOfBirth: "",
    overallExperience: "",
    agreeStatement: null,
    workplaceType: "",
    openForOpportunity: "",
    willingToRelocate: "",
    workEligibilty: "",
    salaryPerHour: null,
    salaryPerMonth: null,
    gender: "",
    ethnicity: "",
    degree: "",
    university: "",
    yearOfCompletion: "",
    cgpa: "",
  });
  const [formError, setFormError] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    profilePhoto: "",
    resumee: "",
    country: "",
    location: "",
    address: "",
    phoneNumber: "",
    address2: "",
    dateOfBirth: "",
    overallExperience: "",
    agreeStatement: null,
    workplaceType: "",
    openForOpportunity: "",
    willingToRelocate: "",
    workEligibilty: "",
    salaryPerHour: null,
    salaryPerMonth: null,
    gender: "",
    ethnicity: "",
    degree: "",
    university: "",
    yearOfCompletion: "",
    cgpa: "",
  });
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  const countries = [
    "Pakistan",
    "India",
    "America",
    "Canada",
    "England",
    "Bangladesh",
  ];
  const disciplines = [
    "BS-CS",
    "BS-SE",
    "BS-IT",
    "BS-Physics",
    "BS-Math",
    "BS-Chemistry",
  ];
  const universities = [
    "PUCIT",
    "LUMS",
    "ITU",
    "UET",
    "GCU",
    "UMT",
    "LGU",
    "BZU",
    "Fast",
    "COMSATS",
    "NUST",
    "GIKI",
  ];
  const locations = [
    "Lahore",
    "Islamabad",
    "Peshawar",
    "Rawalpindi",
    "Karachi",
  ];
  const ethnicities = [
    "White and European Americans.",
    "Middle Eastern and North African Americans.",
    "African Americans",
    "Asian Americans.",
  ];
  const relocateOptions = ["Yes", "No", "Maybe"];
  const opportunityOptions = ["Yes", "No", "Likely"];
  const genders = ["Male", "Female", "Gay", "Transgender"];
  const employmentTypes = ["Full time", "Part time", "Contract based"];

  const handleSubmit = async () => {
    await validateForm();
    let isValid;
    for (let key in formError) {
      if (formError[key]?.length > 0) {
        console.log("error is present----------->");
        isValid = false;
      }
    }
    if (isValid) {
      console.log("form is ready to submit");
    } else {
      console.log("form cannot be submit");
      const targetElement = document.getElementById("salary");
      targetElement.scrollIntoView();
    }
  };

  const validateForm = async () => {
    const {
      firstName,
      middleName,
      lastName,
      email,
      profilePhoto,
      resumee,
      country,
      location,
      address,
      phoneNumber,
      salaryPerHour,
      salaryPerMonth,
      degree,
      university,
      yearOfCompletion,
      cgpa,
    } = formData;
    if (!firstName) {
      await setFormError((prevState) => {
        console.log("setting first name:", prevState);
        const formError = {
          firstName: "",
          middleName: "",
          lastName: "",
          profilePhoto: "",
          resumee: "",
          country: "",
          location: "",
          address: "",
          phoneNumber: "",
          address2: "",
          dateOfBirth: "",
          overallExperience: "",
          agreeStatement: "",
          workplaceType: "",
          openForOpportunity: "",
          willingToRelocate: "",
          workEligibilty: "",
          salaryPerHour: null,
          salaryPerMonth: null,
          gender: "",
          ethnicity: "",
          degree: "",
          university: "",
          yearOfCompletion: "",
          cgpa: "",
        };
        return { ...formError, firstName: "First Name is required" };
      });
    }
    if (!middleName) {
      await setFormError((prevState) => {
        return { ...prevState, middleName: "Middle Name is required" };
      });
    }
    if (!lastName) {
      await setFormError((prevState) => {
        console.log("setting last name");
        return { ...prevState, lastName: "Last  Name is required" };
      });
    }
    if (!email) {
      await setFormError((prevState) => {
        return { ...prevState, email: "Email address is required" };
      });
    }
    if (!profilePhoto) {
      await setFormError((prevState) => {
        return { ...prevState, profilePhoto: "Profile Photo is required" };
      });
    }
    if (!resumee) {
      await setFormError((prevState) => {
        return { ...prevState, resumee: "Resumee is required" };
      });
    }
    if (!country) {
      setFormError((prevState) => {
        return { ...prevState, country: "Country is required" };
      });
    }
    if (!location) {
      await setFormError((prevState) => {
        return { ...prevState, location: "Location is required" };
      });
    }
    if (!address) {
      await setFormError((prevState) => {
        return { ...prevState, address: "Address is required" };
      });
    }
    if (!phoneNumber) {
      await setFormError((prevState) => {
        return { ...prevState, phoneNumber: "Phone Number is required" };
      });
    }
    if (!salaryPerHour) {
      await setFormError((prevState) => {
        return { ...prevState, salaryPerHour: "Salary Per hour is required" };
      });
    }
    if (!salaryPerMonth) {
      await setFormError((prevState) => {
        return {
          ...prevState,
          salaryPerMonth: "Salary Per Month is required",
        };
      });
    }
    if (!degree) {
      await setFormError((prevState) => {
        return {
          ...prevState,
          degree: "Degree is required",
        };
      });
    }
    if (!university) {
      await setFormError((prevState) => {
        return {
          ...prevState,
          university: "University is required",
        };
      });
    }
    if (!yearOfCompletion) {
      await setFormError((prevState) => {
        return {
          ...prevState,
          yearOfCompletion: "Year of completion is required",
        };
      });
    }
    if (!cgpa) {
      await setFormError((prevState) => {
        return {
          ...prevState,
          cgpa: "cgpa is required",
        };
      });
    }
  };

  const handleSalary = (event) => {
    if (event.target.name === "salaryPerHour") {
      setFormData({ ...formData, salaryPerHour: event.target.value });
      console.log("changing in hour input:", event.target.value);
      const salaryPerMonth = !event.target.value.length
        ? 0
        : event.target.value * 8 * 5 * 4;
      console.log("salary per month", salaryPerMonth);
      setFormData({ ...formData, salaryPerMonth: salaryPerMonth });
    } else {
      console.log(
        "condition",
        event.target.value.length > 0 &&
          event.target.value.toString().startsWith(0),
        "value:",
        Number(event.target.value.toString().substring(1))
      );
      const value =
        event.target.value.length > 0 &&
        event.target.value.toString().startsWith(0)
          ? Number(event.target.value.toString().substring(1))
          : event.target.value;
      console.log("monthly value", value);
      setFormData({ ...formData, salaryPerMonth: value });
      const salaryPerHour = !value.length ? 0 : value / 160;
      setFormData({ ...formData, salaryPerHour: salaryPerHour });
    }
    setFormError({ ...formError, salaryPerHour: null, salaryPerMonth: null });
    console.log("salary handler called about to set states");
  };
  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.value.length > 0) {
      setFormError({ ...formError, [event.target.name]: "" });
    }
    console.log("handler called", event.target.name, event.target.value);
    if (event.target.type === "checkbox") {
      setFormData({ ...formData, [event.target.name]: event.target.checked });
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }
  };
  const handleDate = (date) => {
    if (date.$d.length > 0) {
      setFormError({ ...formError, dateOfBirth: "" });
    }
    setFormData({ ...formData, dateOfBirth: date.$d });
  };
  const handleDateCompletion = (date) => {
    console.log("date value", date.$d);
    if (date.$d) {
      console.log("year of completion is null");
      setFormError({ ...formError, yearOfCompletion: "" });
    }
    setFormData({ ...formData, yearOfCompletion: date.$d });
  };
  const uploadFile = (event) => {
    const file = event.target.files[0];
    const sizeInMb = Math.ceil(file.size / 1000000);
    console.log("size in mb:", sizeInMb, file, file.type);

    if (file.type === "image/jpeg") {
      setFormError({ ...formError, profilePhoto: "" });
      console.log("inside image--->");
      if (sizeInMb <= 5) {
        setFormError({
          ...formError,
          profilePhoto: "",
        });
        setFormData({ ...formData, [event.target.name]: file });
      } else {
        console.log("setting error");
        setFormError({
          ...formError,
          profilePhoto: "Please upload file less than or equals to 5 MB",
        });
      }
    }
    const documentTypes = [
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/pdf",
    ];
    if (documentTypes.includes(file.type)) {
      setFormError({ ...formError, resumee: "" });
      console.log("inside document");
      if (sizeInMb <= 2) {
        setFormError({
          ...formError,
          resumee: "",
        });
        setFormData({ ...formData, [event.target.name]: file });
      } else {
        console.log("document size limt has exceeded");
        setFormError({
          ...formError,
          resumee: "Please upload file less than or equals to 2 MB",
        });
      }
    }
  };
  const classes = useStyle();
  //   console.log("classes:", classes)
  useEffect(() => {
    if (formData && formError) {
      // console.log("form data state:", formData);
      console.log("form error", formError);
    }
  }, [formData, formError]);

  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            backgroundColor: "color(a98-rgb 0.94 0.94 0.94)",
            height: "20px",
          }}
        >
          <Typography>
            <b>Personal Information</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2} className={classes.grid}>
            <Grid item xs={2}>
              <Typography>First Name*</Typography>
            </Grid>
            <Grid item xs={2}>
              <TextField
                required={true}
                id="filled-required"
                placeholder="First Name"
                variant="outlined"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                error={formError.firstName && formError.firstName.length > 0}
              />
              <Typography className={classes.error}>
                {formError && formError.firstName}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>Middle Name*</Typography>
            </Grid>
            <Grid item xs={2}>
              <TextField
                required={true}
                id="filled-required"
                placeholder="Middle Name"
                variant="outlined"
                name="middleName"
                onChange={handleChange}
                error={formError.middleName.length > 0}
              />
              {formError &&
                formError.middleName &&
                formError.middleName.length > 0 && (
                  <Typography className={classes.error}>
                    {formError && formError.middleName}
                  </Typography>
                )}
            </Grid>
            <Grid
              container
              spacing={2}
              style={{
                marginTop: "1%",
                marginLeft: "3%",
                marginRight: "3%",
                marginBottom: "1%",
              }}
            >
              <Grid item xs={2}>
                <Typography>Last Name*</Typography>
              </Grid>
              <Grid item xs={2}>
                <TextField
                  required={true}
                  // error={true}
                  id="filled-required"
                  placeholder="Last Name"
                  variant="outlined"
                  onChange={handleChange}
                  name="lastName"
                  error={formError.lastName.length > 0}
                />
                {formError &&
                  formError.lastName &&
                  formError.lastName.length > 0 && (
                    <Typography className={classes.error}>
                      {formError && formError.lastName}
                    </Typography>
                  )}
              </Grid>
              <Grid item xs={2}>
                <Typography>Email address*</Typography>
              </Grid>
              <Grid item xs={2}>
                <TextField
                  required={true}
                  type="email"
                  id="filled-required"
                  placeholder="Email address"
                  variant="outlined"
                  name="email"
                  onChange={handleChange}
                  error={
                    formError && formError.email && formError.email.length > 0
                  }
                />
                {formError && formError.email && formError.email.length > 0 && (
                  <Typography className={classes.error}>
                    {formError && formError.email}
                  </Typography>
                )}
              </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.grid}>
              <Grid item xs={2}>
                <Typography>
                  Profile Photo(<span style={{ color: "red" }}>&#8804;</span> 5
                  mb)
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Input
                  required={true}
                  type="file"
                  inputProps={{
                    accept: "image/*",
                    onChange: uploadFile,
                  }}
                  variant="outlined"
                  name="profilePhoto"
                  error={
                    formError.profilePhoto && formError.profilePhoto.length > 0
                  }
                ></Input>
                {formError &&
                  formError.profilePhoto &&
                  formError.profilePhoto.length > 0 && (
                    <Typography className={classes.error}>
                      {formError && formError.profilePhoto}
                    </Typography>
                  )}
              </Grid>
              <Grid item xs={2}>
                <Typography>CV/Resumee* {<span>&#8804;</span>}2mb</Typography>
              </Grid>
              <Grid item xs={2}>
                {" "}
                <Input
                  required={true}
                  // error={true}
                  type="file"
                  inputProps={{
                    accept: ".pdf, .doc, .docx",
                    onChange: uploadFile,
                  }}
                  error={formError && formError.resumee.length > 0}
                  // value={formData.resumee}
                  variant="outlined"
                  name="resumee"
                ></Input>
                {formError &&
                  formError.resumee &&
                  formError.resumee.length > 0 && (
                    <Typography className={classes.error}>
                      {formError && formError.resumee}
                    </Typography>
                  )}
              </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.grid}>
              <Grid item xs={2}>
                <Typography>Country*</Typography>
              </Grid>
              <Grid item xs={2}>
                <Select
                  value={formData.country}
                  onChange={handleChange}
                  name="country"
                  label="Country"
                  inputProps={{ "aria-label": "Without label" }}
                  error={formError && formError.country.length > 0}
                >
                  {countries.map((country) => {
                    return <MenuItem value={country}>{country}</MenuItem>;
                  })}
                </Select>
                {formError &&
                  formError.country &&
                  formError.country.length > 0 && (
                    <Typography className={classes.error}>
                      {formError && formError.country}
                    </Typography>
                  )}
              </Grid>
              <Grid item xs={2}>
                <Typography>Location*</Typography>
              </Grid>
              <Grid item xs={2}>
                <Select
                  value={formData.location}
                  onChange={handleChange}
                  label="Location"
                  name="location"
                  inputProps={{ "aria-label": "Without label" }}
                  error={formError && formError.location.length > 0}
                >
                  {locations.map((location) => {
                    return <MenuItem value={location}>{location}</MenuItem>;
                  })}
                </Select>
                {formError &&
                  formError.location &&
                  formError.location.length > 0 && (
                    <Typography className={classes.error}>
                      {formError && formError.location}
                    </Typography>
                  )}
              </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.grid}>
              <Grid item xs={2}>
                <Typography>Address*</Typography>
              </Grid>
              <Grid item xs={2}>
                {" "}
                <TextField
                  required={true}
                  // error={true}
                  id="filled-required"
                  placeholder="Address"
                  variant="outlined"
                  name="address"
                  onChange={handleChange}
                  error={formError && formError.address.length > 0}
                />
                {formError &&
                  formError.address &&
                  formError.address.length > 0 && (
                    <Typography className={classes.error}>
                      {formError && formError.address}
                    </Typography>
                  )}
              </Grid>
              <Grid item xs={2}>
                <Typography>Phone Number*</Typography>
              </Grid>
              <Grid item xs={2}>
                <TextField
                  required
                  id="filled-required"
                  placeholder="Phone Number"
                  variant="outlined"
                  name="phoneNumber"
                  onChange={handleChange}
                  error={formError.phoneNumber.length > 0}
                />
                {formError &&
                  formError.phoneNumber &&
                  formError.phoneNumber.length > 0 && (
                    <Typography className={classes.error}>
                      {formError && formError.phoneNumber}
                    </Typography>
                  )}
              </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.grid}>
              <Grid item xs={2}>
                <Typography></Typography>
              </Grid>
              <Grid item xs={2}>
                {" "}
                <TextField
                  id="filled-required"
                  placeholder="Address2"
                  variant="outlined"
                  name="address2"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={2}>
                <Typography>Date of birth</Typography>
              </Grid>
              <Grid item xs={2}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker
                      label="MM/DD/YYYY"
                      onChange={handleDate}
                      name="dateOfBirth"
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.grid}>
              <Grid item xs={2}>
                <Typography>Overall Experience</Typography>
              </Grid>
              <Grid item xs={2}>
                {" "}
                <TextField
                  required
                  id="filled-required"
                  placeholder="Overall Experience"
                  variant="outlined"
                  value={formData.overallExperience}
                  name="overallExperience"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={1}>
                <Checkbox
                  name="agreeStatement"
                  checked={formData.agreeStatement}
                  onChange={handleChange}
                ></Checkbox>
              </Grid>
              <Grid item xs={3}>
                {" "}
                <Typography sx={{ fontSize: "0.7rem" }}>
                  I agree that the system can automatically increment my
                  experience with every passing year
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.grid}>
              <Grid item xs={2}>
                <Typography>Employment Type</Typography>
              </Grid>
              <Grid item lg={6}>
                {" "}
                <Select
                  name="employmentType"
                  value={formData.employmentType}
                  onChange={handleChange}
                  // displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  label="Ethnicity"
                >
                  {employmentTypes.map((employmentType) => {
                    return (
                      <MenuItem value={employmentType}>
                        {employmentType}
                      </MenuItem>
                    );
                  })}
                </Select>
              </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.grid}>
              <Grid item xs={2}>
                <Typography>Workplace Type</Typography>
              </Grid>
              <Grid item xs={2}>
                <TextField
                  required
                  id="filled-required"
                  placeholder="Workplace type"
                  variant="outlined"
                  name="workplaceType"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={2}>
                <Typography>Open for opportunity</Typography>
              </Grid>
              <Grid item xs={2}>
                <div style={{ display: "flex" }}>
                  {opportunityOptions.map((opportunity) => {
                    return (
                      <>
                        <Radio
                          onChange={handleChange}
                          value={opportunity}
                          name="openForOpportunity"
                          checked={opportunity === formData.openForOpportunity}
                        ></Radio>{" "}
                        <Typography sx={{ marginTop: "3%" }}>
                          {opportunity}
                        </Typography>
                      </>
                    );
                  })}
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.grid}>
              <Grid item xs={2}>
                <Typography>Willing to Relocate</Typography>
              </Grid>
              <Grid item xs={2}>
                <div style={{ display: "flex" }}>
                  {relocateOptions.map((option) => {
                    return (
                      <>
                        <Radio
                          onChange={handleChange}
                          value={option}
                          name="willingToRelocate"
                          checked={option === formData.willingToRelocate}
                        ></Radio>{" "}
                        <Typography sx={{ marginTop: "3%" }}>
                          {option}
                        </Typography>
                      </>
                    );
                  })}
                </div>
              </Grid>
              <Grid item xs={2}>
                <Typography>Work eligibility</Typography>
              </Grid>
              <Grid item xs={2}>
                <TextField
                  required
                  id="filled-required"
                  placeholder="Work Eligibilty"
                  variant="outlined"
                  value={formData.workEligibilty}
                  name="workEligibilty"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid
              container
              id="scrollableContainer"
              spacing={2}
              className={classes.grid}
            >
              <Grid item xs={2}>
                <Typography>Expected Salary/hour*</Typography>
              </Grid>
              <Grid item xs={2}>
                <TextField
                  required
                  type="number"
                  id="salary"
                  placeholder="Salary Per hour"
                  variant="outlined"
                  value={formData.salaryPerHour}
                  name="salaryPerHour"
                  onChange={handleSalary}
                  error={formError.salaryPerHour}
                />
                {formError &&
                  formError.salaryPerHour &&
                  formError.salaryPerHour.length > 0 && (
                    <Typography className={classes.error}>
                      {formError && formError.salaryPerHour}
                    </Typography>
                  )}
              </Grid>
              <Grid item xs={2}>
                <Typography>Expected Salary/month*</Typography>
              </Grid>
              <Grid item xs={2}>
                <TextField
                  required
                  type="number"
                  id="filled-required"
                  placeholder="Salary Per Month"
                  variant="outlined"
                  value={formData.salaryPerMonth}
                  name="salaryPerMonth"
                  onChange={handleSalary}
                  error={formError.salaryPerMonth}
                />
                {formError &&
                  formError.salaryPerMonth &&
                  formError.salaryPerMonth.length > 0 && (
                    <Typography className={classes.error}>
                      {formError && formError.salaryPerMonth}
                    </Typography>
                  )}
              </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.grid}>
              <Grid item xs={2}>
                Gender
              </Grid>
              <Grid item xs={2}>
                <Select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "Without label" }}
                  label="Gender"
                >
                  {genders.map((gender) => {
                    return <MenuItem value={gender}>{gender}</MenuItem>;
                  })}
                </Select>
              </Grid>
              <Grid item xs={2}>
                Ethnicity
              </Grid>
              <Grid item xs={2}>
                {" "}
                <Select
                  name="ethnicity"
                  value={formData.ethnicity}
                  onChange={handleChange}
                  // displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  label="Ethnicity"
                >
                  {ethnicities.map((ethnicity) => {
                    return <MenuItem value={ethnicity}>{ethnicity}</MenuItem>;
                  })}
                </Select>
              </Grid>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{
              backgroundColor: "color(a98-rgb 0.94 0.94 0.94)",
              height: "20px",
            }}
          >
            <Typography>
              <b>Educational Information</b>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid
              container
              id="scrollableContainer"
              spacing={2}
              className={classes.grid}
            >
              <Grid item xs={2}>
                <Typography>Degree*</Typography>
              </Grid>
              <Grid item xs={2}>
                <Select
                  value={formData.degree}
                  onChange={handleChange}
                  name="degree"
                  label="degree"
                  inputProps={{ "aria-label": "Without label" }}
                >
                  {disciplines.map((degree) => {
                    return <MenuItem value={degree}>{degree}</MenuItem>;
                  })}
                </Select>
                {formError && formError.degree && (
                  <Typography className={classes.error}>
                    {formError && formError.degree}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={2}>
                <Typography>University Name*</Typography>
              </Grid>
              <Grid item xs={2}>
                <Select
                  value={formData.university}
                  onChange={handleChange}
                  name="university"
                  label="university"
                  inputProps={{ "aria-label": "Without label" }}
                >
                  {universities.map((university) => {
                    return <MenuItem value={university}>{university}</MenuItem>;
                  })}
                </Select>
                {formError && formError.university && (
                  <Typography className={classes.error}>
                    {formError && formError.university}
                  </Typography>
                )}
              </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.grid}>
              <Grid item xs={2}>
                <Typography>Year of Completion*</Typography>
              </Grid>
              <Grid item xs={2}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker
                      label="MM/DD/YYYY"
                      onChange={handleDateCompletion}
                      name="yearOfCompletion"
                    />
                  </DemoContainer>
                </LocalizationProvider>
                {formError &&
                  formError.yearOfCompletion &&
                  formError.yearOfCompletion.length > 0 && (
                    <Typography className={classes.error}>
                      {formError && formError.yearOfCompletion}
                    </Typography>
                  )}
              </Grid>
              <Grid item xs={2}>
                <Typography>cgpa*</Typography>
              </Grid>
              <Grid item xs={2}>
                <TextField
                  required
                  id="filled-required"
                  placeholder="CGPA*"
                  variant="outlined"
                  name="cgpa"
                  value={formData.cgpa}
                  onChange={handleChange}
                />
                {formError && formError.cgpa && formError.cgpa.length > 0 && (
                  <Typography className={classes.error}>
                    {formError && formError.cgpa}
                  </Typography>
                )}
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <Button variant="contained" color="success" onClick={handleSubmit}>
            Submit
          </Button>
          <Button variant="contained" color="error" sx={{ marginLeft: "5px" }}>
            Cancel
          </Button>
        </div>
      </>
    </>
  );
};
