import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const CreateMediaAd = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    heading01: "",
    heading02: "",
    description: "",
    landscapeImage: "",
    portraitImage: "",
    squareImage: "",
    videoUrl: "",
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
        "& .MuiTextField-root": { m: 1, width: "50ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography sx={{ color: "text.primary", fontWeight: "600" }}>
        Create Media Ad
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
        label="Landscape Marketing Image(1.9:1)"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.landscapeImage}
        onChange={handleChange("landscapeImage")}
      />
      <TextField
        label="Portrait Marketing Image(4:5)"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.portraitImage}
        onChange={handleChange("portraitImage")}
      />
      <TextField
        label="Square Marketing Image(1:1)"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.squareImage}
        onChange={handleChange("squareImage")}
      />
      <TextField
        label="Video URL"
        variant="outlined"
        fullWidth
        margin="normal"
        value={formData.videoUrl}
        onChange={handleChange("videoUrl")}
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

export default CreateMediaAd;
