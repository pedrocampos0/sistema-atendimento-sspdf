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
      main: '#2196f3',
      light: '#64b5f6',
      dark: '#1976d2',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#1E1E1E',
      light: '#424242',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b3b3b3',
    },
    customColors: {
      tertiary: '#2d2d2d',
      success: '#4caf50',
      warning: '#ff9800',
      danger: '#f44336',
      golden: '#FFD700',
      skyBlue: '#00BFFF',
    },
  },
  typography: {

    fontFamily: [
      'Segoe UI',
      'Tahoma',
      'Geneva',
      'Verdana',
      'sans-serif',
    ].join(','),

    h4: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '15px',
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
      color: '#b3b3b3',
    },
    body2: {
      fontSize: '0.9rem',
      lineHeight: 1.5,
      color: '#b3b3b3',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 'bold',
          padding: '12px 24px',
          fontSize: '1rem',
          borderRadius: '4px',
        },
      },
    },
    MuiContainer: {
        styleOverrides: {
            root: {
                paddingLeft: '20px',
                paddingRight: '20px',
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
          backgroundColor: '#1E1E1E',
          borderRadius: '8px',
          boxShadow: 'none',
        },
      },
    },
    MuiGrid: {
        styleOverrides: {
            container: {
                gap: '20px',
            },
        },
    },
  },
  spacing: 8,
});

export default theme;