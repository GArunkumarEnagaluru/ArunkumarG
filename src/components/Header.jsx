import React from "react";
import { Typography, Box } from "@mui/material";

const Header = () => {
  return (
    <Box my={4} textAlign="center">
      <Typography variant="h3" fontWeight="bold">
        Hi, I'm [Your Name]
      </Typography>
      <Typography variant="subtitle1">
        A passionate software engineer.
      </Typography>
    </Box>
  );
};

export default Header;
