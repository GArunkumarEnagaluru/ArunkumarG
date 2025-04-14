import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  IconButton,
  useTheme,
  useMediaQuery,
  Menu,
  MenuItem,
  Divider,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';

const AppHeader = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    handleMenuClose();
  };

  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Left: Logo */}
        <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
          Arunkumar G
        </Typography>

        {/* Right: Navigation */}
        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              keepMounted
            >
              <MenuItem onClick={() => handleScroll('about')}>About Me</MenuItem>
              <MenuItem onClick={() => handleScroll('skills')}>Skills</MenuItem>
              <MenuItem onClick={() => handleScroll('contact')}>Contact</MenuItem>

              <Divider sx={{ my: 1 }} />

              <MenuItem
                component="a"
                href="https://www.linkedin.com/in/your-linkedin/"
                target="_blank"
                rel="noopener"
              >
                <LinkedInIcon fontSize="small" sx={{ mr: 1 }} />
                LinkedIn
              </MenuItem>
              <MenuItem
                component="a"
                href="https://github.com/your-github"
                target="_blank"
                rel="noopener"
              >
                <GitHubIcon fontSize="small" sx={{ mr: 1 }} />
                GitHub
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Tabs
              textColor="primary"
              indicatorColor="primary"
              value={false} // Fix: change to undefined or remove it
            >
              <Tab label="About Me" onClick={() => handleScroll('about')} />
              <Tab label="Skills" onClick={() => handleScroll('skills')} />
              <Tab label="Contact" onClick={() => handleScroll('contact')} />
            </Tabs>

            <IconButton
              href="https://www.linkedin.com/in/g-arunkumar-a48167245/"
              target="_blank"
              rel="noopener"
              color="inherit"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href="https://github.com/GArunkumarEnagaluru"
              target="_blank"
              rel="noopener"
              color="inherit"
            >
              <GitHubIcon />
            </IconButton>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
