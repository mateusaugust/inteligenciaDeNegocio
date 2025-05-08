import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";

export const DataWithFilter = () => {
  const headerTable1 = Array<string>(
    "Year",
    "Inflation_rate",
    "Price_coffee_kilo"
  );

  const bodyTable1 = Array<string>("Number", "Number", "Number");

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        gap: "10px",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Table sx={{ backgroundColor: "white" }}>
        <TableHead>
          <TableRow>
            {headerTable1.map((head) => (
              <TableCell sx={{ textAlign: "center" }}>{head}</TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            {bodyTable1.map((body) => (
              <TableCell sx={{ textAlign: "center" }}>{body}</TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};
