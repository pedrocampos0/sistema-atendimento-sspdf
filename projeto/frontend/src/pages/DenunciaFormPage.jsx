import * as React from 'react';
import { Box, Typography, Container, Select, MenuItem, FormControl, InputLabel, TextField, Button, Alert, Paper } from '@mui/material';

export default function DenunciaFormPage() {
  const [category, setCategory] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ category, location, description });
    alert('Denúncia enviada com sucesso!');
    setCategory('');
    setLocation('');
    setDescription('');
  };

  return (
    <Box sx={{ bgcolor: '#1e1e1e', color: 'white', py: 8, minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Paper
          sx={{
            bgcolor: '#1e1e1e',
            p: 4,
            borderRadius: 2,
            textAlign: 'center',
          }}
        >
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Formulário de Denúncia
          </Typography>

          <Typography variant="body1" sx={{ lineHeight: 1.6 }} gutterBottom>
            Sua denúncia é anônima e segura. Preencha os campos abaixo.
          </Typography>

          <Alert
            severity="info"
            sx={{
              mb: 3,
              bgcolor: '#1e1e1e',
              color: 'white',
              fontSize: '0.85rem',
              border: '1px solid #2196f3',
            }}
          >
            <Typography variant="body2">
              🛡️ Sua segurança é nossa prioridade<br />
              Esta plataforma não coleta dados pessoais, IP ou qualquer informação que possa identificá-lo.
            </Typography>
          </Alert>

          <form onSubmit={handleSubmit}>
            <FormControl fullWidth size="small" sx={{ mb: 3 }}>
              <InputLabel id="category-label" sx={{ color: 'white' }}>Categoria</InputLabel>
              <Select
                labelId="category-label"
                id="category-select"
                value={category}
                label="Categoria"
                onChange={handleCategoryChange}
                sx={{
                  '& .MuiSelect-select': { color: 'white' },
                  '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255, 255, 255, 0.23)' },
                  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#2196f3' },
                  '& .MuiSvgIcon-root': { color: 'white' },
                }}
              >
                <MenuItem value=""><em>Selecione</em></MenuItem>
                <MenuItem value="corrupcao">Corrupção</MenuItem>
                <MenuItem value="fraude">Fraude</MenuItem>
                <MenuItem value="assediomoral">Assédio Moral</MenuItem>
                <MenuItem value="outros">Outros</MenuItem>
              </Select>
            </FormControl>

            <TextField
              fullWidth
              size="small"
              label="Local da Ocorrência"
              variant="outlined"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Cidade, bairro, rua"
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

            <TextField
              fullWidth
              size="small"
              label="Descrição"
              variant="outlined"
              multiline
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Descreva com detalhes o ocorrido"
              sx={{
                mb: 3,
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
              size="medium"
              sx={{
                backgroundColor: '#2196f3',
                fontWeight: 'bold',
                py: 1.5,
                px: 4,
                mt: 1,
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  backgroundColor: '#1976d2',
                  transform: 'scale(1.05)',
                  boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.4)',
                },
              }}
            >
              Enviar Denúncia
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}
