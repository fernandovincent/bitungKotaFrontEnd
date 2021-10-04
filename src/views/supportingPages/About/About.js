import React from 'react';
import Box from '@material-ui/core/Box';
import Container from 'common/Container';
import { Gallery, Headline, Story } from './components';

const About = () => {
  return (
    <Box>
      <Container>
        <Headline />
      </Container>
      <Container paddingY={'0 !important'}>
        <Gallery />
      </Container>
      <Container paddingY={'0 !important'}>
        <Story />
      </Container>
    </Box>
  );
};

export default About;
