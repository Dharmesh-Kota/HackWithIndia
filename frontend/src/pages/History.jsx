import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import config from "../config.js";

const columns = [
  {
    id: "username",
    label: "UserName",
    align: "center",
    minWidth: 100,
  },
  {
    id: "name",
    label: "Name",
    align: "center",
    minWidth: 100,
  },
  {
    id: "reward",
    label: "reward",
    minWidth: 100,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "points",
    label: "Points",
    minWidth: 100,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "date",
    label: "Date",
    minWidth: 100,
    align: "center",
    format: (value) => value.toFixed(2),
  },
];

function createData(UserName, Name, Reward, Points, timestamp) {
  // 	const dateObject = new Date(timestamp);
  // 	// Get day, month, and year components
  // 	const day = dateObject.getDate();
  // 	const month = dateObject.getMonth() + 1; // Add 1 because month is zero-based
  // 	const year = dateObject.getFullYear();
  // 	// Format day and month to ensure they have leading zeros if needed
  // 	const formattedDay = day < 10 ? '0' + day : day;
  // 	const formattedMonth = month < 10 ? '0' + month : month;
  // 	// Concatenate day, month, and year with '/' separator
  // 	const Date = `${formattedDay}/${formattedMonth}/${year}`;
  //   return { UserName, Name, Reward , Points , Date};
}

const rows = [
  createData("Jenil", "JenilJunil", "TShirt", 200, "2022-04-01T12:30:45.123Z"),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];

export default function History() {
  const [Page, setPage] = useState(0);
  const [RowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      This is the history Page which shows the history of redemption of the
      rewards by users for a perticular agency.
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(Page * RowsPerPage, Page * RowsPerPage + RowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          RowsPerPageOptions={[10, 25, 50, 100]}
          component="div"
          count={rows.length}
          RowsPerPage={RowsPerPage}
          Page={Page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}

// const history = () => {
//   return (
//     <div>
//       This is the history Page which shows the history to agencies of the user who have redeemed rewards from them.

//     </div>
//   )
// }

// export default history
