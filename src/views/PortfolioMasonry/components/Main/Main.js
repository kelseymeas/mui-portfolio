import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const mockLeftGrid = [
  {
    image: 'https://kingswealth-images-cdn.s3.us-west-1.amazonaws.com/images/brano-Mm1VIPqd0OA-unsplash.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    title: 'Lorem ipsum dolor sit amet,',
  },
  {
    image: 'https://kingswealth-images-cdn.s3.us-west-1.amazonaws.com/images/logan-moreno-gutierrez-fN6K30xtiKE-unsplash.jpg',
    description: 'Excepteur sint occaecat cupidatat non proident',
    title: 'Consectetur adipiscing elit',
  },
  {
    image: 'https://kingswealth-images-cdn.s3.us-west-1.amazonaws.com/images/akram-huseyn-fKC9eWRnlGY-unsplash.jpg',
    description: 'Eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    title: 'Labore et dolore magna aliqua',
  },
  // {
  //   image: 'https://assets.maccarianagency.com/backgrounds/img11.jpg',
  //   description:
  //     'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
  //   title: 'Eiusmod tempor incididunt',
  // },
];

const mockMiddleGrid = [
  {
    image: 'https://kingswealth-images-cdn.s3.us-west-1.amazonaws.com/images/testalize-me-9xHsWmh3m_4-unsplash.jpg',
    description: 'Nam libero tempore, cum soluta nobis est eligendi optio',
    title: 'Uae ab illo inventore',
  },
  {
    image: 'https://kingswealth-images-cdn.s3.us-west-1.amazonaws.com/images/national-cancer-institute-ct10qdGv1hQ-unsplash.jpg',
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus',
    title: 'Sed ut perspiciatis',
  },
  {
    image: 'https://kingswealth-images-cdn.s3.us-west-1.amazonaws.com/images/cdc-WCEOtVmk2VY-unsplash.jpg',
    description:
      'On the other hand, we denounce with righteous indignation and dislike',
    title: 'Sit voluptatem',
  },
  // {
  //   image: 'https://assets.maccarianagency.com/backgrounds/img8.jpg',
  //   description: 'Quos dolores et quas molestias excepturi',
  //   title: 'Accusantium doloremque',
  // },
];

const mockRightGrid = [
  {
    image: 'https://kingswealth-images-cdn.s3.us-west-1.amazonaws.com/images/talha-hassan-wdBqEHzo39g-unsplash.jpg',
    description: 'Et harum quidem rerum facilis est et expedita distinctio',
    title: 'Totam rem aperiam',
  },
  {
    image: 'https://kingswealth-images-cdn.s3.us-west-1.amazonaws.com/images/sharon-pittaway-4_hFxTsmaO4-unsplash.jpg',
    description:
      'Qui blanditiis praesentium voluptatum deleniti atque corrupti',
    title: 'Unde omnis iste natus',
  },
  {
    image: 'https://kingswealth-images-cdn.s3.us-west-1.amazonaws.com/images/julia-koblitz-RlOAwXt2fEA-unsplash.jpg',
    description: 'Itaque earum rerum hic tenetur a sapiente delectus',
    title: 'Beatae vitae dicta',
  },
  // {
  //   image: 'https://assets.maccarianagency.com/backgrounds/img9.jpg',
  //   description:
  //     'On the other hand, we denounce with righteous indignation and dislike',
  //   title: 'Nemo enim ipsam',
  // },
];

const Column = ({ data }) => {
  const theme = useTheme();
  return (
    <Box>
      {data.map((item, i) => (
        <Box
          key={i}
          sx={{
            marginBottom: { xs: 2, sm: 3 },
            '&:last-child': { marginBottom: 0 },
          }}
        >
          <Box
            boxShadow={1}
            sx={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 2,
              '&:hover': {
                '& img': {
                  transform: 'scale(1.2)',
                },
                '& .portfolio-massonry__main-item': {
                  bottom: 0,
                },
              },
            }}
          >
            <Box
              component={'img'}
              loading="lazy"
              height={1}
              width={1}
              src={item.image}
              alt="..."
              maxHeight={{ xs: 400, sm: 600, md: 1 }}
              sx={{
                transition: 'transform .7s ease !important',
                transform: 'scale(1.0)',
                objectFit: 'cover',
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
              }}
            />
            <Box
              position={'absolute'}
              bottom={'-100%'}
              left={0}
              right={0}
              padding={4}
              bgcolor={'background.paper'}
              className={'portfolio-massonry__main-item'}
              sx={{ transition: 'bottom 0.3s ease 0s' }}
            >
              <Box
                component={'svg'}
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 1920 100.1"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  transform: 'translateY(-90%)',
                  zIndex: 2,
                  width: 1,
                }}
              >
                <path
                  fill={theme.palette.background.paper}
                  d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
                ></path>
              </Box>
              <Typography variant={'h6'} fontWeight={700} gutterBottom>
                {item.title}
              </Typography>
              <Typography>{item.description}</Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

Column.propTypes = {
  data: PropTypes.array.isRequired,
};

const Main = () => {
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Column data={mockLeftGrid} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Column data={mockMiddleGrid} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Column data={mockRightGrid} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;
