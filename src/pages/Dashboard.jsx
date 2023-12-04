import React, { useState } from "react";
import InsightsTable from "../components/InsightsTable";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import PieChartEx from "../components/Chart";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import InsightsGroupTable from "../components/InsightsGroupTable";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 36,
  padding: 5,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 25 25"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M20 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 2v3H5V5h15zm-5 14h-5v-9h5v9zM5 10h3v9H5v-9zm12 9v-9h3v9h-3z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      background: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 25 25"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M13 5.08c3.06.44 5.48 2.86 5.92 5.92h3.03c-.47-4.72-4.23-8.48-8.95-8.95v3.03zM18.92 13c-.44 3.06-2.86 5.48-5.92 5.92v3.03c4.72-.47 8.48-4.23 8.95-8.95h-3.03zM11 18.92c-3.39-.49-6-3.4-6-6.92s2.61-6.43 6-6.92V2.05c-5.05.5-9 4.76-9 9.95 0 5.19 3.95 9.45 9 9.95v-3.03z"/></svg>') no-repeat center`,
      backgroundColor: "#0096ff",
      borderRadius: "50%",
      border: "none",
      outline: "none",
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 40 / 2,
  },
}));

const Dashboard = () => {
  const [checked, setChecked] = useState(true);
  const [select, setSelect] = React.useState("");

  const handleChange = (event) => {
    setSelect(event.target.value);
  };
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Item>
              <InsightsTable />
            </Item>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item sx={{ position: "relative" }}>
              <Box>
                <Paper
                  elevation={0}
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                      color: "#323C43",
                      textAlign: "left",
                      mb: "1rem", // Add margin bottom
                    }}
                  >
                    Ad Insights
                  </Typography>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <FormControl
                      sx={{ minWidth: "100%", mb: "1rem" }} // Adjust width and add margin bottom
                      size="small"
                    >
                      <InputLabel id="demo-select-small-label">
                        Value
                      </InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={select}
                        label="table"
                        onChange={handleChange}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={"Clicks"}>Clicks</MenuItem>
                        <MenuItem value={"Conversions"}>Conversions</MenuItem>
                        <MenuItem value={"Cost"}>Cost</MenuItem>
                        <MenuItem value={"Revenue"}>Revenue</MenuItem>
                      </Select>
                    </FormControl>
                    <Typography>
                      <HelpOutlineIcon sx={{ color: "#ccc" }} />
                    </Typography>
                  </div>
                </Paper>
              </Box>
              <FormGroup sx={{ position: "absolute", bottom: 0, right: 0 }}>
                <FormControlLabel
                  control={
                    <MaterialUISwitch
                      sx={{ m: 1 }}
                      onChange={() => setChecked(!checked)}
                    />
                  }
                  label=""
                />
              </FormGroup>
              {!checked ? <InsightsGroupTable /> : <PieChartEx />}
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
