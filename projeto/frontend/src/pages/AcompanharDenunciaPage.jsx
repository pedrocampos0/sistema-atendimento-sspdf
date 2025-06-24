import * as React from 'react';
import {
    Box, Typography, Container, TextField, Button, Paper, Skeleton,
    Stack, Alert, Chip, IconButton, Divider, Grid
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import useApi from "../hooks/api";
import { useAlert } from "../Components/Context/AlertContext";

const ComplaintSkeleton = () => (
    <Paper sx={{ p: 4, borderRadius: 2, width: '100%', maxWidth: '900px', mx: 'auto' }}>
        <Stack spacing={3}>
            <Skeleton variant="text" sx={{ fontSize: '2rem' }} width="60%" />
            <Box sx={{ display: 'flex', gap: 3 }}>
                <Skeleton variant="rectangular" height={50} width="33%" />
                <Skeleton variant="rectangular" height={50} width="33%" />
                <Skeleton variant="rectangular" height={50} width="33%" />
            </Box>
            <Box sx={{ display: 'flex', gap: 3 }}>
                <Skeleton variant="rectangular" height={50} width="33%" />
                <Skeleton variant="rectangular" height={50} width="33%" />
                <Skeleton variant="rectangular" height={50} width="33%" />
            </Box>
            <Skeleton variant="rectangular" height={180} />
        </Stack>
    </Paper>
);

const ComplaintDetails = ({ denuncia, onBack }) => {
    const theme = useTheme();
    const statusColors = {
        'Pendente': 'warning',
        'Em Andamento': 'info',
        'Concluída': 'success',
        'Cancelada': 'error',
    };

    return (
        <Paper sx={{ p: { xs: 2, sm: 4 }, borderRadius: 2, width: '100%', maxWidth: '1000px', mx: 'auto' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <IconButton onClick={onBack} sx={{ mr: 1 }}>
                    <ArrowBackIcon />
                </IconButton>
                <Typography variant="h5" fontWeight="bold">
                    Detalhes da Denúncia
                </Typography>
            </Box>
            <Divider sx={{ mb: 3 }} />
            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                    <Typography variant="subtitle2" color="text.secondary" fontWeight="bold">Protocolo</Typography>
                    <Typography variant="h6">{denuncia.protocolo_codigo}</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="subtitle2" color="text.secondary" fontWeight="bold">Status</Typography>
                    <Chip label={denuncia.status_nome} color={statusColors[denuncia.status_nome] || 'default'} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="subtitle2" color="text.secondary" fontWeight="bold">Tipo de Ocorrência</Typography>
                    <Typography>{denuncia.ocorrencia_nome}</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="subtitle2" color="text.secondary" fontWeight="bold">Órgão Responsável</Typography>
                    <Typography>{denuncia.orgao_nome}</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="subtitle2" color="text.secondary" fontWeight="bold">Data da Ocorrência</Typography>
                    <Typography>{new Date(denuncia.data_hora).toLocaleString('pt-BR')}</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="subtitle2" color="text.secondary" fontWeight="bold">Localização</Typography>
                    <Typography>{denuncia.localizacao}</Typography>
                </Grid>
            </Grid>

            <Box sx={{ mt: 5 }}>
                <Typography variant="subtitle2" color="text.secondary" fontWeight="bold" sx={{ mb: 1 }}>Descrição</Typography>
                <TextField
                    multiline
                    value={denuncia.descricao}
                    variant="outlined"
                    fullWidth
                    InputProps={{ readOnly: true }}
                    sx={{ width: '100%' }}
                />
            </Box>
        </Paper>
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
        setError(null);
        try {
            alert('Buscando denúncia...');
            const response = await get(`denuncia/procolo?protocolo=${protocolNumber}`);
            if (response && response.length > 0) {
                setDenuncia(response[0]);
                alert('Denúncia encontrada com sucesso!', { type: 'success' });
            } else {
                const errorMessage = 'Nenhuma denúncia encontrada com este protocolo. Verifique o número e tente novamente.';
                setError(errorMessage);
                alert(errorMessage, { type: 'error' });
            }
        } catch (err) {
            const errorMessage = 'Ocorreu um erro ao se comunicar com o servidor. Por favor, tente novamente mais tarde.';
            setError(errorMessage);
            alert(errorMessage, { type: 'error' });
        }
    };

    const handleBackToSearch = () => {
        setDenuncia(null);
        setError(null);
        setProtocolNumber('');
    };

    const renderContent = () => {
        if (loading && !denuncia) return <ComplaintSkeleton />;
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
                    {error && (
                        <Alert severity="error" sx={{ mb: 3, textAlign: 'left' }}>
                            {error}
                        </Alert>
                    )}
                    <form onSubmit={handleTrackComplaint}>
                        <TextField
                            fullWidth
                            label="Número de Protocolo"
                            variant="outlined"
                            value={protocolNumber}
                            onChange={(e) => setProtocolNumber(e.target.value)}
                            placeholder="Ex: DEN-X-YYYYYY"
                            sx={{ mb: 3 }}
                            error={!!error}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            disabled={loading}
                            fullWidth
                            sx={{
                                fontWeight: 'bold',
                                py: 1.5,
                                borderRadius: 2,
                                textTransform: 'none',
                            }}
                        >
                            Verificar
                        </Button>
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
