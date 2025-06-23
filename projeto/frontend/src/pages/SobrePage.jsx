import * as React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function SobrePage() {
  const theme = useTheme(); 

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
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Paper
          sx={{
            bgcolor: theme.palette.background.paper, 
            p: 4,
            borderRadius: 2,
            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.4)',
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Sobre o SADA
          </Typography>

          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
            O <strong>Sistema de Atendimento a Denúncias Anônimas (SADA)</strong> é uma plataforma desenvolvida
            para facilitar o registro seguro e anônimo de denúncias pela população. Nosso principal
            objetivo é criar um canal confiável para que cidadãos possam reportar irregularidades,
            crimes e outras situações que demandem a atenção das autoridades, sem medo de retaliação
            ou exposição de sua identidade.
          </Typography>

          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
            Acreditamos que a participação da comunidade é fundamental para a construção de uma
            sociedade mais justa e segura. Por isso, o SADA foi projetado com foco total na
            privacidade do denunciante, utilizando tecnologias que impedem a coleta de dados
            pessoais e garantem o anonimato completo em todas as etapas do processo.
          </Typography>

          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
            Cada denúncia registrada gera um número de protocolo único, permitindo que o denunciante
            acompanhe o andamento da sua manifestação de forma sigilosa. As informações são
            direcionadas automaticamente aos órgãos competentes, agilizando a análise e a tomada de
            providências.
          </Typography>

          <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
            O SADA é uma iniciativa da Secretaria de Segurança Pública do Distrito Federal,
            comprometida com a transparência, a eficiência e a proteção dos direitos dos cidadãos.
            Sua denúncia é um passo importante para a segurança de todos.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}