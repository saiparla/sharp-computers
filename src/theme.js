import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00A3E0',
      dark: '#0056b3',
    },
    secondary: {
      main: '#0056b3',
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
    info: {
      main: '#e3f2fd', // accent-color from css
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '5px',
          padding: '12px 28px',
          fontWeight: 500,
        },
        containedPrimary: {
          boxShadow: '0 4px 6px rgba(0, 163, 224, 0.2)',
          '&:hover': {
            backgroundColor: '#0056b3',
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 8px rgba(0, 163, 224, 0.3)',
          },
          transition: 'all 0.3s ease',
        },
        outlinedPrimary: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
            backgroundColor: '#00A3E0',
            color: '#ffffff',
          },
          transition: 'all 0.3s ease',
        }
      },
    },
  },
});

export default theme;
