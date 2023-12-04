import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function createData(campaigns, clicks, cost, conversions, revenue) {
  return { campaigns, clicks, cost, conversions, revenue };
}

const initialRows = [
  createData("Cosmetics", 712, "USD 4,272", 8, "USD 16,568"),
  createData("Serums", 3961, "USD 27,331", 115, "USD 362,526"),
  createData("Facewash", 9462, "76,831", 113, "USD 266,800"),
  createData("Shampoos", 439, "USD 2,151", 5, "USD 11,029"),
  createData("Fairness Cream", 1680, "USD 3,864", 49, "USD 175,245"),
  createData("Toothpaste", 4978, "USD 29,370", 189, "USD 663,106"),
  createData("Total", 26510, "USD 1,43,819", 489, "USD 15,73,563"),
];

export default function InsightsTable() {
  const [rows, setRows] = useState(initialRows);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "desc",
  });

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    const sortedRows = [...rows].sort((a, b) => {
      const aValue = typeof a[key] === "string" ? a[key].toLowerCase() : a[key];
      const bValue = typeof b[key] === "string" ? b[key].toLowerCase() : b[key];

      if (direction === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    setRows(sortedRows);
  };

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
              <SortableTableCell
                label="Campaigns"
                sortKey="campaigns"
                sortConfig={sortConfig}
                onSort={handleSort}
              />
              <SortableTableCell
                label="Clicks"
                sortKey="clicks"
                sortConfig={sortConfig}
                onSort={handleSort}
              />
              <SortableTableCell
                label="Cost"
                sortKey="cost"
                sortConfig={sortConfig}
                onSort={handleSort}
              />
              <SortableTableCell
                label="Conversions"
                sortKey="conversions"
                sortConfig={sortConfig}
                onSort={handleSort}
              />
              <SortableTableCell
                label="Revenue"
                sortKey="revenue"
                sortConfig={sortConfig}
                onSort={handleSort}
              />
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
                  {row.cost}
                </TableCell>
                <TableCell sx={{ color: "#656C74" }} align="right">
                  {row.conversions}
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

function SortableTableCell({ label, sortKey, sortConfig, onSort }) {
  const isSorted = sortConfig.key === sortKey;
  const isAscending = sortConfig.direction === "asc";

  return (
    <TableCell
      sx={{ fontWeight: "bold", color: "#323C43", cursor: "pointer" }}
      align="right"
      onClick={() => onSort(sortKey)}
    >
      {label}
      {isSorted &&
        (isAscending ? (
          <KeyboardArrowUpIcon sx={{ fontSize: "20px" }} />
        ) : (
          <KeyboardArrowDownIcon sx={{ fontSize: "20px" }} />
        ))}
    </TableCell>
  );
}
