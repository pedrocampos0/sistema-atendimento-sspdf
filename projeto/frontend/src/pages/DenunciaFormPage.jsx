import * as React from 'react';
import { Box, Typography, Container, Select, MenuItem, FormControl, InputLabel, TextField, Button, Alert, Paper, Skeleton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useApi from "../hooks/api";
import { useEffect } from "react";

export default function DenunciaFormPage() {
    const { loading, get, post } = useApi();
    const [categoryOptions, setCategoryOptions] = React.useState([]);
    const [category, setCategory] = React.useState('');
    const [orgaoOptions, setOrgaoOptions] = React.useState([]);
    const [orgao, setOrgao] = React.useState(1);
    const [location, setLocation] = React.useState('');
    const [description, setDescription] = React.useState('');
    const theme = useTheme();

    const handleChange = (event, set) => {
        set(event.target.value);
    };

    const fetchInitialData = async () => {
        const [categoriesResponse, orgaosResponse] = await Promise.all([
            get('/ocorrencia'),
            get('denuncia/orgaos')
        ]);
        setCategoryOptions(categoriesResponse);
        setOrgaoOptions(orgaosResponse);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await post('/denuncia', {
            descricao: description,
            localizacao: location,
            ocorrencia_id: category,
            orgao_id: orgao
        });
        alert('Denúncia enviada com sucesso!');
        setCategory('');
        setLocation('');
        setDescription('');
    };

    useEffect(() => {
        fetchInitialData();
    }, []);

    const renderSkeletons = () => (
        <>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                <Skeleton width="60%" />
            </Typography>

            <Typography variant="body1" sx={{ lineHeight: 1.6 }} gutterBottom>
                <Skeleton />
            </Typography>

            <Skeleton variant="rectangular" height={80} sx={{ mb: 3, borderRadius: 1 }} />
            <Skeleton variant="rectangular" height={40} sx={{ mb: 3, borderRadius: 1 }} />
            <Skeleton variant="rectangular" height={40} sx={{ mb: 3, borderRadius: 1 }} />
            <Skeleton variant="rectangular" height={40} sx={{ mb: 3, borderRadius: 1 }} />
            <Skeleton variant="rectangular" height={100} sx={{ mb: 3, borderRadius: 1 }} />
            <Skeleton variant="rectangular" height={48} width={180} sx={{ borderRadius: 1, margin: '0 auto' }} />
        </>
    );

    const renderForm = () => (
        <>
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
                    bgcolor: 'rgba(25, 118, 210, 0.08)',
                    color: theme.palette.text.primary,
                    fontSize: '0.85rem',
                    borderLeft: `5px solid ${theme.palette.primary.main}`,
                }}
            >
                <Typography variant="body2" fontWeight="bold">
                    🛡️ Sua segurança é nossa prioridade
                </Typography>
                <Typography variant="caption">
                    Esta plataforma não coleta dados pessoais, IP ou qualquer informação que possa identificá-lo.
                </Typography>
            </Alert>

            <form onSubmit={handleSubmit}>
                <FormControl fullWidth size="small" sx={{ mb: 3 }}>
                    <InputLabel id="category-label" sx={{ color: theme.palette.text.primary }}>
                        Categoria
                    </InputLabel>
                    <Select
                        labelId="category-label"
                        id="category-select"
                        value={category}
                        label="Categoria"
                        onChange={(e) => handleChange(e, setCategory)}
                        sx={{
                            '& .MuiSelect-select': { color: theme.palette.text.primary },
                            '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255, 255, 255, 0.23)' },
                            '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.text.primary },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.primary.main },
                            '& .MuiSvgIcon-root': { color: theme.palette.text.primary },
                        }}
                    >
                        <MenuItem value="">
                            <em>Selecione</em>
                        </MenuItem>
                        {categoryOptions?.map((option) => (
                            <MenuItem key={option?.id} value={option?.id}>
                                {option?.nome}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth size="small" sx={{ mb: 3 }}>
                    <InputLabel id="orgao-label" sx={{ color: theme.palette.text.primary }}>
                        Orgão
                    </InputLabel>
                    <Select
                        labelId="orgao-label"
                        id="orgao-select"
                        value={orgao}
                        label="Orgão"
                        onChange={(e) => handleChange(e, setOrgao)}
                        sx={{
                            '& .MuiSelect-select': { color: theme.palette.text.primary },
                            '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255, 255, 255, 0.23)' },
                            '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.text.primary },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.primary.main },
                            '& .MuiSvgIcon-root': { color: theme.palette.text.primary },
                        }}
                    >
                        {orgaoOptions?.map((option) => (
                            <MenuItem key={option?.id} value={option?.id}>
                                {option?.nome}
                            </MenuItem>
                        ))}
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
                            '&:hover fieldset': { borderColor: theme.palette.text.primary },
                            '&.Mui-focused fieldset': { borderColor: theme.palette.primary.main },
                            '& textarea': { color: theme.palette.text.primary },
                        },
                        '& .MuiInputLabel-root': { color: theme.palette.text.primary },
                        '& .MuiInputLabel-root.Mui-focused': { color: theme.palette.primary.main },
                    }}
                />

                <Button
                    type="submit"
                    variant="contained"
                    size="medium"
                    sx={{
                        backgroundColor: theme.palette.primary.main,
                        fontWeight: 'bold',
                        py: 1.5,
                        px: 4,
                        mt: 1,
                        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                        '&:hover': {
                            backgroundColor: theme.palette.primary.dark,
                            transform: 'scale(1.05)',
                            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.4)',
                        },
                    }}
                >
                    Enviar Denúncia
                </Button>
            </form>
        </>
    );

    return (
        <Box
            sx={{
                bgcolor: theme.palette.background.default,
                color: theme.palette.text.primary,
                py: 4,
                minHeight: 'calc(100vh - 160px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflowY: 'auto',
            }}
        >
            <Container maxWidth="lg">
                <Paper
                    elevation={4}
                    sx={{
                        bgcolor: theme.palette.background.paper,
                        p: { xs: 2, sm: 4 },
                        borderRadius: 2,
                        textAlign: 'center',
                    }}
                >
                    {loading ? renderSkeletons() : renderForm()}
                </Paper>
            </Container>
        </Box>
    );
}