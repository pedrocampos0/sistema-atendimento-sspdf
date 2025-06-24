import * as React from 'react';
import { useState } from 'react'; // Importe useState
import { Box, Typography, Container, Paper, Grid, Button, TextField, MenuItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom'; // Importe useNavigate

// IMPORTANTE: Manter o DetalhesDenuncia.jsx como um arquivo separado
// Certifique-se de que DetalhesDenuncia.jsx está em src/pages/DetalhesDenuncia.jsx
// import DetalhesDenuncia from './DetalhesDenuncia'; // Não precisamos mais importar aqui, pois é uma rota separada

export default function AgentDashboardPage() {
  const theme = useTheme();
  const navigate = useNavigate();

  // Mock do nome do agente (poderia vir de um contexto de autenticação ou prop)
  const agentName = "Gustavo Nunes"; // Exemplo: Pegaria isso do backend ou do estado global de autenticação

  // Estados para filtros e busca
  const [statusFilter, setStatusFilter] = useState('');
  const [search, setSearch] = useState('');
  // const [selectedComplaint, setSelectedComplaint] = useState(null); // Não precisamos mais deste estado aqui se for para uma rota separada

  // Mock de dados de denúncias de exemplo, com todos os campos necessários para os detalhes
  const allComplaints = [
    {
      id: 'PROT-001-2025', categoria: 'Corrupção', status: 'Em Análise', data: '2025-06-20',
      titulo: 'Fraude em Licitação Pública',
      descricao: 'Denúncia detalhada sobre uma suposta fraude envolvendo o processo licitatório número XZ-2025/001 na Secretaria de Obras. Envolve superfaturamento e direcionamento de propostas. Testemunhas mencionam irregularidades desde a fase de edital.',
      dataEnvio: '2025-06-20T10:30:00Z',
      localizacao: 'Praça Central, Setor Administrativo, Bloco C, 3º Andar, Brasília - DF',
      anexos: [
        { url: 'https://via.placeholder.com/200x150?text=Evidencia_1.jpg', nome: 'Evidencia_1.jpg' },
        { url: 'https://via.placeholder.com/200x150?text=Documento_Anexo.pdf', nome: 'Documento_Anexo.pdf' },
      ],
      agenteResponsavel: 'Agente Silva',
      historico: [
        { data: '2025-06-20', evento: 'Denúncia registrada', responsavel: 'Sistema' },
        { data: '2025-06-21', evento: 'Denúncia atribuída ao Agente Silva', responsavel: 'Supervisor' },
        { data: '2025-06-22', evento: 'Primeira análise iniciada', responsavel: 'Agente Silva' },
      ]
    },
    {
      id: 'PROT-002-2025', categoria: 'Fraude', status: 'Novo', data: '2025-06-22',
      titulo: 'Desvio de Verbas na Educação',
      descricao: 'Suspeita de desvio de verbas destinadas à construção de novas escolas. Relatos indicam que os recursos foram realocados para projetos sem transparência.',
      dataEnvio: '2025-06-22T14:00:00Z',
      localizacao: 'Departamento de Orçamento, Secretaria de Educação, Brasília - DF',
      anexos: [],
      agenteResponsavel: 'Agente Oliveira',
      historico: [
        { data: '2025-06-22', evento: 'Denúncia registrada', responsavel: 'Sistema' },
      ]
    },
    {
      id: 'PROT-003-2025', categoria: 'Assédio Moral', status: 'Concluído', data: '2025-06-18',
      titulo: 'Assédio no Ambiente de Trabalho',
      descricao: 'Denúncia de assédio moral contra funcionário em repartição pública. Comportamentos inadequados e pressão psicológica constante por parte de um superior.',
      dataEnvio: '2025-06-18T09:15:00Z',
      localizacao: 'Secretaria de Saúde, Setor de Recursos Humanos, Brasília - DF',
      anexos: [{ url: 'https://via.placeholder.com/200x150?text=Audio_Gravado.mp3', nome: 'Audio_Gravado.mp3' }],
      agenteResponsavel: 'Agente Costa',
      historico: [
        { data: '2025-06-18', evento: 'Denúncia registrada', responsavel: 'Sistema' },
        { data: '2025-06-19', evento: 'Processo de apuração iniciado', responsavel: 'Agente Costa' },
        { data: '2025-06-25', evento: 'Denúncia concluída com providências', responsavel: 'Agente Costa' },
      ]
    },
    { id: 'PROT-004-2025', categoria: 'Corrupção', status: 'Em Análise', data: '2025-06-21', titulo: 'Propina em Contratos', descricao: 'Informações sobre pagamento de propina para agilizar contratos com empresas terceirizadas.', dataEnvio: '2025-06-21T11:45:00Z', localizacao: 'Rua das Palmeiras, 123, Bairro Verde, Cidade-UF', anexos: [], agenteResponsavel: 'Agente Silva', historico: [{ data: '2025-06-21', evento: 'Denúncia registrada', responsavel: 'Sistema' }] },
    { id: 'PROT-005-2025', categoria: 'Outros', status: 'Novo', data: '2025-06-23', titulo: 'Irregularidade em Concurso', descricao: 'Denúncia de favorecimento em concurso público para cargos de alto escalão.', dataEnvio: '2025-06-23T16:20:00Z', anexos: [], agenteResponsavel: 'Agente Oliveira', historico: [{ data: '2025-06-23', evento: 'Denúncia registrada', responsavel: 'Sistema' }] },
  ];

  const filteredComplaints = allComplaints.filter((c) => {
    const matchStatus = statusFilter ? c.status === statusFilter : true;
    const matchSearch = search ? (c.id.includes(search.toUpperCase()) || c.titulo.toLowerCase().includes(search.toLowerCase())) : true;
    return matchStatus && matchSearch;
  });

  return (
    <Box
      sx={{
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
        py: 6,
        minHeight: 'calc(100vh - 100px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg">
        {/* Saudação ao Agente */}
        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mb: 3 }}>
          Olá, {agentName}!
        </Typography>

        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Minhas Denúncias
        </Typography>

        <Paper sx={{ p: 3, mb: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Buscar por Protocolo ou Título"
                fullWidth
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                select
                label="Filtrar por Status"
                fullWidth
                sx={{ minWidth: 220 }}
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <MenuItem value="">Todos</MenuItem>
                <MenuItem value="Novo">Novo</MenuItem>
                <MenuItem value="Em Análise">Em Análise</MenuItem>
                <MenuItem value="Concluído">Concluído</MenuItem>
              </TextField>
            </Grid>
          </Grid>
        </Paper>

        <Paper sx={{ p: 3 }}>
          {filteredComplaints.length === 0 ? (
            <Typography variant="body1">Nenhuma denúncia encontrada com os filtros aplicados.</Typography>
          ) : (
            filteredComplaints.map((complaint) => (
              <Box
                key={complaint.id}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  py: 1,
                  pr: 1,
                  borderBottom: `1px solid ${theme.palette.divider}`,
                  '&:last-child': { borderBottom: 'none' },
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 'bold', minWidth: '120px' }}>
                  {complaint.id}
                </Typography>
                <Typography variant="body2" sx={{ flexGrow: 1, mx: 1 }}>{complaint.categoria}</Typography>
                <Typography
                  variant="body2"
                  color={
                    complaint.status === 'Novo'
                      ? 'success.main'
                      : complaint.status === 'Em Análise'
                      ? 'warning.main'
                      : 'text.secondary'
                  }
                  sx={{ minWidth: '100px', textAlign: 'center' }}
                >
                  {complaint.status}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ minWidth: '100px', textAlign: 'right' }}>
                  {complaint.data}
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => navigate(`/agent/denuncias/${complaint.id}`)}
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