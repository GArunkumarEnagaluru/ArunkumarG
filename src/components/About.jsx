import React from "react";
import { Typography, Box } from "@mui/material";

const About = () => {
  return (
    <Box my={4}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        About Me
      </Typography>
      <Typography>
        I'm a software engineer with experience in building web applications
        using modern technologies like React, Node.js, and more.
      </Typography>
    </Box>
  );
};

export default About;
