import React from "react";
import { Typography, Box, Chip, Stack } from "@mui/material";

const Skills = () => {
  const skills = ["JavaScript", "React", "Node.js", "Redux", "MUI", "Git"];

  return (
    <Box my={4}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        My Skills
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap">
        {skills.map((skill, index) => (
          <Chip key={index} label={skill} variant="outlined" />
        ))}
      </Stack>
    </Box>
  );
};

export default Skills;
