import * as React from 'react';
import { Box, Typography, Container, TextField, Button, Paper } from '@mui/material';

export default function AcompanharDenunciaPage() {
  const [protocolNumber, setProtocolNumber] = React.useState('');

  const handleTrackComplaint = (event) => {
    event.preventDefault();
    console.log('Número de Protocolo:', protocolNumber);
    alert(`Buscando denúncia com protocolo: ${protocolNumber}`);
    setProtocolNumber('');
  };

  return (
    <Box sx={{ bgcolor: '#1e1e1e', color: 'white', py: 8, minHeight: '100vh' }}>
      <Container maxWidth="sm">
        <Paper
          sx={{
            bgcolor: '#1e1e1e',
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
                  '&:hover fieldset': { borderColor: 'white' },
                  '&.Mui-focused fieldset': { borderColor: '#2196f3' },
                  '& input': { color: 'white' },
                },
                '& .MuiInputLabel-root': { color: 'white' },
                '& .MuiInputLabel-root.Mui-focused': { color: '#2196f3' },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: '#2196f3',
                fontWeight: 'bold',
                py: 1.5,
                px: 4,
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  backgroundColor: '#1976d2',
                  transform: 'scale(1.05)',
                  boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.4)',
                },
              }}
            >
              Verificar
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}
