import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const CreateTextAd = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    heading01: "",
    heading02: "",
    description: "",
    businessName: "",
    businessLabel: "",
    websiteUrl: "",
  });

  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": {
          m: 1,
          width: "100%", // Set default width to 100%
          position: "relative",
        },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography
        sx={{
          color: "text.primary",
          fontWeight: "600",
          fontSize: { xs: "1.5rem", md: "2rem" },
        }}
      >
        Create Text Ad
      </Typography>
      <TextField
        label="Heading 01"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.heading01}
        onChange={handleChange("heading01")}
      />
      <TextField
        label="Heading 02"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.heading02}
        onChange={handleChange("heading02")}
      />
      <TextField
        label="Description 01"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.description}
        onChange={handleChange("description")}
      />
      <TextField
        label="Business Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.businessName}
        onChange={handleChange("businessName")}
      />
      <TextField
        label="Business Label"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.businessLabel}
        onChange={handleChange("businessLabel")}
      />
      <TextField
        label="Website URL"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.websiteUrl}
        onChange={handleChange("websiteUrl")}
      />
      <Box mt={3}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default CreateTextAd;
