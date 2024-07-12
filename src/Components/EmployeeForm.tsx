import React, { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Box } from "@mui/material";
import { Task } from "./TaskList";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  tasks:Task[];
}

interface EmployeeFormProps {
  onAddEmployee: (employee: Employee) => void;
  nextEmployeeId: number;
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({
  onAddEmployee,
  nextEmployeeId,
}) => {
  const [name, setName] = useState("");
  const [email,setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleDepartChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDepartment(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.trim()) {
      const newEmployee: Employee = { id: nextEmployeeId, name, email, department, tasks:[] };
      onAddEmployee(newEmployee);
      setName("");
      setEmail("");
      setDepartment("");
      navigate("/");
    }
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Add Employee
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField
          label="Name"
          value={name}
          onChange={handleNameChange}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="E-mail"
          value={email}
          onChange={handleEmailChange}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Department"
          value={department}
          onChange={handleDepartChange}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <Box display={'flex'} justifyContent={'space-between'}>
        <Button type="submit" variant="contained" color="primary">
          Add
        </Button>
        <Button
          color="secondary"
          variant="contained"
          onClick={()=>navigate("/")}
          startIcon={<ArrowBackIcon />}
        >
          Cancel
        </Button>
        </Box>
      </Box>
    </>
  );
};

export default EmployeeForm;
