import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";

export const DataNoFilterTable = () => {
  const headerTable1 = Array<string>("Year", "Month", "Price_bife_kilo");
  const headerTable2 = Array<string>("Price_rice_kilo", "Price_coffee_kilo");
  const headerTable3 = Array<string>("Price_rice_infl", "Price_beef_infl");
  const headerTable4 = Array<string>("Inflation_rate", "Price_coffee_infl");

  const bodyTable1 = Array<string>("Number", "String", "Number");
  const bodyTable2 = Array<string>("Number", "Number");
  const bodyTable3 = Array<string>("Number", "Number");
  const bodyTable4 = Array<string>("Number", "Number");

  
  return (
    <Box sx={{width:'100%', display:'flex', gap:'10px', flexDirection:'column', alignItems:'center'}}>
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

      <Table sx={{ backgroundColor: "white" }}>
        <TableHead>
          <TableRow>
            {headerTable2.map((head) => (
              <TableCell sx={{ textAlign: "center" }}>{head}</TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            {bodyTable2.map((body) => (
              <TableCell sx={{ textAlign: "center" }}>{body}</TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>

      <Table sx={{ backgroundColor: "white" }}>
        <TableHead>
          <TableRow>
            {headerTable3.map((head) => (
              <TableCell sx={{ textAlign: "center" }}>{head}</TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            {bodyTable3.map((body) => (
              <TableCell sx={{ textAlign: "center" }}>{body}</TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>

      <Table sx={{ backgroundColor: "white" }}>
        <TableHead>
          <TableRow>
            {headerTable4.map((head) => (
              <TableCell sx={{ textAlign: "center" }}>{head}</TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            {bodyTable4.map((body) => (
              <TableCell sx={{ textAlign: "center" }}>{body}</TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};
