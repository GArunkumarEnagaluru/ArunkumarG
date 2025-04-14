import React from "react";
import { Typography, Box, Stack, Avatar, useTheme } from "@mui/material";

// Importing all icons
import html5 from "../icons/html5.png";
import css3 from "../icons/css3.png";
import angularjs from "../icons/angularjs.png";
import reactjs from "../icons/reactjs.png";
import javascript from "../icons/javascript.png";
import typescript from "../icons/typescript.png";
import mui from "../icons/mui.png";
import redux from "../icons/redux.png";
import vite from "../icons/vite.png";
import axios from "../icons/axios.png";
import jest from "../icons/jest.png";
import jenkins from "../icons/jenkins.png";
import vscode from "../icons/vscode.png";
import mongodb from "../icons/mongodb.png";
import postgresql from "../icons/postgresql.png";
import postman from "../icons/postman.png";
import cypress from "../icons/cypress.png";
import restassured from "../icons/restassured.png";
import git from "../icons/git.png";

const Skills = () => {
  const theme = useTheme();

  const skills = [
    { name: "HTML5", icon: html5 },
    { name: "CSS3", icon: css3 },
    { name: "AngularJS", icon: angularjs },
    { name: "ReactJS", icon: reactjs },
    { name: "JavaScript", icon: javascript },
    { name: "TypeScript", icon: typescript },
    { name: "MUI", icon: mui },
    { name: "Redux", icon: redux },
    { name: "Vite", icon: vite },
    { name: "Axios", icon: axios },
    { name: "Jest", icon: jest },
    { name: "Jenkins", icon: jenkins },
    { name: "VSCode", icon: vscode },
    { name: "MongoDB", icon: mongodb },
    { name: "PostgreSQL", icon: postgresql },
    { name: "Postman", icon: postman },
    { name: "Cypress", icon: cypress },
    { name: "Rest Assured", icon: restassured },
    { name: "Git", icon: git },
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
