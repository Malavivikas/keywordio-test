import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const data = [
  { value: 35, label: "35% Female", color: "#0096FF" },
  { value: 40, label: "40% Male", color: "#FF823C" },
  { value: 25, label: "25% Unknown", color: "#323C46" },
];

export default function PieChartEx() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const size = {
    width: isSmallScreen ? 300 : 500,
    height: isSmallScreen ? 200 : 250,
  };

  return (
    <PieChart
      margin={{ right: isSmallScreen ? 100 : 200 }}
      direction={{ xs: "column", md: "row" }}
      series={[{ data, innerRadius: 70 }]}
      {...size}
    />
  );
}
