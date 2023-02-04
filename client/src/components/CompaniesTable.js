import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import LinkButton from "./common/LinkButton";

const tableHeader = {
  fontWeight: "bold",
  fontSize: 16,
};

const CompaniesTable = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={tableHeader}>
              №
            </TableCell>
            <TableCell align="center" sx={tableHeader}>
              Name
            </TableCell>
            <TableCell align="center" sx={tableHeader}>
              Address
            </TableCell>
            <TableCell align="center" sx={tableHeader}>
              Number of employees
            </TableCell>
            <TableCell align="center" sx={tableHeader}>
              Show more
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(({ id, name, address, numberOfEmployees }, index) => (
            <TableRow
              key={id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {index + 1}
              </TableCell>
              <TableCell align="center">{name}</TableCell>
              <TableCell align="center">{address}</TableCell>
              <TableCell align="center">{numberOfEmployees}</TableCell>
              <TableCell align="center">
                <LinkButton router={`${id}`}>MORE INFO</LinkButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

CompaniesTable.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      address: PropTypes.string,
      email: PropTypes.string,
      numberOfEmployees: PropTypes.number,
    })
  ).isRequired,
};

export default CompaniesTable;
