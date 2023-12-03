import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const data = [
  { value: 35, label: "35% Female", color: "#0096FF" },
  { value: 40, label: "40% Male", color: "#FF823C" },
  { value: 25, label: "25% Unknown", color: "#323C46" },
];

const size = {
  width: 500,
  height: 250,
};

export default function PieChartEx() {
  return (
    <PieChart
      margin={{ right: 200 }}
      direction={{ xs: "column", md: "row" }}
      series={[{ data, innerRadius: 70 }]}
      {...size}
    />
  );
}
