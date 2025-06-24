import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

export default function DenseAppBar() {
  const theme = useTheme();

  return (
      <>
        <AppBar position="fixed" sx={{ backgroundColor: theme.palette.background.paper }}>
          <Toolbar
              sx={{
                height: '70px',
                display: 'flex',
                justifyContent: 'space-between',
                px: 3,
              }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="h6" color="inherit" component="div" sx={{ fontSize: '0.875rem' }}>
                SADA - Sistema de Atendimento a Denúncias Anônimas
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: 1.5 }}>
              <Button color="inherit" component={Link} to="/" sx={{ fontSize: '0.75rem', minWidth: 'auto' }}>
                Início
              </Button>
              <Button color="inherit" component={Link} to="/fazer-denuncia" sx={{ fontSize: '0.75rem', minWidth: 'auto' }}>
                Fazer Denúncia
              </Button>
              <Button color="inherit" component={Link} to="/acompanhar-denuncia" sx={{ fontSize: '0.75rem', minWidth: 'auto' }}>
                Acompanhar Denúncia
              </Button>
              <Button color="inherit" component={Link} to="/sobre" sx={{ fontSize: '0.75rem', minWidth: 'auto' }}>
                Sobre
              </Button>
              <Button color="inherit" component={Link} to="/estatisticas" sx={{ fontSize: '0.75rem', minWidth: 'auto' }}>
                Estatísticas
              </Button>
            </Box>
          </Toolbar>
        </AppBar>

        <Toolbar sx={{ height: '70px' }} />
      </>
  );
}