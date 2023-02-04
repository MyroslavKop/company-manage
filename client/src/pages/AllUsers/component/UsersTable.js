import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import LinkButton from "../../../components/common/LinkButton";

const tableHeader = {
  fontWeight: "bold",
  fontSize: 16,
};

const UsersTable = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={tableHeader}>
              №
            </TableCell>
            <TableCell align="center" sx={tableHeader}>
              Firstname
            </TableCell>
            <TableCell align="center" sx={tableHeader}>
              Lastname
            </TableCell>
            <TableCell align="center" sx={tableHeader}>
              Email
            </TableCell>
            <TableCell align="center" sx={tableHeader}>
              Show more
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(({ id, firstName, lastName, email }, index) => (
            <TableRow
              key={id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {index + 1}
              </TableCell>
              <TableCell align="center">{firstName}</TableCell>
              <TableCell align="center">{lastName}</TableCell>
              <TableCell align="center">{email}</TableCell>
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

UsersTable.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      email: PropTypes.string,
    })
  ).isRequired,
};

export default UsersTable;
