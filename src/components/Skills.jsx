import React from "react";
import { Typography, Box, Stack, Avatar, useTheme } from "@mui/material";

const Skills = () => {
  const theme = useTheme();

  const skills = [
    { name: "HTML5", icon: "./html5.png" },
    { name: "CSS3", icon: "./css3.png" },
    { name: "AngularJS", icon: "./angularjs.png" },
    { name: "ReactJS", icon: "./reactjs.png" },
    { name: "JavaScript", icon: "./javascript.png" },
    { name: "TypeScript", icon: "./typescript.png" },
    { name: "MUI", icon: "./mui.png" },
    { name: "Redux", icon: "./redux.png" },
    { name: "Vite", icon: "./vite.png" },
    { name: "Axios", icon: "./axios.png" },
    { name: "Jest", icon: "./jest.png" },
    { name: "Jenkins", icon: "./jenkins.png" },
    { name: "VSCode", icon: "./vscode.png" },
    { name: "MongoDB", icon: "./mongodb.png" },
    { name: "PostgreSQL", icon: "./postgresql.png" },
    { name: "Postman", icon: "./postman.png" },
    { name: "Cypress", icon: "./cypress.png" },
    { name: "Rest Assured", icon: "./restassured.png" },
    { name: "Git", icon: "./git.png" },
  ];

  return (
    <Box my={4}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        My Skills
      </Typography>
      <Stack
        direction="row"
        flexWrap="wrap"
        spacing={2}
        useFlexGap
        alignItems="center"
      >
        {skills.map((skill, index) => (
          <Avatar
            key={index}
            alt={skill.name}
            src={skill.icon}
            sx={{
              width: 48,
              height: 48,
              m: 0.5,
              border: `1px solid ${theme.palette.divider}`,
              bgcolor: "#fff",
            }}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default Skills;