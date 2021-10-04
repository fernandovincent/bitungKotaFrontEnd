import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const Headline = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        '&::after': {
          position: 'absolute',
          content: '""',
          width: '30%',
          zIndex: 1,
          top: 0,
          left: 0,
          height: '100%',
          backgroundSize: '18px 18px',
          backgroundImage: `radial-gradient(${theme.palette.primary.dark} 20%, transparent 20%)`,
          opacity: 0.2,
        },
      }}
    >
      <Box position="relative" zIndex={2}>
        <Box marginBottom={2}>
          <Typography
            variant="h2"
            align={'center'}
            sx={{
              fontWeight: 700,
            }}
            data-aos={'fade-right'}
          >
            Arti Lambang Kota Bitung
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Headline;
