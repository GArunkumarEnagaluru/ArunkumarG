import React from "react";
import { Typography, Box, Grid, useTheme, Avatar, Container } from "@mui/material";

const About = () => {
  const theme = useTheme();

  return (
    <Box my={4}>
      <Container maxWidth="lg">
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          About Me
        </Typography>
        <Grid container spacing={4} alignItems="flex-start">
          {/* Left Content */}
          <Grid item xs={12} md={8}>
            <Box sx={{ textAlign: "left", maxWidth: '600px' }}>
              <Typography paragraph>
                Hi, I’m <strong>Arunkumar G</strong>, a passionate{" "}
                <strong>Frontend Developer</strong> with over{" "}
                <strong>5+ years of experience</strong> in the software industry.
                I began my journey as a <strong>QA Engineer</strong> and
                successfully transitioned into{" "}
                <strong>Frontend Development</strong> by upskilling and building
                modern web applications.
              </Typography>

              <Typography paragraph>
                As a frontend developer, I have hands-on experience with:
                <ul
                  style={{
                    marginLeft: theme.spacing(3),
                    marginTop: theme.spacing(1),
                  }}
                >
                  <li>
                    <strong>React.js</strong> and <strong>AngularJS</strong>{" "}
                    (JavaScript/TypeScript)
                  </li>
                  <li>
                    <strong>MUI (Material UI)</strong> for component-based UI
                    development
                  </li>
                  <li>
                    <strong>Jest</strong> for unit testing, <strong>Axios</strong>{" "}
                    for API interactions
                  </li>
                  <li>
                    <strong>Git</strong>, <strong>Bitbucket</strong> for version
                    control
                  </li>
                </ul>
              </Typography>

              <Typography paragraph>
                Previously, in my QA role, I gained experience with:
                <ul
                  style={{
                    marginLeft: theme.spacing(3),
                    marginTop: theme.spacing(1),
                  }}
                >
                  <li>
                    <strong>Manual Testing</strong>
                  </li>
                  <li>
                    <strong>UI/API Automation Testing</strong> using{" "}
                    <strong>Cypress</strong>
                  </li>
                  <li>
                    <strong>API Automation Testing</strong> using{" "}
                    <strong>Rest Assured Framework</strong>
                  </li>
                </ul>
              </Typography>

              <Typography paragraph>
                I bring a unique blend of frontend expertise with a strong
                foundation in quality assurance, making me a detail-oriented and
                efficient developer.
              </Typography>
            </Box>
          </Grid>

          {/* Right Side: Photo */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              alignItems: "flex-start",
            }}
          >
            <Avatar
              alt="Arunkumar G"
              src="./arunphoto.jpg"
              sx={{
                width: { xs: 350, md: 400 },
                height: { xs: 350, md: 400 },
                borderRadius: 2,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
