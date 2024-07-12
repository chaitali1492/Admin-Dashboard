import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Admin Dashboard
      </Typography>
      <Button color="inherit" component={Link} to="/">
        Employess
      </Button>
    </Toolbar>
  </AppBar>
  );
};

export default Header;
