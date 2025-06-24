import * as React from 'react';
import { Box, Typography, Container, Paper, Button, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate, useParams } from 'react-router-dom';

export default function DetalhesDenuncia() { // Renomeado de AgentViewComplaintPage para DetalhesDenuncia
  const theme = useTheme();
  const navigate = useNavigate();
  const { id } = useParams(); // Pega o ID da denúncia da URL

  // IMPORTANTE: Este mock de denúncia AGORA DEVE SER BUSCADO DA SUA LISTA allComplaints
  // Em uma aplicação real, você buscaria os detalhes da denúncia do backend usando o 'id'
  // que você pegou do useParams().
  // Para que o mock funcione, vamos recriar a lista completa de denúncias aqui temporariamente
  // para que o find() funcione.
  const allComplaintsMock = [
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

  const denuncia = allComplaintsMock.find(c => c.id === id); // Busca a denúncia pelo ID

  if (!denuncia) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Paper sx={{ p: 3, textAlign: 'center' }}>
          <Typography variant="h6" color="error">Denúncia não encontrada.</Typography>
          <Button variant="contained" onClick={() => navigate('/agent-dashboard')} sx={{ mt: 2 }}>
            Voltar para Denúncias
          </Button>
        </Paper>
      </Container>
    );
  }

  const handleVoltar = () => {
    navigate('/agent-dashboard'); // Volta especificamente para o dashboard do agente
  };

  return (
    <Box
      sx={{
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
        py: 6,
        minHeight: 'calc(100vh - 100px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    >
      <Container maxWidth="md">
        <Paper
          sx={{
            p: 4,
            borderRadius: 2,
            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.4)',
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.01)',
              boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.5)',
            },
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Detalhes da Denúncia
          </Typography>

          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            Protocolo: <strong>{denuncia.id}</strong>
          </Typography>

          <Typography variant="body1" gutterBottom>
            <strong>Status:</strong> {denuncia.status}
          </Typography>

          <Typography variant="body1" gutterBottom>
            <strong>Categoria:</strong> {denuncia.categoria}
          </Typography>

          <Typography variant="body1" gutterBottom>
            <strong>Data de envio:</strong> {new Date(denuncia.dataEnvio).toLocaleString()}
          </Typography>

          {denuncia.localizacao && ( // Renderiza apenas se houver localização
            <Typography variant="body1" gutterBottom>
              <strong>Localização:</strong> {denuncia.localizacao}
            </Typography>
          )}

          <Box mt={2}>
            <Typography variant="body1" gutterBottom>
              <strong>Descrição:</strong>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {denuncia.descricao}
            </Typography>
          </Box>

          {denuncia.anexos && denuncia.anexos.length > 0 && ( // Renderiza apenas se houver anexos
            <Box mt={4}>
              <Typography variant="body1" gutterBottom>
                <strong>Anexos:</strong>
              </Typography>
              <Grid container spacing={2}>
                {denuncia.anexos.map((anexo, index) => (
                  <Grid item xs={6} sm={4} key={index}>
                    {anexo.url.endsWith('.pdf') ? (
                      <a href={anexo.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: theme.palette.primary.main }}>
                        <Paper
                          variant="outlined"
                          sx={{
                            p: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 1,
                            cursor: 'pointer',
                            '&:hover': { bgcolor: theme.palette.action.hover },
                          }}
                        >
                          <Typography variant="h5">📄</Typography> {/* Ícone de PDF */}
                          <Typography variant="caption" sx={{ wordBreak: 'break-all' }}>
                            {anexo.nome || `Anexo ${index + 1}`}
                          </Typography>
                        </Paper>
                      </a>
                    ) : (
                      <Paper
                        variant="outlined"
                        sx={{
                          p: 1,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: 1,
                          cursor: 'pointer',
                          '&:hover': { bgcolor: theme.palette.action.hover },
                        }}
                        onClick={() => window.open(anexo.url, '_blank')} // Abre imagem em nova aba
                      >
                        <img
                          src={anexo.url}
                          alt={anexo.nome}
                          style={{ width: '100%', maxWidth: '100px', maxHeight: '100px', objectFit: 'cover', borderRadius: 8 }}
                        />
                        <Typography variant="caption" sx={{ wordBreak: 'break-all' }}>
                          {anexo.nome || `Anexo ${index + 1}`}
                        </Typography>
                      </Paper>
                    )}
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          {denuncia.historico && denuncia.historico.length > 0 && (
            <Box my={3}>
              <Typography variant="subtitle2" fontWeight="bold" gutterBottom>Histórico:</Typography>
              <Box sx={{ border: `1px solid ${theme.palette.divider}`, borderRadius: 1, p: 2 }}>
                {denuncia.historico.map((item, i) => (
                  <Typography key={i} variant="body2" sx={{ mb: 0.5 }}>
                    <Typography component="span" fontWeight="bold">{new Date(item.data).toLocaleDateString()}:</Typography> {item.evento} (Por: {item.responsavel})
                  </Typography>
                ))}
              </Box>
            </Box>
          )}

          <Box mt={4} textAlign="right">
            <Button variant="outlined" onClick={handleVoltar}>
              Voltar
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}