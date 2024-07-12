import React, { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import TaskList, { Task } from "./TaskList";
import { useState } from "react";
import { Typography, Box } from "@mui/material";
import { Employee } from "./EmployeeForm";

interface EmployeeListProps {
  employees: Employee[];
  updateEmployee: (employee: Employee) => void;
}

const EmployeeDetails: React.FC<EmployeeListProps> = ({
  employees,
  updateEmployee,
}) => {
  const { id } = useParams();

  const [employee, setEmployee] = useState<Employee | null>();

  const [tasks, setTasks] = useState<Task[]>([]);

  const [nextTaskId, setNextTaskId] = useState(3); // Initial next task ID

  useLayoutEffect(() => {
    return () => {
      if (employee && tasks) updateEmployee({ ...employee, tasks: tasks });
    };
  }, [employee, tasks]);

  useLayoutEffect(() => {
    const employeeData = (employees || []).find(
      (data) => (data.id.toString() || "") === id
    );
    if (employeeData) {
      setEmployee(employeeData);
      setTasks(employeeData.tasks);
    } else {
      setEmployee(null);
      setTasks([]);
    }
  }, [id]);

  if (!employee) {
    return <Typography variant="h3">No employee found.</Typography>;
  }

  const handleTaskToggle = (taskId: any) => {
    setTasks(
      (tasks || []).map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleAddTask = (taskName: any) => {
    const newTask = { id: nextTaskId, name: taskName, completed: false };
    setTasks([...(tasks || []), newTask]);
    setNextTaskId(nextTaskId + 1);
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        {employee.name}
      </Typography>
      <Box mt={2}>
        <TaskList
          tasks={tasks || []}
          onTaskToggle={handleTaskToggle}
          onAddTask={handleAddTask}
        />
      </Box>
    </>
  );
};

export default EmployeeDetails;
