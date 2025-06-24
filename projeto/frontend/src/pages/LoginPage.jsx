import * as React from 'react';
import { useState } from 'react';
import { Box, Typography, Container, TextField, Button, Paper, Alert } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function LoginPage() {
  const [email, setEmail] = useState(''); // Mudei para email
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [selectedUserType, setSelectedUserType] = useState(null); // 'agente' ou 'anonimo'
  const theme = useTheme();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    setError('');

    // Ignorar checagem de usuário e senha por enquanto
    if (selectedUserType === 'agente') {
      navigate('/agent-dashboard');
    } else if (selectedUserType === 'anonimo') {
      navigate('/home');
    } else {
      setError('Por favor, selecione o tipo de usuário (Agente ou Anônimo).');
    }
  };

  const handleSelectUserType = (type) => {
    setSelectedUserType(type);
    setError('');
    setEmail('');
    setPassword('');
  };

  const handleGoBack = () => {
    setSelectedUserType(null);
    setError('');
    setEmail('');
    setPassword('');
  };

  const handleRegister = () => {
    navigate('/agent-register'); // Exemplo de rota para cadastro do agente
  };

  return (
    <Box
      sx={{
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Container maxWidth="xs">
        <Paper
          sx={{
            bgcolor: theme.palette.background.paper,
            p: 4,
            borderRadius: 2,
            textAlign: 'center',
            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.4)',
          }}
        >
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Acessar SADA
          </Typography>

          {!selectedUserType && (
            <>
              <Typography variant="body1" sx={{ mb: 4 }}>
                Escolha como você gostaria de fazer login:
              </Typography>

              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
                <Button
                  variant="outlined"
                  onClick={() => handleSelectUserType('agente')}
                  sx={{
                    flexGrow: 1,
                    backgroundColor: 'transparent',
                    color: theme.palette.text.primary,
                    borderColor: theme.palette.primary.main,
                    fontWeight: 'bold',
                    py: 1.5,
                    borderRadius: 1,
                    textTransform: 'none',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      backgroundColor: 'rgba(33, 150, 243, 0.08)',
                      transform: 'scale(1.02)',
                      borderColor: theme.palette.primary.dark,
                    },
                  }}
                >
                  Agente
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => handleSelectUserType('anonimo')}
                  sx={{
                    flexGrow: 1,
                    backgroundColor: 'transparent',
                    color: theme.palette.text.primary,
                    borderColor: theme.palette.primary.main,
                    fontWeight: 'bold',
                    py: 1.5,
                    borderRadius: 1,
                    textTransform: 'none',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      backgroundColor: 'rgba(33, 150, 243, 0.08)',
                      transform: 'scale(1.02)',
                      borderColor: theme.palette.primary.dark,
                    },
                  }}
                >
                  Anônimo
                </Button>
              </Box>
            </>
          )}

          {selectedUserType && (
            <>
              <Box sx={{ display: 'flex', justifyContent: 'flex-start', width: '100%', mb: 2 }}>
                <Button
                  onClick={handleGoBack}
                  startIcon={<ArrowBackIcon />}
                  sx={{ textTransform: 'none', color: theme.palette.text.secondary }}
                >
                  Voltar
                </Button>
              </Box>

              <Typography variant="body1" sx={{ mb: 2 }}>
                {selectedUserType === 'agente' ? 'Login de Agente' : 'Login Anônimo'}
              </Typography>

              {error && (
                <Alert severity="error" sx={{ mb: 3 }}>
                  {error}
                </Alert>
              )}
              <form onSubmit={handleLogin}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  margin="normal"
                  sx={{
                    mb: 2,
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
                <TextField
                  fullWidth
                  label="Senha"
                  type="password"
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  margin="normal"
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
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    fontWeight: 'bold',
                    px: 4,
                    py: 1.5,
                    borderRadius: 1,
                    textTransform: 'none',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      backgroundColor: theme.palette.primary.dark,
                      transform: 'scale(1.05)',
                      boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)',
                    },
                    mb: selectedUserType === 'agente' ? 1 : 0,
                  }}
                >
                  Entrar
                </Button>
              </form>

              {selectedUserType === 'agente' && (
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={handleRegister}
                  sx={{
                    fontWeight: 'bold',
                    py: 1.5,
                    borderRadius: 1,
                    textTransform: 'none',
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.main,
                    '&:hover': {
                      backgroundColor: 'rgba(33, 150, 243, 0.08)',
                      borderColor: theme.palette.primary.dark,
                      transform: 'scale(1.02)',
                    },
                  }}
                >
                  Cadastrar
                </Button>
              )}
            </>
          )}
        </Paper>
      </Container>
    </Box>
  );
}
