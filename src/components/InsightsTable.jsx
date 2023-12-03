import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

function createData(campaigns, clicks, cost, conversions, revenue) {
  return { campaigns, clicks, cost, conversions, revenue };
}

const rows = [
  createData("Cosmetics", 712, "USD 4,272", 8, "USD 16,568"),
  createData("Serums", "3,961", "USD 27,331", 115, "USD 362,526"),
  createData("Facewash", "9,462", "76,831", 113, "USD 266,800"),
  createData("Shampoos", 439, "USD 2,151", 5, "USD 11,029"),
  createData("Fairness Cream", "1,680", "USD 3,864", 49, "USD 175,245"),
  createData("Toothpaste", "4978", "USD 29,370", 189, "USD 663,106"),
  createData("Total", "26,510", "USD 1,43,819", 489, "USD 15,73,563"),
];

export default function InsightsTable() {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                align="left"
                colSpan={4}
                sx={{ fontSize: "1rem", fontWeight: "bold", color: "#323C43" }}
              >
                Ad Insights
              </TableCell>
              <TableCell align="right">
                <HelpOutlineIcon sx={{ color: "#ccc" }} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", color: "#323C43" }}>
                Campaigns
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", color: "#323C43" }}
                align="right"
              >
                Clicks
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", color: "#323C43" }}
                align="right"
              >
                Cost
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", color: "#323C43" }}
                align="right"
              >
                Conversions
              </TableCell>
              <TableCell
                sx={{ fontWeight: "bold", color: "#323C43" }}
                align="right"
              >
                Revenue
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.campaigns}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell sx={{ color: "#656C74" }} align="left">
                  {row.campaigns}
                </TableCell>
                <TableCell sx={{ color: "#656C74" }} align="right">
                  {row.clicks}
                </TableCell>
                <TableCell sx={{ color: "#656C74" }} align="right">
                  {row.conversions}
                </TableCell>
                <TableCell sx={{ color: "#656C74" }} align="right">
                  {row.cost}
                </TableCell>
                <TableCell sx={{ color: "#656C74" }} align="right">
                  {row.revenue}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
