import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

function createData(groups, clicks, cost, conversions, revenue) {
  return { groups, clicks, cost, conversions, revenue };
}

const rows = [
  createData("Male", 348, "USD 12,528", 42, "USD 62,118"),
  createData("Female", 662, "USD 24,912", 35, "USD 5,175"),
  createData("Unknown", 105, "3,943", 3, "USD 4,489"),
  createData("Total", "1,145", "USD 41,383", 80, "USD 71,782"),
];

export default function InsightsGroupTable() {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            {/* <TableRow>
              <TableCell
                align="left"
                colSpan={4}
                sx={{ fontSize: "1rem", fontWeight: "bold", color: "#323C43" }}
              >
                Ad Insights
              </TableCell>
              <TableCell align="right">
                <HelpOutlineIcon />
              </TableCell>
            </TableRow> */}
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", color: "#323C43" }}>
                Groups
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
                key={row.groups}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell sx={{ color: "#656C74" }} align="left">
                  {row.group}
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
