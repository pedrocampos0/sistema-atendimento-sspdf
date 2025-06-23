import * as React from 'react';
import { Box, Typography, Container, TextField, Button, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function AcompanharDenunciaPage() {
  const [protocolNumber, setProtocolNumber] = React.useState('');
  const theme = useTheme();

  const handleTrackComplaint = (event) => {
    event.preventDefault();
    console.log('Número de Protocolo:', protocolNumber);
    alert(`Buscando denúncia com protocolo: ${protocolNumber}`);
    setProtocolNumber('');
  };

  return (
    <Box
      sx={{
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
        py: 8,
        minHeight: 'calc(100vh - 100px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Paper
          sx={{
            bgcolor: theme.palette.background.paper,
            p: 4,
            borderRadius: 2,
            textAlign: 'center',
          }}
        >
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Acompanhamento da Denúncia
          </Typography>

          <Typography variant="body1" sx={{ mb: 4 }}>
            Digite o número do protocolo recebido para acompanhar o status da sua denúncia.
          </Typography>

          <form onSubmit={handleTrackComplaint}>
            <TextField
              fullWidth
              label="Número de Protocolo"
              variant="outlined"
              value={protocolNumber}
              onChange={(e) => setProtocolNumber(e.target.value)}
              placeholder="Digite o protocolo recebido"
              sx={{
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.23)' },
                  '&:hover fieldset': { borderColor: theme.palette.text.primary },
                  '&.Mui-focused fieldset': { borderColor: theme.palette.primary.main },
                  '& input': { color: theme.palette.text.primary },
                },
                '& .MuiInputLabel-root': { color: theme.palette.text.primary },
                '& .MuiInputLabel-root.Mui-focused': { color: theme.palette.primary.main },
              }}
            />

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  fontWeight: 'bold',
                  px: 4,
                  py: 1,
                  borderRadius: 1,
                  textTransform: 'none',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    backgroundColor: theme.palette.primary.dark,
                    transform: 'scale(1.05)',
                    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)',
                  },
                }}
              >
                Verificar
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}
