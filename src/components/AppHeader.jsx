import React from 'react';
import { AppBar, Box, Toolbar, Typography, Tabs, Tab, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const AppHeader = () => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Left: Logo */}
        <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
          Arunkumar G
        </Typography>

        {/* Right: Tabs */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Tabs
            textColor="primary"
            indicatorColor="primary"
            value={false}
          >
            <Tab label="About Me" onClick={() => handleScroll('about')} />
            <Tab label="Skills" onClick={() => handleScroll('skills')} />
            <Tab label="Contact" onClick={() => handleScroll('contact')} />
          </Tabs>

          {/* Social Icons */}
          <IconButton
            href="https://www.linkedin.com/in/your-linkedin/"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <GitHubIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
