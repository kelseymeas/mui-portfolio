import React from 'react';
import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  FullScreenHeroWithImageSlider,  
  CtaWithCoverImage,
  FeaturesWithMobileScreenshot,
  FeaturesWithSimpleIcons,
  LogoGridSimpleCentered
} from './components';

const Apex = () => {
  return (
    <Main>
      <FullScreenHeroWithImageSlider />

      <Container> 
        <LogoGridSimpleCentered />
      </Container>

      <Container>
        <FeaturesWithSimpleIcons />
      </Container>
           
      <Container>
        <FeaturesWithMobileScreenshot />
      </Container>  

      <CtaWithCoverImage />

    </Main>
  );
};

export default Apex;