import * as React from 'react';
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <Box sx={{ bgcolor: '#121212', color: 'white', py: 8, minHeight: '100vh' }}>

      {/* HERO */}
      <Container maxWidth="md" sx={{ mb: 8 }}>
        <Paper
          sx={{
            bgcolor: '#1E1E1E',
            p: 4,
            textAlign: 'center',
            borderRadius: 2,
          }}
        >
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Denuncie com segurança e anonimato
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.6 }} gutterBottom>
            Sua contribuição é essencial para a segurança de todos. Faça denúncias anônimas e acompanhe o andamento sem revelar sua identidade. A plataforma SADA garante seu completo anonimato.
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 3,
              backgroundColor: '#2196f3',
              fontWeight: 'bold',
              px: 4,
              py: 1.5,
              '&:hover': { backgroundColor: '#1976d2' },
            }}
            component={Link}
            to="/fazer-denuncia"
          >
            Fazer uma denúncia
          </Button>
        </Paper>
      </Container>

      {/* GRID COM 3 CARDS HORIZONTAIS */}
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
          sx={{
            flexWrap: 'nowrap',        // IMPEDIR QUE EMPILHE
            overflowX: 'auto',          // Caso a tela fique muito estreita, permitir scroll horizontal
            '&::-webkit-scrollbar': {
              display: 'none',          // Esconde a barra de rolagem horizontal
            },
          }}
        >
          {/* CARD 1 */}
          <Grid item sx={{ minWidth: 300, maxWidth: 400, flex: 1 }}>
            <Paper
              sx={{
                bgcolor: '#1E1E1E',
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 2,
              }}
            >
              <LockIcon sx={{ fontSize: 40, color: '#FFD700', mb: 2 }} />
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Anonimato Garantido
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.4 }}>
                Seus dados nunca são coletados. Utilizamos tecnologia avançada para garantir que sua identidade seja completamente preservada.
              </Typography>
            </Paper>
          </Grid>

          {/* CARD 2 */}
          <Grid item sx={{ minWidth: 300, maxWidth: 400, flex: 1 }}>
            <Paper
              sx={{
                bgcolor: '#1E1E1E',
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 2,
              }}
            >
              <PhoneIphoneIcon sx={{ fontSize: 40, color: '#00BFFF', mb: 2 }} />
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Acesso e Acompanhamento
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.4 }}>
                Receba um protocolo único para acompanhar o andamento da sua denúncia sem necessidade de identificação.
              </Typography>
            </Paper>
          </Grid>

          {/* CARD 3 */}
          <Grid item sx={{ minWidth: 300, maxWidth: 400, flex: 1 }}>
            <Paper
              sx={{
                bgcolor: '#1E1E1E',
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 2,
              }}
            >
              <SearchIcon sx={{ fontSize: 40, color: '#4CAF50', mb: 2 }} />
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Análise Eficiente
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.4 }}>
                Sua denúncia é automaticamente direcionada ao órgão competente, garantindo resposta rápida e eficaz.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

    </Box>
  );
}
