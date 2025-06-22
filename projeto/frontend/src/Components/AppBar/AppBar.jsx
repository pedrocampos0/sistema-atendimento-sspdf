import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function DenseAppBar() {
  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#222222" }}>
        <Toolbar
          sx={{
            height: "100px",
            display: 'flex',
            justifyContent: 'space-between',
            px: 4, // padding horizontal (left and right)
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              SADA - Sistema de Atendimento a Denúncias Anônimas
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" component={Link} to="/">Início</Button>
            <Button color="inherit" component={Link} to="/fazer-denuncia">Fazer Denúncia</Button>
            <Button color="inherit" component={Link} to="/acompanhar-denuncia">Acompanhar Denúncia</Button>
            <Button color="inherit" component={Link} to="/sobre">Sobre</Button>
            <Button color="inherit" component={Link} to="/estatisticas">Estatísticas</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* This Toolbar adds a "spacer" to prevent content from going under the fixed AppBar */}
      <Toolbar sx={{ height: "100px" }} />
    </>
  );
}