import React from 'react';
import AppHeader from './components/AppHeader';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { Container, Box } from '@mui/material';

function App() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(to bottom, #e3f2fd, #ffffff)',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      <AppHeader />
      <Container maxWidth="lg">
        <Box id="about" mt={4}>
          <About />
        </Box>
        <Box id="skills" mt={4}>
          <Skills />
        </Box>
        <Box id="contact" mt={4}>
          <Contact />
        </Box>
      </Container>
    </Box>
  );
}

export default App;
