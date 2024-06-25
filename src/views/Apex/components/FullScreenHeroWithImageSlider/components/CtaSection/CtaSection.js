import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { alpha, useTheme } from '@mui/material/styles';

const CtaSection = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Typography
        sx={{
          textTransform: 'uppercase',
          fontWeight: 'medium',
        }}
        gutterBottom
        color={'text.secondary'}
      >
        Join Apex Clinical Research Study.
      </Typography>
      <Box marginBottom={2}>
        <Typography
          variant="h3"
          color="text.primary"
          sx={{
            fontWeight: 700,
          }}
        >
          Make a Difference.{' '} <br />
          <Typography
            color={'primary'}
            component={'span'}
            variant={'h4'}
            sx={{
              background: `linear-gradient(180deg, transparent 82%, ${alpha(
                theme.palette.secondary.main,
                0.3,
              )} 0%)`,
            }}
          >
            Advance the Future of Medicine for Yourself and Everyone.
          </Typography>
        </Typography>
      </Box>
      <Box marginBottom={3}>
        <Typography variant="h6" component="p" color="text.secondary">
        Apex is a multi-specialty dedicated clinical research site with over 20 years 
        of conducting clinical trials. Our team collaborates and functions as one 
        connected unit which ensures quality and excellence. Whether you are a participant, 
        sponsor, or CRO, our dedicated clinicians and attentive research staff make the 
        process efficient and safe.
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'stretched', sm: 'flex-start' }}
      >
        <Button
          variant="contained"
          color="primary"
          href="/about"
          size="large"
          fullWidth={isMd ? false : true}
        >
          Get In Touch
        </Button>
        <Box
          component={Button}
          variant="outlined"
          color="primary"
          size="large"
          href="/about"
          marginTop={{ xs: 2, sm: 0 }}
          marginLeft={{ sm: 2 }}
          fullWidth={isMd ? false : true}
        >
          Learn More
        </Box>
      </Box>
    </Box>
  );
};

export default CtaSection;
