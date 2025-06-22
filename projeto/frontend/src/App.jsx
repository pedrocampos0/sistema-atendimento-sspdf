import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DenunciaFormPage from './pages/DenunciaFormPage';
import DenseAppBar from './Components/AppBar/AppBar';
import { Box } from '@mui/material';

export default function App() {
  return (
    <Router>
      <DenseAppBar />
      <Box sx={{ my: 0 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fazer-denuncia" element={<DenunciaFormPage />} />
        </Routes>
      </Box>
    </Router>
  );
}