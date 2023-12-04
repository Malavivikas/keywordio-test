import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Checkbox,
  FormControlLabel,
  Container,
  Snackbar,
  Paper,
  Alert,
  Box,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

import CreateTextAd from "./CreateTextAd";
import CreateMediaAd from "./CreateMediaAd";

const steps = ["Select Type", "Create Ad"];

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkedOptions, setCheckedOptions] = useState([]);
  const [formData, setFormData] = useState({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  console.log(formData);
  const handleCheckboxChange = (option) => {
    const updatedOptions = checkedOptions.includes(option)
      ? checkedOptions.filter((item) => item !== option)
      : [...checkedOptions, option];

    setCheckedOptions(updatedOptions);
  };

  const handleFormSubmit = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    handleNext();
  };

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      setSnackbarOpen(true);
      setActiveStep(0);
      setCheckedOptions([]);
      setFormData({});
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
    setActiveStep(0);
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            gap={2}
          >
            {["textAd", "mediaAd"].map((adType) => (
              <Card key={adType}>
                <CardContent>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checkedOptions.includes(adType)}
                        onChange={() => handleCheckboxChange(adType)}
                        sx={{ marginLeft: { xs: 0, sm: 1 } }}
                      />
                    }
                    label={
                      <Typography variant="body1">
                        {adType === "textAd"
                          ? "Create Text Ad"
                          : "Create Media Ad"}
                      </Typography>
                    }
                  />
                </CardContent>
              </Card>
            ))}
          </Box>
        );
      case 1:
        return checkedOptions.includes("textAd") ? (
          <CreateTextAd onSubmit={handleFormSubmit} />
        ) : (
          <CreateMediaAd onSubmit={handleFormSubmit} />
        );
      default:
        return null;
    }
  };

  const isNextDisabled = () => {
    if (activeStep === 0) {
      return checkedOptions.length === 0;
    }
    return false;
  };

  return (
    <Container maxWidth="md">
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box mt={3}>
        <Paper
          elevation={3}
          style={{
            padding: "20px",
            maxWidth: "600px",
            margin: "auto",
            position: "relative",
          }}
        >
          {renderStepContent()}
          <Box mt={3}>
            <Button
              onClick={handleBack}
              disabled={activeStep === 0}
              sx={{ width: "100%" }}
            >
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              disabled={isNextDisabled()}
              sx={{ width: "100%" }}
            >
              {activeStep === steps.length ? "Finish" : "Next"}
            </Button>
          </Box>
        </Paper>
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={1000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{
            width: "100%",
          }}
        >
          Form submitted successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default MultiStepForm;
