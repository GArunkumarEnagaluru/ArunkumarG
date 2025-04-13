import React from "react";
import { Typography, Box, Stack, Avatar, useTheme } from "@mui/material";

const Skills = () => {
  const theme = useTheme();

  const skills = [
    { name: "AngularJS", icon: "/icons/angularjs.png" },
    { name: "ReactJS", icon: "/icons/reactjs.png" },
    { name: "JavaScript", icon: "/icons/javascript.png" },
    { name: "TypeScript", icon: "/icons/typescript.png" },
    { name: "MUI", icon: "/icons/mui.png" },
    { name: "Redux", icon: "/icons/redux.png" },
    { name: "HTML5", icon: "/icons/html5.png" },
    { name: "CSS3", icon: "/icons/css3.png" },
    { name: "Cypress", icon: "/icons/cypress.png" },
    { name: "Rest Assured", icon: "/icons/restassured.png" },
    { name: "Axios", icon: "/icons/axios.png" },
    { name: "Jest", icon: "/icons/jest.png" },
    { name: "Git", icon: "/icons/git.png" },
    { name: "Jenkins", icon: "/icons/jenkins.png" },
    { name: "VSCode", icon: "/icons/vscode.png" },
    { name: "MongoDB", icon: "/icons/mongodb.png" },
    { name: "PostgreSQL", icon: "/icons/postgresql.png" },
    { name: "SSMS", icon: "/icons/ssms.png" },
    { name: "Postman", icon: "/icons/postman.png" },
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
