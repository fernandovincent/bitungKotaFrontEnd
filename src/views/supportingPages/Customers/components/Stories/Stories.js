import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
// import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';

const Stories = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          Dokumen Perencanaan
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={'center'}
        >
          Daftar Dokumen Perencanaan
        </Box>
      </Box>
      <Grid container spacing={4}>
        {[
          {
            media:
              'https://drive.google.com/uc?id=1ItbBC1hAUWXUxqwy9Fj9wfpGd-eErLOY',
            companyLogo:
              'https://assets.maccarianagency.com/svg/logos/airbnb-original.svg',
            description: 'RPJPD',
            link:
              'https://drive.google.com/u/1/uc?id=1_m6T3AUBLL2v6t81m667R-9Og0AgXXt3&export=download',
          },
          {
            media:
              'https://drive.google.com/uc?id=1a864Hv4WlpEFwJ2pVdRG-bO2qL4Eleuy',
            companyLogo:
              'https://assets.maccarianagency.com/svg/logos/amazon-original.svg',
            description: 'RPJMD',
          },
          {
            media:
              'https://drive.google.com/uc?id=1_OhwhY6P4xmxP2NRb6XtbxIG-o8xiIeg',
            companyLogo:
              'https://assets.maccarianagency.com/svg/logos/fitbit-original.svg',
            description: 'RKPD',
          },
          {
            media:
              'https://drive.google.com/uc?id=1gbIIAhSu0r1Zb3NSn2L8Uc5rRSdm-3bW',
            companyLogo:
              'https://assets.maccarianagency.com/svg/logos/google-original.svg',
            description: 'RENSTRA',
          },
          {
            media:
              'https://drive.google.com/uc?id=1eQW_X6GN8GnkYCCi97QoO69orIINShvi',
            companyLogo:
              'https://assets.maccarianagency.com/svg/logos/hubspot-original.svg',
            description: 'LAKIP',
          },
          {
            media:
              'https://drive.google.com/uc?id=1ejHnm2azKxjQH7FjnXWM_W7tNEF9v5Ue',
            companyLogo:
              'https://assets.maccarianagency.com/svg/logos/mapbox-original.svg',
            description: 'LPPD',
          },
        ].map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Box
              component={'a'}
              href={item.link}
              display={'block'}
              width={'100%'}
              height={'100%'}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={'100%'}
                height={'100%'}
                borderRadius={3}
                display={'flex'}
                flexDirection={'column'}
              >
                <CardMedia
                  image={item.media}
                  title={item.title}
                  sx={{
                    height: 240,
                  }}
                />
                <Box component={CardContent}>
                  <Box maxWidth={100} marginY={2}>
                    <Box />
                  </Box>
                  <Typography
                    align={'center'}
                    variant={'h3'}
                    color="textPrimary"
                  >
                    {item.description}
                  </Typography>
                </Box>
                <Box flexGrow={1} />
                <Box
                  component={CardActions}
                  justifyContent={'flex-start'}
                ></Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

Stories.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Stories;
