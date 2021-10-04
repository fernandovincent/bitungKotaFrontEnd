/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Box marginBottom={4} data-aos={isMd ? 'fade-right' : 'fade-up'}>
        <Typography
          variant="h2"
          color="textPrimary"
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Visi dan Misi
          <br />
          Pemerintahan
          <br />
          Kota Bitung
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
