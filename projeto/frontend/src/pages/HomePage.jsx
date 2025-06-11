import * as React from 'react';
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import SearchIcon from '@mui/icons-material/Search';
import DenseAppBar from '../Components/AppBar/AppBar';

export default function HomePage() {
  return (
    <>
      <DenseAppBar />

      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: '#1A1A1A',
          color: 'white',
          py: 10,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Denuncie com segurança e anonimato
          </Typography>
          <Typography variant="body1" gutterBottom>
            Sua contribuição é essencial para a segurança de todos. Faça denúncias anônimas e acompanhe o andamento sem revelar sua identidade. A plataforma SADA garante seu completo anonimato.
          </Typography>
          <Button variant="contained" sx={{ mt: 4, backgroundColor: '#2196f3', fontWeight: 'bold' }}>
            Fazer uma denúncia
          </Button>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ bgcolor: '#121212', color: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Card 1 */}
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 4, bgcolor: '#1E1E1E', height: '100%' }}>
                <LockIcon sx={{ fontSize: 40, color: '#FFD700' }} />
                <Typography variant="h6" fontWeight="bold" mt={2}>
                  Anonimato Garantido
                </Typography>
                <Typography variant="body2" mt={1}>
                  Seus dados nunca são coletados. Utilizamos tecnologia avançada para garantir que sua identidade seja completamente preservada.
                </Typography>
              </Paper>
            </Grid>

            {/* Card 2 */}
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 4, bgcolor: '#1E1E1E', height: '100%' }}>
                <PhoneIphoneIcon sx={{ fontSize: 40, color: '#00BFFF' }} />
                <Typography variant="h6" fontWeight="bold" mt={2}>
                  Acesso e Acompanhamento
                </Typography>
                <Typography variant="body2" mt={1}>
                  Receba um protocolo único para acompanhar o andamento da sua denúncia sem necessidade de identificação.
                </Typography>
              </Paper>
            </Grid>

            {/* Card 3 */}
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 4, bgcolor: '#1E1E1E', height: '100%' }}>
                <SearchIcon sx={{ fontSize: 40, color: '#4CAF50' }} />
                <Typography variant="h6" fontWeight="bold" mt={2}>
                  Análise Eficiente
                </Typography>
                <Typography variant="body2" mt={1}>
                  Sua denúncia é automaticamente direcionada ao órgão competente, garantindo resposta rápida e eficaz.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
