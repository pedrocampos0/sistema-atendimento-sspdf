import * as React from 'react';
import { Box, Typography, Container, TextField, Button, Paper, Skeleton, Stack, Alert, Chip, IconButton, Divider, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import useApi from "../hooks/api";
import {useAlert} from "../Components/Context/AlertContext";

const ComplaintSkeleton = () => (
    <Paper sx={{ p: 4, borderRadius: 2, width: '100%', maxWidth: '1200px' }}>
        <Stack spacing={2}>
            <Skeleton variant="text" sx={{ fontSize: '2rem' }} width="60%" />
            <Skeleton variant="rectangular" height={40} />
            <Skeleton variant="rectangular" height={40} />
            <Skeleton variant="rectangular" height={40} />
            <Skeleton variant="rectangular" height={40} />
        </Stack>
    </Paper>
);

const ComplaintDetails = ({ denuncia, onBack }) => {
    const theme = useTheme();
    const statusColors = {
        'Pendente': 'warning',
        'Em Análise': 'info',
        'Resolvido': 'success',
        'Arquivado': 'default',
    };

    return (
        <Container maxWidth={false} sx={{ px: { xs: 2, md: 6 } }}>
            <Paper sx={{ p: { xs: 2, sm: 4 }, borderRadius: 2, textAlign: 'center', maxWidth: '1400px', mx: 'auto' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <IconButton onClick={onBack} sx={{ mr: 1 }}>
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography variant="h5" fontWeight="bold">
                        Detalhes da Denúncia
                    </Typography>
                </Box>
                <Divider sx={{ mb: 3 }} />
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="subtitle2" color="text.secondary" fontWeight="bold">Protocolo</Typography>
                        <Typography variant="h6">{denuncia.protocolo_codigo}</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="subtitle2" color="text.secondary" fontWeight="bold">Status</Typography>
                        <Chip label={denuncia.status_nome} color={statusColors[denuncia.status_nome] || 'default'} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="subtitle2" color="text.secondary" fontWeight="bold">Tipo de Ocorrência</Typography>
                        <Typography>{denuncia.ocorrencia_nome}</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="subtitle2" color="text.secondary" fontWeight="bold">Órgão Responsável</Typography>
                        <Typography>{denuncia.orgao_nome}</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="subtitle2" color="text.secondary" fontWeight="bold">Data da Ocorrência</Typography>
                        <Typography>{new Date(denuncia.data_hora).toLocaleString('pt-BR')}</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="subtitle2" color="text.secondary" fontWeight="bold">Localização</Typography>
                        <Typography>{denuncia.localizacao}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle2" color="text.secondary" fontWeight="bold">Descrição</Typography>
                        <Typography>{denuncia.descricao}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default function AcompanharDenunciaPage() {
    const alert = useAlert();
    const { loading, get } = useApi();
    const [protocolNumber, setProtocolNumber] = React.useState('');
    const [denuncia, setDenuncia] = React.useState(null);
    const [error, setError] = React.useState(null);
    const theme = useTheme();
    const handleTrackComplaint = async (event) => {
        event.preventDefault();
        if (!protocolNumber) return;
        setDenuncia(null);
        setError(null);
        try {
            alert('Buscando denúncia...');
            const response = await get(`denuncia/procolo?protocolo=${protocolNumber}`);
            if (response && response.length > 0) {
                setDenuncia(response[0]);
                alert('Denúncia encontrada com sucesso!', {type: 'success'});
            } else {
                setError('Nenhuma denúncia encontrada com este protocolo. Verifique o número e tente novamente.');
                alert('Nenhuma denúncia encontrada com este protocolo. Verifique o número e tente novamente.', {type: 'error'});
            }
        } catch (err) {
            console.error("Erro ao buscar denúncia:", err);
            setError('Ocorreu um erro ao se comunicar com o servidor. Por favor, tente novamente mais tarde.');
            alert('Ocorreu um erro ao se comunicar com o servidor. Por favor, tente novamente mais tarde.', {type: 'error'});
        }
    };

    const handleBackToSearch = () => {
        setDenuncia(null);
        setError(null);
        setProtocolNumber('');
    };

    const renderContent = () => {
        if (loading) return <ComplaintSkeleton />;
        if (error) {
            return (
                <>
                    <Container maxWidth="lg">
                        <Alert severity="error" action={
                            <Button color="inherit" size="small" onClick={handleBackToSearch}>
                                TENTAR NOVAMENTE
                            </Button>
                        }>
                            {error}
                        </Alert>
                    </Container>
                </>

            );
        }
        if (denuncia) return <ComplaintDetails denuncia={denuncia} onBack={handleBackToSearch} />;
        return (
            <Container maxWidth="sm">
                <Paper sx={{ bgcolor: theme.palette.background.paper, p: 4, borderRadius: 2, textAlign: 'center' }}>
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
                            placeholder="Ex: DEN-X-YYYYYY"
                            sx={{ mb: 3 }}
                        />
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Button
                                type="submit"
                                variant="contained"
                                disabled={loading}
                                sx={{
                                    fontWeight: 'bold',
                                    px: 4,
                                    py: 1.5,
                                    borderRadius: 2,
                                    textTransform: 'none',
                                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                    '&:hover': {
                                        transform: 'scale(1.03)',
                                        boxShadow: theme.shadows[6],
                                    },
                                }}
                            >
                                Verificar
                            </Button>
                        </Box>
                    </form>
                </Paper>
            </Container>
        );
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
            {renderContent()}
        </Box>
    );
}
