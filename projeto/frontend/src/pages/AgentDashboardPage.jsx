import * as React from 'react';
import { useState, useEffect, useMemo } from 'react';
import {
  Box, Typography, Container, Paper, Grid, Button, TextField, MenuItem,
  CircularProgress, IconButton, Card, CardContent, CardHeader, Divider
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAlert } from "../Components/Context/AlertContext";
import useApi from "../hooks/api";

export default function AgentDashboardPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  const alert = useAlert();
  const { loading, get } = useApi();

  const [complaints, setComplaints] = useState([]);
  const [statusFilter, setStatusFilter] = useState('');
  const [search, setSearch] = useState('');
  const [selectedComplaint, setSelectedComplaint] = useState(null);

  const fetchComplaints = async () => {
    try {
      const response = await get('/denuncia');
      if (response && Array.isArray(response)) {
        setComplaints(response);
      } else {
        setComplaints([]);
      }
    } catch (error) {
      alert('Erro ao buscar as denúncias. Tente novamente.', { type: 'error' });
      console.error("API Error:", error);
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  const filteredComplaints = useMemo(() => {
    return complaints.filter((c) => {
      const matchStatus = statusFilter ? c.status_nome === statusFilter : true;
      const matchSearch = search
          ? (c.protocolo_codigo.toLowerCase().includes(search.toLowerCase()) || c.ocorrencia_nome.toLowerCase().includes(search.toLowerCase()))
          : true;
      return matchStatus && matchSearch;
    });
  }, [complaints, statusFilter, search]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Concluída': return 'success.main';
      case 'Pendente': return 'warning.main';
      case 'Cancelada': return 'error.main';
      case 'Em Andamento': return 'info.main';
      default: return 'text.secondary';
    }
  };

  const handleViewDetails = (complaint) => {
    setSelectedComplaint(complaint);
  };

  const handleBackToList = () => {
    setSelectedComplaint(null);
  };

  if (selectedComplaint) {
    return (
        <Box sx={{ bgcolor: theme.palette.background.default, color: theme.palette.text.primary, py: 6, minHeight: 'calc(100vh - 100px)' }}>
          <Container maxWidth="lg">
            <Button
                startIcon={<ArrowBackIcon />}
                onClick={handleBackToList}
                sx={{ mb: 3 }}
            >
              Voltar para a Lista
            </Button>
            <Card>
              <CardHeader
                  title={`Detalhes da Denúncia: ${selectedComplaint.protocolo_codigo}`}
                  titleTypographyProps={{ variant: 'h5', fontWeight: 'bold' }}
                  sx={{ bgcolor: theme.palette.primary.main, color: theme.palette.primary.contrastText }}
              />
              <CardContent>
                <Grid container spacing={3} sx={{ mt: 1 }}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>Informações Gerais</Typography>
                    <Divider sx={{ mb: 2 }} />
                    <Typography variant="body1"><strong>Ocorrência:</strong> {selectedComplaint.ocorrencia_nome}</Typography>
                    <Typography variant="body1"><strong>Status:</strong> <Box component="span" sx={{ color: getStatusColor(selectedComplaint.status_nome), fontWeight: 'bold' }}>{selectedComplaint.status_nome}</Box></Typography>
                    <Typography variant="body1"><strong>Data e Hora:</strong> {new Date(selectedComplaint.data_hora).toLocaleString('pt-BR')}</Typography>
                    <Typography variant="body1"><strong>Órgão Responsável:</strong> {selectedComplaint.orgao_nome}</Typography>
                    <Typography variant="body1"><strong>Agente Designado:</strong> {selectedComplaint.agente_nome}</Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>Localização e Descrição</Typography>
                    <Divider sx={{ mb: 2 }} />
                    <Typography variant="body1"><strong>Localização:</strong> {selectedComplaint.localizacao}</Typography>
                    <Typography variant="body1" sx={{ mt: 2 }}><strong>Descrição:</strong></Typography>
                    <Paper variant="outlined" sx={{ p: 2, mt: 1, maxHeight: 200, overflow: 'auto', backgroundColor: theme.palette.background.paper }}>
                      <Typography variant="body2">{selectedComplaint.descricao}</Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Container>
        </Box>
    );
  }

  return (
      <Box sx={{ bgcolor: theme.palette.background.default, color: theme.palette.text.primary, py: 6, minHeight: 'calc(100vh - 100px)' }}>
        <Container maxWidth="lg">
          <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mb: 3 }}>
            Olá, Agente!
          </Typography>

          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Minhas Denúncias
          </Typography>

          <Paper sx={{ p: 3, mb: 4 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                    sx={{
                      minWidth: "200px",
                    }}
                    label="Buscar por Protocolo ou Ocorrência"
                    fullWidth
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <TextField
                    sx={{
                      minWidth: "160px",
                    }}
                    select
                    label="Filtrar por Status"
                    fullWidth
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <MenuItem value="">Todos</MenuItem>
                  <MenuItem value="Pendente">Pendente</MenuItem>
                  <MenuItem value="Em Andamento">Em Andamento</MenuItem>
                  <MenuItem value="Concluída">Concluída</MenuItem>
                  <MenuItem value="Cancelada">Cancelada</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="outlined" startIcon={<HomeIcon />} onClick={() => navigate('/')}>
                  Voltar ao Início
                </Button>
              </Grid>
            </Grid>
          </Paper>

          <Paper sx={{ p: 3 }}>
            {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
                  <CircularProgress />
                </Box>
            ) : filteredComplaints.length === 0 ? (
                <Typography variant="body1">Nenhuma denúncia encontrada.</Typography>
            ) : (
                filteredComplaints.map((complaint) => (
                    <Box
                        key={complaint.protocolo_codigo}
                        sx={{
                          display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1.5, pr: 1,
                          borderBottom: `1px solid ${theme.palette.divider}`, '&:last-child': { borderBottom: 'none' },
                          flexWrap: 'wrap', gap: 1,
                        }}
                    >
                      <Typography variant="body2" sx={{ fontWeight: 'bold', minWidth: '150px' }}>
                        {complaint.protocolo_codigo}
                      </Typography>
                      <Typography variant="body2" sx={{ flexGrow: 1, mx: 2, minWidth: '150px' }}>
                        {complaint.ocorrencia_nome}
                      </Typography>
                      <Typography variant="body2" color={getStatusColor(complaint.status_nome)} sx={{ fontWeight: 'bold', minWidth: '100px', textAlign: 'center' }}>
                        {complaint.status_nome}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ minWidth: '100px', textAlign: 'right' }}>
                        {new Date(complaint.data_hora).toLocaleDateString('pt-BR')}
                      </Typography>
                      <Button
                          variant="outlined" size="small"
                          onClick={() => handleViewDetails(complaint)}
                          sx={{ ml: 2, minWidth: '120px' }}
                      >
                        Ver Detalhes
                      </Button>
                    </Box>
                ))
            )}
          </Paper>
        </Container>
      </Box>
  );
}