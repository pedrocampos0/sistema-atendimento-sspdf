import * as React from 'react';
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

export default function HomePage() {
  const theme = useTheme(); 

  return (
    <Box 
      sx={{ 
        bgcolor: theme.palette.background.default, 
        color: theme.palette.text.primary, 
        py: 8, 
        minHeight: 'calc(100vh - 100px)', 
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Paper
          sx={{
            bgcolor: theme.palette.background.paper, 
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
            component={Link}
            to="/fazer-denuncia"
            sx={{
              mt: 3,
              backgroundColor: theme.palette.primary.main,
              fontWeight: 'bold',
              px: 4,
              py: 1.5,
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
                transform: 'scale(1.05)',
                boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.4)',
              },
            }}
          >
            Fazer uma denúncia
          </Button>
          <Button
          variant="contained"
          component={Link}
          to="/acompanhar-denuncia"
          sx={{
            ml: 2,
            mt: 3,
            backgroundColor: theme.palette.secondary.dark,
            fontWeight: 'bold',
            px: 4,
            py: 1.5,
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            '&:hover': {
              backgroundColor: theme.palette.secondary.light,
              transform: 'scale(1.05)',
              boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.4)',
            },
          }}
          >
            Buscar uma denúncia
          </Button>
        </Paper>
      </Container>

      <Container maxWidth="lg" sx={{ overflow: 'visible' }}>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
          sx={{
            position: 'relative',
            overflow: 'visible',
            flexWrap: 'nowrap',
          }}
        >
          <Grid item sx={{ minWidth: 300, maxWidth: 400 }}>
            <Paper
              sx={{
                bgcolor: theme.palette.background.paper, 
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '1rem',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border-radius 0.3s ease-in-out',
                position: 'relative',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.4)',
                  borderRadius: '2rem',
                  zIndex: 2,
                },
              }}
            >
              <LockIcon sx={{ fontSize: 40, color: theme.palette.customColors.golden, mb: 2 }} /> 
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Anonimato Garantido
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.4 }}>
                Seus dados nunca são coletados. Utilizamos tecnologia avançada para garantir que sua identidade seja completamente preservada.
              </Typography>
            </Paper>
          </Grid>

          <Grid item sx={{ minWidth: 300, maxWidth: 400 }}>
            <Paper
              sx={{
                bgcolor: theme.palette.background.paper, 
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '1rem',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border-radius 0.3s ease-in-out',
                position: 'relative',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.4)',
                  borderRadius: '2rem',
                  zIndex: 2,
                },
              }}
            >
              <PhoneIphoneIcon sx={{ fontSize: 40, color: theme.palette.customColors.skyBlue, mb: 2 }} /> 
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Acesso e Acompanhamento
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.4 }}>
                Receba um protocolo único para acompanhar o andamento da sua denúncia sem necessidade de identificação.
              </Typography>
            </Paper>
          </Grid>

          <Grid item sx={{ minWidth: 300, maxWidth: 400 }}>
            <Paper
              sx={{
                bgcolor: theme.palette.background.paper, 
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '1rem',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border-radius 0.3s ease-in-out',
                position: 'relative',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.4)',
                  borderRadius: '2rem',
                  zIndex: 2,
                },
              }}
            >
              <SearchIcon sx={{ fontSize: 40, color: theme.palette.customColors.success, mb: 2 }} />
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