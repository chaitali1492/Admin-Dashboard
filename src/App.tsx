import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeeList from "./Components/EmployeeList";
import EmployeeForm, { Employee } from "./Components/EmployeeForm";
import EmployeeDetails from "./Components/EmployeeDetails";
import { useState } from "react";
import Layout from "./Components/Layout";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      fontSize: 20,
      body2: {
        fontSize: 18,
      },
      body1: {
        fontSize: 18,
      },
      caption: {
        fontSize: 16,
      },
      button: {
        fontSize: 18,
      },
    },
  });

  const [employees, setEmployees] = useState<Employee[]>([
    {
      id: 1,
      name: "Chaitali Pathak",
      email: "xyz@gmail.com",
      department: "IT",
      tasks: [],
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "abc@gmail.com",
      department: "Non-IT",
      tasks: [],
    },
  ]);
  const [nextEmployeeId, setNextEmployeeId] = useState(3);

  const handleAddEmployee = (employee: Employee) => {
    setEmployees([...employees, employee]);
    setNextEmployeeId(nextEmployeeId + 1);
  };

  const updateEmployee = (newEmployeee: Employee) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === newEmployeee.id ? newEmployeee : employee
      )
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<EmployeeList employees={employees} />} />
            <Route
              path="/employee/add"
              element={
                <EmployeeForm
                  onAddEmployee={handleAddEmployee}
                  nextEmployeeId={nextEmployeeId}
                />
              }
            />
            <Route
              path="/employee/:id"
              element={
                <EmployeeDetails
                  employees={employees}
                  updateEmployee={updateEmployee}
                />
              }
            />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
