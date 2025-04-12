import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { Container } from '@mui/material';

function App() {
  return (
    <Container maxWidth="md">
      <Header />
      <About />
      <Skills />
      <Contact />
    </Container>
  );
}

export default App;
