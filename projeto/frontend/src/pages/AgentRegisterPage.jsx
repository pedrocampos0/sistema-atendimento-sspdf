import * as React from 'react';
import { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Paper,
  Alert,
  IconButton,
  InputAdornment
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function AgentRegisterPage() {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState(''); // Formato YYYY-MM-DD
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [matricula, setMatricula] = useState('');
  const [cargo, setCargo] = useState('');
  const [delegacia, setDelegacia] = useState(''); // Novo campo
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const theme = useTheme();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    // Validações básicas
    if (!nomeCompleto || !cpf || !dataNascimento || !email || !telefone || !matricula || !cargo || !delegacia || !password || !confirmPassword) {
      setError('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    if (password !== confirmPassword) {
      setError('A senha e a confirmação de senha não coincidem.');
      return;
    }

    if (password.length < 6) {
      setError('A senha deve ter no mínimo 6 caracteres.');
      return;
    }

    // Regex simples para CPF (apenas dígitos, 11 caracteres)
    if (!/^\d{11}$/.test(cpf)) {
      setError('CPF inválido. Deve conter 11 dígitos.');
      return;
    }

    // Regex simples para Email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Email inválido.');
      return;
    }

    // Em uma aplicação real, você enviaria esses dados para o backend:
    console.log({
      nomeCompleto,
      cpf,
      dataNascimento,
      email,
      telefone,
      matricula,
      cargo,
      delegacia,
      password, // Em produção, NUNCA envie a senha em texto puro. Use hashing.
    });

    setSuccess('Cadastro realizado com sucesso! Você será redirecionado para o login.');
    // Simular um atraso antes de redirecionar
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  const handleGoBack = () => {
    navigate('/login'); // Volta para a tela de login
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // Função para formatar o CPF enquanto digita
  const formatCpf = (value) => {
    value = value.replace(/\D/g, ''); // Remove tudo que não for dígito
    if (value.length > 3) value = value.replace(/^(\d{3})(\d)/, '$1.$2');
    if (value.length > 6) value = value.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
    if (value.length > 9) value = value.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
    return value;
  };

  // Função para formatar o Telefone enquanto digita (Ex: (XX) XXXXX-XXXX)
  const formatTelefone = (value) => {
    value = value.replace(/\D/g, ''); // Remove tudo que não for dígito
    if (value.length > 0) value = `(${value}`;
    if (value.length > 3) value = value.replace(/^(\d{2})(\d)/, '($1) $2');
    if (value.length > 9) value = value.replace(/^(\d{2})\)(\d{5})(\d)/, '($1) $2-$3');
    return value.substring(0, 15); // Limita ao formato (99) 99999-9999
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
        py: 4, // Adicione padding vertical para conteúdo maior
      }}
    >
      <Container maxWidth="sm"> {/* Aumentei para 'sm' para caber mais campos */}
        <Paper
          sx={{
            bgcolor: theme.palette.background.paper,
            p: 4,
            borderRadius: 2,
            textAlign: 'center',
            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.4)',
            position: 'relative', // Para posicionar o botão de voltar
          }}
        >
          <Box sx={{ position: 'absolute', top: 16, left: 16 }}>
            <IconButton onClick={handleGoBack} color="inherit">
              <ArrowBackIcon />
            </IconButton>
          </Box>

          <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 2 }}>
            Cadastro de Agente
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
            Preencha os dados abaixo para criar sua conta de agente.
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}
          {success && (
            <Alert severity="success" sx={{ mb: 3 }}>
              {success}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Nome Completo"
              variant="outlined"
              value={nomeCompleto}
              onChange={(e) => setNomeCompleto(e.target.value)}
              margin="normal"
              required
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="CPF"
              variant="outlined"
              value={formatCpf(cpf)} // Aplica a formatação
              onChange={(e) => setCpf(e.target.value)}
              margin="normal"
              required
              inputProps={{ maxLength: 14 }} // CPF formatado tem 14 caracteres (XXX.XXX.XXX-XX)
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Data de Nascimento"
              type="date"
              variant="outlined"
              value={dataNascimento}
              onChange={(e) => setDataNascimento(e.target.value)}
              margin="normal"
              required
              InputLabelProps={{
                shrink: true,
              }}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              required
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Telefone"
              variant="outlined"
              value={formatTelefone(telefone)} // Aplica a formatação
              onChange={(e) => setTelefone(e.target.value)}
              margin="normal"
              required
              inputProps={{ maxLength: 15 }} // Telefone formatado tem 15 caracteres ((XX) XXXXX-XXXX)
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Matrícula Funcional"
              variant="outlined"
              value={matricula}
              onChange={(e) => setMatricula(e.target.value)}
              margin="normal"
              required
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Cargo/Função"
              variant="outlined"
              value={cargo}
              onChange={(e) => setCargo(e.target.value)}
              margin="normal"
              required
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Delegacia / Unidade de Lotação" // Campo para a delegacia
              variant="outlined"
              value={delegacia}
              onChange={(e) => setDelegacia(e.target.value)}
              margin="normal"
              required
              sx={{ mb: 3 }}
            />
            <TextField
              fullWidth
              label="Senha"
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              required
              sx={{ mb: 2 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleTogglePasswordVisibility}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              label="Confirmar Senha"
              type={showConfirmPassword ? 'text' : 'password'}
              variant="outlined"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              margin="normal"
              required
              sx={{ mb: 3 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle confirm password visibility"
                      onClick={handleToggleConfirmPasswordVisibility}
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
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
                  transform: 'scale(1.02)',
                  boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)',
                },
              }}
            >
              Cadastrar
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}