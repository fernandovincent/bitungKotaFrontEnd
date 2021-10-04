import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Container from 'common/Container';
import CityIllustration from 'svg/illustrations/City';
import { Visi, Misi, Hero } from './components';

const Travel = () => {
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Box
        position={'relative'}
        minHeight={450}
        overflow={'hidden'}
        borderBottom={`10px solid ${theme.palette.primary.dark}`}
      >
        <Container position={'relative'} zIndex={2}>
          <Hero />
        </Container>
        <Box
          width={'100%'}
          height={'auto'}
          maxWidth={{ xs: '100%', md: '50%' }}
          maxHeight={450}
          position={'absolute'}
          bottom={-24}
          right={0}
          zIndex={1}
          data-aos={'fade-down'}
        >
          <CityIllustration width={'100%'} height={isLg ? 450 : '100%'} />
        </Box>
      </Box>
      <Container>
        <Visi />
        <Misi />
      </Container>
    </Box>
  );
};

export default Travel;
