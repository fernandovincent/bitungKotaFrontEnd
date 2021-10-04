import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const Hero = () => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={2}>
            <Typography
              variant="h2"
              color="textPrimary"
              sx={{ fontWeight: 700 }}
              mt={10}
            >
              Hengky Honandar, SE
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography
              data-aos="fade-up"
              variant="h6"
              component="p"
              color="textSecondary"
            >
              Tempat / Tanggal Lahir : Bitung, 26 Maret 1965 <br />
              Alamat Rumah : Kelurahan Manembo-nembo Lingk. I RT. 01 Kecamatan
              Matuari Kota Bitung <br />
              Alamat Kantor : Kantor Wakil Walikota Bitung <br />
              Nama Istri : - <br />
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        container
        alignItems={'center'}
        justifyContent={'center'}
        xs={12}
        md={6}
        data-aos={isMd ? 'fade-left' : 'fade-up'}
      >
        <Box
          component={LazyLoadImage}
          height={'100%'}
          width={'100%'}
          src={
            'https://www.bitungkota.go.id/uploads/wakil_walikota/1617184741321.jpg'
          }
          alt="..."
          effect="blur"
          boxShadow={3}
          borderRadius={4}
          maxWidth={450}
        />
      </Grid>
    </Grid>
  );
};

export default Hero;
