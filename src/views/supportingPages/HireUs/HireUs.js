import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from 'common/Container';
import { Sejarah } from './components';

const HireUs = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: theme.palette.alternate.main,
          backgroundImage: `linear-gradient(120deg, ${theme.palette.background.paper} 0%, ${theme.palette.alternate.main} 100%)`,
        }}
      >
        <Container>
          <Sejarah />
        </Container>
      </Box>
    </Box>
  );
};

HireUs.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default HireUs;
