import * as React from 'react';
import { Box, Typography, Container, Select, MenuItem, FormControl, InputLabel, TextField, Button, Alert } from '@mui/material';

export default function DenunciaFormPage() {
  const [category, setCategory] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically send the form data to your backend
    console.log({ category, location, description });
    alert('Denúncia enviada com sucesso! (Isso é apenas um exemplo de front-end)');
    // Reset form
    setCategory('');
    setLocation('');
    setDescription('');
  };

  return (
    <Box
      sx={{
        bgcolor: '#1A1A1A',
        color: 'white',
        py: 8,
        minHeight: 'calc(100vh - 100px)', // Adjust for AppBar height
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#121212', p: 4, borderRadius: 2, boxShadow: 3 }}>
          <Typography variant="h5" fontWeight="bold" align="center" gutterBottom>
            Formulário de Denúncia
          </Typography>
          <Typography variant="body2" align="center" mb={4}>
            Preencha os campos abaixo para registrar sua denúncia
          </Typography>

          <Alert severity="info" sx={{ mb: 3, bgcolor: '#222222', color: 'white' }}>
            <Typography variant="body2">
              <span role="img" aria-label="shield">🛡️</span> Sua segurança é nossa prioridade
              <br />
              Esta plataforma não coleta dados pessoais, endereço IP ou qualquer informação que possa identificá-lo. Todo o processo é anônimo e seguro.
            </Typography>
          </Alert>

          <form onSubmit={handleSubmit}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel id="category-label" sx={{ color: 'white' }}>Categoria da Denúncia</InputLabel>
              <Select
                labelId="category-label"
                id="category-select"
                value={category}
                label="Categoria da Denúncia"
                onChange={handleCategoryChange}
                sx={{
                  '& .MuiSelect-select': { color: 'white' },
                  '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255, 255, 255, 0.23)' },
                  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#2196f3' },
                  '& .MuiSvgIcon-root': { color: 'white' },
                }}
              >
                <MenuItem value="">
                  <em>Selecione uma categoria</em>
                </MenuItem>
                <MenuItem value="corrupcao">Corrupção</MenuItem>
                <MenuItem value="fraude">Fraude</MenuItem>
                <MenuItem value="assediomoral">Assédio Moral</MenuItem>
                <MenuItem value="outros">Outros</MenuItem>
              </Select>
            </FormControl>

            <TextField
              fullWidth
              label="Local da Ocorrência"
              variant="outlined"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Cidade, bairro, rua (seja o mais específico possível)"
              sx={{
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.23)' },
                  '&:hover fieldset': { borderColor: 'white' },
                  '&.Mui-focused fieldset': { borderColor: '#2196f3' },
                  '& input': { color: 'white' },
                  '& textarea': { color: 'white' },
                },
                '& .MuiInputLabel-root': { color: 'white' },
                '& .MuiInputLabel-root.Mui-focused': { color: '#2196f3' },
              }}
            />

            <TextField
              fullWidth
              label="Descrição da Ocorrência"
              variant="outlined"
              multiline
              rows={6}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Descreva com detalhes o que aconteceu, quando aconteceu e quaisquer informações relevantes"
              sx={{
                mb: 4,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.23)' },
                  '&:hover fieldset': { borderColor: 'white' },
                  '&.Mui-focused fieldset': { borderColor: '#2196f3' },
                  '& textarea': { color: 'white' },
                },
                '& .MuiInputLabel-root': { color: 'white' },
                '& .MuiInputLabel-root.Mui-focused': { color: '#2196f3' },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ backgroundColor: '#2196f3', fontWeight: 'bold', py: 1.5 }}
            >
              Enviar Denúncia
            </Button>
          </form>
        </Box>
      </Container>
    </Box>
  );
}