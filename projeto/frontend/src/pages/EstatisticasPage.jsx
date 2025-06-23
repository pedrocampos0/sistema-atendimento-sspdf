import * as React from 'react';
import { Box, Typography, Container, Paper, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function EstatisticasPage() {
  const theme = useTheme();

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
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
        py: 6,
        minHeight: 'calc(100vh - 140px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Paper
          sx={{
            bgcolor: theme.palette.background.paper,
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
            Confira nossas estatisticas das denúncias registradas na plataforma SADA.
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ bgcolor: theme.palette.customColors.tertiary, p: 2, borderRadius: 2 }}>
                <Typography variant="h6" color="primary.main">
                  Total de Denúncias
                </Typography>
                <Typography variant="h5" fontWeight="bold">
                  {statistics.totalComplaints}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ bgcolor: theme.palette.customColors.tertiary, p: 2, borderRadius: 2 }}>
                <Typography variant="h6" color="success.main">
                  Resolvidas
                </Typography>
                <Typography variant="h5" fontWeight="bold">
                  {statistics.resolvedComplaints}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ bgcolor: theme.palette.customColors.tertiary, p: 2, borderRadius: 2 }}>
                <Typography variant="h6" color="warning.main">
                  Em Andamento
                </Typography>
                <Typography variant="h5" fontWeight="bold">
                  {statistics.inProgressComplaints}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ bgcolor: theme.palette.customColors.tertiary, p: 2, borderRadius: 2 }}>
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
                  <Paper
                    sx={{
                      bgcolor: theme.palette.customColors.tertiary,
                      p: 2,
                      borderRadius: 2,
                      height: '100%',
                    }}
                  >
                    <Typography variant="h6" fontWeight="bold" color="text.primary">
                      {category.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
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
