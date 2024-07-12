import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { Box, Button, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
}

interface EmployeeListProps {
  employees: Employee[];
}

const EmployeeList: React.FC<EmployeeListProps> = ({ employees }) => {
  const navigate = useNavigate();

  return (
    <Box>
      <Box my={2} display={"flex"} justifyContent={"space-between"}>
        <Typography variant="h4" gutterBottom>
          Employee List
        </Typography>
        <Box>
        <Button
          color="primary"
          variant="contained"
          onClick={() => navigate("/employee/add")}
          startIcon={<AddIcon />}
        >
          Add Task
        </Button>
        </Box>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Department</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell align="left">{employee.name}</TableCell>
                <TableCell align="left">{employee.email}</TableCell>
                <TableCell align="left">{employee.department}</TableCell>
                <TableCell align="center">
                  <Link to={`/employee/${employee.id}`}>View</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default EmployeeList;
