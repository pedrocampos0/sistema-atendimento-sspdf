import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DenunciaFormPage from './pages/DenunciaFormPage';
import DenseAppBar from './Components/AppBar/AppBar';
import { Box } from '@mui/material';
import AcompanharDenunciaPage from './pages/AcompanharDenunciaPage';
import SobrePage from './pages/SobrePage';
import EstatisticasPage from './pages/EstatisticasPage';
import LoginPage from './pages/LoginPage';
import AgentDashboardPage from './pages/AgentDashboardPage';
import DetalhesDenuncia from './pages/DetalhesDenuncia';
import AgentRegisterPage from './pages/AgentRegisterPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={null} />
        <Route path="/agent-dashboard" element={null} />
        <Route path="/agent/denuncias/:id" element={null} />
        <Route path="/agent-register" element={null} />
        <Route path="*" element={<DenseAppBar />} />
      </Routes>

      <Box sx={{ my: 0 }}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/fazer-denuncia" element={<DenunciaFormPage />} />
          <Route path="/acompanhar-denuncia" element={<AcompanharDenunciaPage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/estatisticas" element={<EstatisticasPage />} />
          <Route path="/agent-dashboard" element={<AgentDashboardPage />} />
          <Route path="/agent/denuncias/:id" element={<DetalhesDenuncia />} />
          <Route path="/agent-register" element={<AgentRegisterPage />} />
        </Routes>
      </Box>
    </Router>
  );
}