import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

//import { NavItem } from './components';

const Topbar = ({ onSidebarOpen, colorInvert = false }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  // const {
  //   //landings: landingPages,
  //   //secondary: secondaryPages,
  //   //company: companyPages,
  //   //account: accountPages,
  //   // portfolio: portfolioPages,
  //   //blog: blogPages,
  // } = pages;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="Apex Clinical"
        width={{ xs: 100, md: 120 }}
      >
        <Box
          component={'img'}
          src={
            mode === 'light' && !colorInvert
              ? 'https://img.icons8.com/ios-filled/50/old-vmware-logo.png'
              : 'https://img.icons8.com/ios-filled/50/old-vmware-logo.png'
          }
          height={.4}
          width={.4}
        />
      </Box>

      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        {/* <Box>
          <NavItem
            title={'Landings'}
            id={'landing-pages'}
            items={landingPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Company'}
            id={'company-pages'}
            items={companyPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Account'}
            id={'account-pages'}
            items={accountPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Pages'}
            id={'secondary-pages'}
            items={secondaryPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Blog'}
            id={'blog-pages'}
            items={blogPages}
            colorInvert={colorInvert}
          />
        </Box> */}

        <Box marginLeft={4}>
          <Button
            colorInvert={colorInvert}
            component="a"
            target="blank"
            href="/about"
            size="large"
          >
            About
          </Button>
        </Box>

        <Box marginLeft={4}>
          <Button
            colorInvert={colorInvert}
            component="a"
            target="blank"
            href="/portfolio-masonry"
            size="large"
          >
            Research Studies
          </Button>
        </Box>

        {/* <Box marginLeft={4}>
          <Button
            colorInvert={colorInvert}
            component="a"
            target="blank"
            href="/Pricing"
            size="large"
          >
            Pricing
          </Button>
        </Box> */}

        {/* <Box marginLeft={4}>
          <NavItem
            title={'Portfolio'}
            id={'portfolio-pages'}
            items={portfolioPages}
            colorInvert={colorInvert}
          />
        </Box> */}
        <Box marginLeft={4}>
          <Button
            variant="contained"
            color="primary"
            component="a"
            target="blank"
            href="/contact-page-cover"
            size="large"
          >
            Contact Us
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
