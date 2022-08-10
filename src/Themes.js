import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#ffffff',
        darker: '#053e85',
      },
      secondary: {
        main: '#ff0303',
        darker: '#053e85',
      },
      neutral: {
        main: '#64748B',
        contrastText: '#F0F0',
      },
    },
  });