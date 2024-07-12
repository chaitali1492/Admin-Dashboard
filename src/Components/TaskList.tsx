import React from "react";
import { useState, ChangeEvent } from "react";
import {
  TextField,
  Checkbox,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

export interface Task {
  id: number;
  name: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onTaskToggle: (taskId: number) => void;
  onAddTask: (taskName: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onTaskToggle,
  onAddTask,
}) => {
  const [newTask, setNewTask] = useState("");
  const navigate = useNavigate();

  const handleAddTask = () => {
    if (newTask.trim()) {
      onAddTask(newTask);
      setNewTask("");
    }
  };

  return (
    <Box>
      <Box display="flex" alignItems="center" mt={2}>
        <TextField
          label="New Task"
          value={newTask}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setNewTask(e.target.value)
          }
          fullWidth
        />
      </Box>
      <Box my={2} display={"flex"} justifyContent={"space-between"}>
        <Button
          color="primary"
          variant="contained"
          onClick={handleAddTask}
          startIcon={<AddIcon />}
        >
          Add Task
        </Button>
        <Button
          color="secondary"
          variant="contained"
          onClick={()=>navigate("/")}
          startIcon={<ArrowBackIcon />}
        >
          Back
        </Button>
      </Box>

      {tasks.length === 0 ? (
        <Typography>No Tasks found. Please add new task.</Typography>
      ) : (
        <Box mt={4}>
          <Typography variant="h5">Tasks</Typography>
          <List>
            {tasks.map((task) => (
              <ListItem
                key={task.id}
                dense
                onClick={() => onTaskToggle(task.id)}
              >
                <Checkbox
                  edge="start"
                  checked={task.completed}
                  tabIndex={-1}
                  disableRipple
                />
                <ListItemText primary={task.name} />
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Box>
  );
};

export default TaskList;
