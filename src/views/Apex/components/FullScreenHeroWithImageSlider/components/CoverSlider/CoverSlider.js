import React from 'react';
import Box from '@mui/material/Box';

const CoverSlider = () => {
  return (
    <Box
      sx={{
        height: { xs: 'auto', md: 1 },
        '& img': {
          objectFit: 'cover',
        },
      }}
    >
      <Box
        component={'img'}
        src={'https://kingswealth-images-cdn.s3.us-west-1.amazonaws.com/images/DALL%C2%B7E+2024-06-25+02.23.50+-+A+simple+hero+image+for+the+front+page+of+a+clinical+research+study+company+website.+The+image+should+have+a+clean+and+minimalistic+design%2C+featuring+.webp'}
        height={{ xs: 'auto', md: 1 }}
        maxHeight={{ xs: 300, md: 1 }}
        width={1}
        maxWidth={1}
      />
    </Box>
  );
};

export default CoverSlider;
