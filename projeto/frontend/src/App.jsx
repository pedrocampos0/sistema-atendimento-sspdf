import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from './ProTip';
import Copyright from './Copyright';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <Container maxWidth="false" disableGutters>
      <Box sx={{ my: 0 }}>
        <HomePage />
      </Box>
    </Container>
  );
}
