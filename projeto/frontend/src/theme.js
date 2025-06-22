// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // Define o tema escuro como padrão para todo o app
    // Cores baseadas nas variáveis do seu protótipo:
    // --bg-primary: #121212;
    // --bg-secondary: #1e1e1e;
    // --bg-tertiary: #2d2d2d;
    // --accent-color: #2196f3;
    // --accent-hover: #1976d2;
    // --text-primary: #ffffff;
    // --text-secondary: #b3b3b3;

    primary: {
      main: '#2196f3', // --accent-color
      light: '#64b5f6', // Exemplo de tom claro, ajuste se precisar
      dark: '#1976d2', // --accent-hover
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#1E1E1E', // --bg-secondary (usado para Paper, AppBar, etc.)
      light: '#424242',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    background: {
      default: '#121212', // --bg-primary (fundo geral da aplicação)
      paper: '#1E1E1E',   // --bg-secondary (fundo de cards, formulários, etc.)
    },
    text: {
      primary: '#ffffff', // --text-primary
      secondary: '#b3b3b3', // --text-secondary
    },
    // Você pode adicionar outras cores personalizadas se necessário
    // Por exemplo, para --bg-tertiary:
    customColors: {
      tertiary: '#2d2d2d',
      success: '#4caf50', // Do protótipo para ícones de sucesso
      warning: '#ff9800', // Do protótipo para avisos
      danger: '#f44336',  // Do protótipo para erros
      golden: '#FFD700', // Cor do cadeado do protótipo
      skyBlue: '#00BFFF', // Cor do celular do protótipo
    },
  },
  typography: {
    // Define a fonte padrão para toda a aplicação
    fontFamily: [
      'Segoe UI',
      'Tahoma',
      'Geneva',
      'Verdana',
      'sans-serif',
    ].join(','),
    // Ajustes de tamanho e peso para variantes específicas do protótipo
    h4: {
      fontSize: '2rem', // Hero h2 no protótipo
      fontWeight: 'bold', // Ou 700
      marginBottom: '15px', // Definido diretamente para consistência com o protótipo
    },
    h6: {
      fontSize: '1.25rem', // Equivalente ao h3 dos cards
      fontWeight: 'bold',
      marginBottom: '10px', // Definido diretamente para consistência com o protótipo
    },
    body1: {
      fontSize: '1rem', // Padrão, mas ajuste se precisar
      lineHeight: 1.5, // Padrão para parágrafos
      color: '#b3b3b3', // Cor secundária para parágrafos como no protótipo
    },
    body2: {
      fontSize: '0.9rem', // Equivalente a 14.4px, quase 14px padrão do MU
      lineHeight: 1.5, // Padrão para descrições de cards
      color: '#b3b3b3', // Cor secundária para descrições de cards
    },
    // ... adicione outras variantes de tipografia se necessário
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Remove o uppercase padrão dos botões
          fontWeight: 'bold',
          padding: '12px 24px', // padding: 12px 24px do protótipo
          fontSize: '1rem',
          borderRadius: '4px', // border-radius: 4px do protótipo
        },
      },
    },
    MuiContainer: {
        styleOverrides: {
            root: {
                paddingLeft: '20px', // padding 20px do .container do protótipo
                paddingRight: '20px', // padding 20px do .container do protótipo
                // Ajuste para mobile caso o padding seja diferente no seu protótipo
                '@media (max-width: 768px)': {
                    paddingLeft: '20px',
                    paddingRight: '20px',
                },
            }
        }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#1E1E1E', // Default Paper background para ser bg-secondary
          borderRadius: '8px', // Default Paper border-radius
          boxShadow: 'none', // Remova a sombra padrão do Paper se não for desejada, ou ajuste
          // Se o protótipo não usa sombra padrão em todos os Papers, ajuste aqui.
          // Para os cards, vamos adicionar a sombra via sx no HomePage.
        },
      },
    },
    MuiGrid: {
        styleOverrides: {
            container: {
                gap: '20px', // Equivalente ao gap: 20px do protótipo para o grid de cards
            },
        },
    },
    // Adicione mais customizações de componentes aqui
  },
  spacing: 8, // Mantém a unidade de espaçamento padrão do Material-UI (8px)
});

export default theme;