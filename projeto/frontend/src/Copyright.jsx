import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Copyright() {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: 'text.secondary',
        mt: 8, // Added margin top for better spacing
        mb: 4, // Added margin bottom for better spacing
      }}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        SADA
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}