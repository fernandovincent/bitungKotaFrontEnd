import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from 'common/Container';
import { Hero } from './components';

const Advertisement = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
        <Container position="relative" zIndex={2}>
          <Hero />
        </Container>
      </Box>
    </Box>
  );
};

Advertisement.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Advertisement;
