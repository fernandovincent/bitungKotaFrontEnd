import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from 'common/Container';
// import { DemoPages, Features, Footer, Hero, Highlights } from './components';
import { Hero } from './components';
import Gallery from '../Travel/components/Gallery';
import News from '../Marketing/components/News';
import Advantages from '../PaymentApp/components/Advantages';
// import Stories from '../../supportingPages/Customers/components/Stories';

const Home = () => {
  const theme = useTheme();
  return (
    // <Box>
    //   <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
    //     <Container position="relative" zIndex={2}>
    //       <Hero />
    //     </Container>
    //   </Box>
    //   <Container>
    //     <Highlights />
    //   </Container>
    //   <Container>
    //     <Features />
    //   </Container>
    //   <Box bgcolor={theme.palette.alternate.main}>
    //     <Container>
    //       <DemoPages />
    //     </Container>
    //   </Box>
    //   <Container>
    //     <Footer />
    //   </Container>
    // </Box>
    <Box mt={9}>
      <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
        <Container position="relative" zIndex={2}>
          <Hero />
        </Container>
      </Box>
      {/* <Container>
        <Stories />
      </Container> */}
      <Container mt={11.5}>
        <Gallery />
      </Container>
      <Container>
        <News />
      </Container>
      <Box bgcolor={theme.palette.alternate.main}>
        <Container>
          <Advantages />
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
