import * as React from 'react';
import { Box, Typography, Container, Paper, Grid } from '@mui/material';

export default function EstatisticasPage() {
  const statistics = {
    totalComplaints: 1250,
    resolvedComplaints: 980,
    inProgressComplaints: 200,
    pendingComplaints: 70,
    topCategories: [
      { name: 'Corrupção', count: 450 },
      { name: 'Fraude', count: 300 },
      { name: 'Assédio Moral', count: 200 },
      { name: 'Outros', count: 300 },
    ],
  };

  return (
    <Box
      sx={{
        bgcolor: '#1e1e1e',
        color: 'white',
        py: 8,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Paper
          sx={{
            bgcolor: '#1e1e1e',
            p: 4,
            borderRadius: 2,
            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.4)',
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Estatísticas das Denúncias
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.6 }}>
            Confira os números e o panorama das denúncias registradas na plataforma SADA.
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ bgcolor: '#2d2d2d', p: 2, borderRadius: 2 }}>
                <Typography variant="h6" color="primary.main">
                  Total de Denúncias
                </Typography>
                <Typography variant="h5" fontWeight="bold">
                  {statistics.totalComplaints}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ bgcolor: '#2d2d2d', p: 2, borderRadius: 2 }}>
                <Typography variant="h6" color="success.main">
                  Resolvidas
                </Typography>
                <Typography variant="h5" fontWeight="bold">
                  {statistics.resolvedComplaints}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ bgcolor: '#2d2d2d', p: 2, borderRadius: 2 }}>
                <Typography variant="h6" color="warning.main">
                  Em Andamento
                </Typography>
                <Typography variant="h5" fontWeight="bold">
                  {statistics.inProgressComplaints}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ bgcolor: '#2d2d2d', p: 2, borderRadius: 2 }}>
                <Typography variant="h6" color="error.main">
                  Pendentes
                </Typography>
                <Typography variant="h5" fontWeight="bold">
                  {statistics.pendingComplaints}
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          <Box sx={{ mt: 6 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Denúncias por Categoria
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              {statistics.topCategories.map((category, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Paper sx={{ bgcolor: '#2d2d2d', p: 2, borderRadius: 2, height: '100%' }}>
                    <Typography variant="h6" fontWeight="bold" color="text.primary" sx={{ color: 'white' }}>
                      {category.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ color: '#bbb' }}>
                      {category.count} denúncias
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
