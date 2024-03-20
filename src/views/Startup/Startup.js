import React from 'react';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';// import Box from '@mui/material/Box';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Team,
  Features,
  // Hero,
  Partners,
  // Process,
  // Reviews,
  // Work,
  Customization,
  Contact,
  WithBorderedCardsAndBrandColor,
  FullScreenHeroWithPromoImagesAndTypedText
} from './components';

const Startup = () => {
  const theme = useTheme();
  return (
    <Main colorInvert={true}>
      {/* <Hero /> */}
      <FullScreenHeroWithPromoImagesAndTypedText />

      <Container>
        <Features />
      </Container>
      
      <Box bgcolor={'alternate.main'} position={'relative'}>
        <Container position="relative" zIndex={2}>
          <Customization />
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1921 273"
          sx={{
            position: 'absolute',
            width: '100%',
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 1,
            height: '35%',
          }}
        >
          <polygon
            fill={theme.palette.background.paper}
            points="0,273 1921,273 1921,0 "
          /> 
        </Box>
      </Box>

      <Container>
        {/* <Partners /> */}
      </Container>

      <WithBorderedCardsAndBrandColor />

      <Container>
        <Partners />
      </Container>

      <Container>
        <Team />
      </Container>

      <Divider />

      <Container>
        <Contact />
      </Container>

    </Main>
  );
};

export default Startup;
